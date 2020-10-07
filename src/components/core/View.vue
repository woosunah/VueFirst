<template>
  <div>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
      <!-- component들 전환해주는 역할?router-view -->
    </transition>
  </div>
</template>



<script>
// @ is an alias to /src

export default {
  name: "CoreView",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
//  HOME -> Gallery로 서브메뉴 사이트 이동 시,
// home or gallery서브메뉴 안의 내용물이 fade효과 되면서 현재 페이지에서 다른페이지로 넘어가짐
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// .slide-fade-enter-active {
//   transition: all 0.3s ease;
// }
// .slide-fade-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }
</style>