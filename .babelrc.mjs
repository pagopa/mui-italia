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
  const config = {
    targets: {
      chrome: 100,
      safari: 15,
      firefox: 91,
    },
    presets: ['@babel/preset-typescript'],
    plugins: [],
  };
  // set caching method
  // invalidate cache only if NODE_ENV change
  api.cache.using(() => process.env.NODE_ENV);
  // set configuration based on environment
  const isProduction = api.env('production');
  console.log('-------------------------');
  console.log(process.env.NODE_ENV);
  if (isProduction) {
    config.sourceType = 'module';
    config.ignore = [
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
    ];
    config.plugins.push([
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        alias: resolveAliases(),
      },
    ]);
    config.presets.push(
      ['@babel/preset-env', { modules: false }], // modules false preserve es modules
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      'minify'
    );
  }
  // return configuration
  return config;
}
