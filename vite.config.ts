import react from '@vitejs/plugin-react';

export default (() => {
  return {
    root: new URL('src', import.meta.url).pathname,
    base: './',
    build: {
      target: 'esnext',
      outDir: 'build',
      emptyOutDir: true,
      minify: false,
      sourcemap: false,
      rollupOptions: {
        output: {
          entryFileNames: 'bundles/[name].js',
          chunkFileNames: 'bundles/[name].js',
          assetFileNames: 'bundles/[name].[ext]',
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    plugins: [react()],
    server: {
      port: 8080,
      host: 'localhost',
      strictPort: true,
    },
    clearScreen: false,
  };
});
