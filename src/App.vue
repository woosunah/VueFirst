<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
// app.vue에 설정된 css가 다 적용되려면, scoped지워야됨?
h2 {
  font-weight: 700;
  font-size: 3rem;
  // 폰트사이즈 전용 단위
  text-align: center;
}
p {
  font-weight: 300;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.87);
}
.divider {
  width: 56px;
  margin: 0 auto 32px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: 5px;
  opacity: 0.5;
}
</style>
