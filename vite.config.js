
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        cart: resolve(__dirname, 'addToCart.html'),
        auth: resolve(__dirname, 'auth.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
