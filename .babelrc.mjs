import { dirname, join } from 'path';
import ts from 'typescript';

function resolveAliases() {
  const cwd = process.cwd();
  const tsConfigPath = join(cwd, 'tsconfig.json');

  const { config, error } = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
  if (error) {
    throw new Error(ts.flattenDiagnosticMessageText(error.messageText, '\n'));
  }

  const parsed = ts.parseJsonConfigFileContent(config, ts.sys, dirname(tsConfigPath));
  const baseUrl = parsed.options.baseUrl ?? dirname(tsConfigPath);

  return Object.fromEntries(
    Object.entries(parsed.options.paths ?? {}).map(([alias, targets]) => [
      alias.replace(/\/\*$/, ''),
      targets[0].replace(/\/\*$/, ''),
    ])
  );
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
      // exclude tests foldders and files
      'src/**/__tests__/**/*',
      'src/test-utils.tsx',
      // exclude typing files
      'src/**/*.d.ts',
      'src/**/*.d.tsx',
      // exclude vite files
      'vite.config.mts',
      'vitest.setup.ts',
    ],
    presets: ['@babel/preset-typescript'],
    plugins: [],
  };
  // set caching method
  // invalidate cache only if NODE_ENV change
  api.cache.using(() => process.env.NODE_ENV);
  // set configuration based on environment
  const isProduction = api.env('production');
  if (isProduction) {
    config.sourceType = 'module';
    config.ignore.push(
      'node_modules/**/*',
      // exclude stories folder
      'src/**/stories/**/*',
      // exclude all stories files
      'src/**/*.stories.ts',
      'src/**/*.stories.tsx',
      // exclude Storybook MDX docs
      'src/docs/**/*'
    );
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
