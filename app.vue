<script setup lang="ts">
// SEO 优化
  useSeoMeta({
    title:'哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
    description:'哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
    keywords:'B站，bilibili，哔哩哔哩，哔哩哔哩动画，动漫，电影，在线动漫，高清电影'
  })
</script>

<template>
  <div>
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/video">视频页</NuxtLink>
    <NuxtPage></NuxtPage>  
    </div>
</template>


<style >
:root{
  --van-primary-color:#FB7299 !important
}
</style>