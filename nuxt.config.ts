// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //开启ssr 服务端渲染，默认开启
  ssr: true,
  //应用模块
  modules: ['@vant/nuxt'],
  compatibilityDate: '2024-11-01',
  //开启调试工具
  devtools: { enabled: true }
})
