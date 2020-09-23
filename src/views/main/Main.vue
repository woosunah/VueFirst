<template>
  <div class="main">
    <main-banner></main-banner>
  </div>
</template>

<script>
// @ is an alias to /src
// import AppBar from "@/components/core/AppBar.vue";
// (필요하든 안필요하든 무조건 불러와야함 / 동기적으로 불러오는것)

export default {
  name: "Main",
  components: {
    MainBanner: () => import("@/components/main/MainBanner.vue")
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main {
}
</style>
