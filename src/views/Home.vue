<template>
  <div class="home">
    <core-app-bar></core-app-bar>
    <core-view></core-view>
    <core-footer></core-footer>
    <!-- 최상단의 총 3개의 구조로 나뉘는게 기본구조 -->
  </div>
</template>

<script>
// @ is an alias to /src
// import AppBar from "@/components/core/AppBar.vue";
// (필요하든 안필요하든 무조건 불러와야함 / 동기적으로 불러오는것)

export default {
  name: "Home",
  components: {
    CoreAppBar: () => import("@/components/core/AppBar.vue"),
    CoreView: () => import("@/components/core/View.vue"),
    CoreFooter: () => import("@/components/core/Footer.vue")
    // 필요한 타이밍에만 불러오는 방법 : 비동기적 / 비동기적으로 불러오는 방법 /
    // 비동기적 방법으로 많이사용
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
