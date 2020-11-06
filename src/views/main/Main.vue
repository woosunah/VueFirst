<template>
  <div class="main">
    <main-banner></main-banner>
    <about-me></about-me>
    <features></features>
    <parallax1></parallax1>
    <blog></blog>
    <vuex-ex></vuex-ex>
    <contact-me></contact-me>
  </div>
</template>

<script>
// @ is an alias to /src
// import AppBar from "@/components/core/AppBar.vue";
// (필요하든 안필요하든 무조건 불러와야함 / 동기적으로 불러오는것)

export default {
  name: 'Main',
  components: {
    MainBanner: () => import('@/components/main/MainBanner.vue'),
    AboutMe: () => import('@/components/main/AboutMe.vue'),
    Features: () => import('@/components/main/Features.vue'),
    Parallax1: () => import('@/components/main/Parallax1.vue'),
    Blog: () => import('@/components/main/Blog.vue'),
    VuexEx: () => import('@/components/main/VuexEx.vue'),
    ContactMe: () => import('@/components/main/ContactMe.vue'),
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  padding-bottom: 60px;
}
</style>
