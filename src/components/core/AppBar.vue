<template>
  <v-app-bar color="white">
    <v-avatar class="logo">
      <img :src="require('../../assets/logo.svg')" alt="John" />
      <!-- require은 js파일을 불러오는것, import랑 비슷한 개념 -->
      <!-- // /C:/Users/User/Document/portfolio/src/components/core/../../assets/logo.v-icon--svg
      // <img :src="require('../../assets/logo.svg')" alt="John" /위와 아래 경로가 같음-->
    </v-avatar>
    <v-toolbar-title>VUETIFY</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn>login</v-btn>
    <!-- <v-btn>button</v-btn>-->
    <!-- flex대신 줄간격사용 -> v-spacer 사용 후 밑에 v-btn만 입력해도 v-spacer적용됨 -->
  </v-app-bar>
</template>



<script>
// @ is an alias to /src

export default {
  name: "AppBar",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.logo {
  margin-left: 20px;
}
</style>