import { join } from 'path';
import { readFileSync } from 'fs';

function resolveAliases() {
  const aliases = {};
  // read tsconfig
  const cwd = process.cwd();
  const tsConfigPath = join(cwd, 'tsconfig.json');
  const tsConfig = JSON.parse(readFileSync(tsConfigPath, { encoding: 'utf8' }));
  const paths = tsConfig.compilerOptions.paths;
  const baseUrl = tsConfig.compilerOptions.baseUrl;
  for (const [key, value] of Object.entries(paths)) {
    aliases[key.replace('/*', '')] = `${baseUrl}/${value[0].replace('/*', '')}`;
  }
  return aliases;
}

export default function getBabelConfig(api) {
  // set caching method
  api.cache(false);
  // return configuration
  return {
    sourceType: 'module',
    ignore: [
      'node_modules/**/*',
      // exclude stories folder
      'src/**/stories/**/*',
      // exclude all stories files
      'src/**/*.stories.ts',
      'src/**/*.stories.tsx',
      // exclude all test files
      'src/**/*.test.ts',
      'src/**/*.test.tsx',
      'src/**/*.spec.ts',
      'src/**/*.spec.tsx',
      // exclude tests foldders
      'src/**/__tests__/**/*',
      // exclude typing files
      'src/**/*.d.ts',
      'src/**/*.d.tsx',
    ],
    targets: {
      chrome: 100,
      safari: 15,
      firefox: 91,
    },
    presets: [
      ['@babel/preset-env', { modules: false }], // modules false preserve es modules
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      'minify',
    ],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./'],
          alias: resolveAliases(),
        },
      ],
    ],
  };
}
