import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  history: { type: 'hash' },
  routes: [{ path: '/', component: '@/pages/index' }],
});
