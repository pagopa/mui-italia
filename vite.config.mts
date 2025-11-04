import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve, extname } from 'path';
import { glob } from 'glob';
import { existsSync, statSync, copyFileSync, cpSync } from 'fs';

const excludedFolders = [
  // exclude stories folder
  'src/stories/**',
  // exclude all stories files
  'src/**/*.stories.{ts,tsx}',
  // exclude all test files
  'src/**/*.test.{ts,tsx}',
  'src/**/*.spec.{ts,tsx}',
  // exclude tests foldders
  'src/**/__tests__/**',
];

// ------- Plugin to copy files to dist directory after build -------
function copyFiles(targets: Array<{ src: string; dest: string }>) {
  return {
    name: 'copy', // required, will show up in warnings and errors
    writeBundle: (outputOptions: { dir?: string }) => {
      try {
        const outputDir = outputOptions.dir || 'dist';
        for (const target of targets) {
          const sourcePath = resolve(__dirname, target.src);
          const destPath = resolve(outputDir, target.dest);
          // check if it exists
          if (!existsSync(sourcePath)) {
            continue;
          }
          // check if dir or files
          const stats = statSync(sourcePath);
          if (stats.isFile()) {
            copyFileSync(sourcePath, destPath);
          } else if (stats.isDirectory()) {
            cpSync(sourcePath, destPath, { recursive: true });
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
  };
}
// ----------------------------------------------------------

// ------- Plugin to preserve directives -------
function preserveDirectives() {
  const availableFileExtensionsRegex = /\.(m|c)?(j|t)sx?$/;
  const directiveRegex = /^use (\w+)$/;
  const directives = new Set<string>();

  return {
    name: 'directives',
    transform(code, id) {
      const ext = extname(id);
      // work on only tsx and jsx files
      // that files are the only that can have directives
      if (availableFileExtensionsRegex.test(ext)) {
        
      }
    }
    moduleParsed({ ast, id }) {
      if (ast && ast.body && ast.body[0]?.type === 'ExpressionStatement') {
        const expression = ast.body[0].expression;
        if (expression.type === 'Literal' && directiveRegex.test(expression.value)) {
          directives.add(id);
        }
      }
    },
    generateBundle(options, bundle) {
      for (const [, fileData] of Object.entries(bundle)) {
        if (fileData.type === 'chunk' && fileData.moduleIds.some((id) => directives.has(id))) {
          fileData.code = `'use client';\n${fileData.code}`;
        }
      }
    },
  };
}
// ---------------------------------------------

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@tokens': resolve(__dirname, './src/tokens/index'),
      '@theme': resolve(__dirname, './src/theme/index'),
      '@illustrations': resolve(__dirname, './src/illustrations'),
      '@assets': resolve(__dirname, './src/assets'),
      '@icons': resolve(__dirname, './src/icons'),
      '@static': resolve(__dirname, './src/static'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
  plugins: [
    react(),
    dts({ exclude: excludedFolders }),
    copyFiles([
      {
        src: 'package.json',
        dest: 'package.json',
      },
      {
        src: 'LICENSE',
        dest: 'LICENSE',
      },
      {
        src: 'README.md',
        dest: 'README.md',
      },
      {
        src: 'CHANGELOG.md',
        dest: 'CHANGELOG.md',
      },
    ]),
    preserveDirectives(),
  ],
  build: {
    rollupOptions: {
      input: glob.sync('src/**/!(*.d).{ts,tsx}', {
        ignore: excludedFolders,
      }),
      output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
      external: (path) => {
        // we want exclude all the packages in the node_modules directory
        if (path.includes('node_modules')) {
          return true;
        }
        return false;
      },
      preserveEntrySignatures: 'exports-only',
    },
    target: 'ES2020',
  },
});
