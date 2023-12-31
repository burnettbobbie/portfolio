import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises';

export default defineConfig(() => ({
  plugins: [react()],
  build: {
    rollupOptions: {
        output:
        {
            format: 'es',
            strict: false,
            entryFileNames: "[name].js",
            dir: 'dist/'
        }
     }
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
}));
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



