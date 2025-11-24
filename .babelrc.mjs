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
    ignore: [
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
    presets: ['@babel/preset-typescript'],
    plugins: [],
  };
  // set caching method
  // invalidate cache only if NODE_ENV change
  api.cache.using(() => process.env.NODE_ENV && process.env.STORYBOOK_BUILD);
  // set configuration based on environment
  const isProduction = api.env('production');
  const isStoryBookBuild = Boolean(process.env.STORYBOOK_BUILD);
  if (isProduction && !isStoryBookBuild) {
    config.sourceType = 'module';
    config.ignore.push(
      'node_modules/**/*',
      // exclude stories folder
      'src/**/stories/**/*',
      // exclude all stories files
      'src/**/*.stories.ts',
      'src/**/*.stories.tsx'
    );
    config.plugins.push(
      [
        'babel-plugin-module-resolver',
        {
          root: ['./'],
          alias: resolveAliases(),
        },
      ],
      [
        'babel-plugin-transform-rewrite-imports',
        {
          replaceExtensions: { '^@mui/icons-material(.+?)': `@mui/icons-material/esm$1` },
        },
      ]
    );
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
