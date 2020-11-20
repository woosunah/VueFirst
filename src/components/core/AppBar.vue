<template>
  <v-app-bar color="white">
    <v-avatar class="logo">
      <img :src="require('../../assets/logo.svg')" alt="John" />
      <!-- :src require은 js파일을 불러오는것, import랑 비슷한 개념 -->
      <!-- // /C:/Users/User/Document/portfolio/src/components/core/../../assets/logo.v-icon--svg
      // <img :src="require('../../assets/logo.svg')" alt="John" /위와 아래 경로가 같음-->
    </v-avatar>
    <v-toolbar-title>VUETIFY</v-toolbar-title>
    <router-link to="/" class="menu">Home</router-link>
    <router-link to="/gallery" class="menu">Gallery</router-link>
    <router-link to="/gallery2" class="menu">Gallery Images</router-link>
    <router-link to="/service" class="menu">Service</router-link>

    <!-- router-link - 서브메뉴 a태그 역할 하드코딩과 다르게 서브페이지로 넘어갈때, 
    빠르게 넘어감 하드코딩으로는 아예 새로고침하듯이 새페이지 열어서 가져오기에 속도가 늦게 열림-->

    <v-spacer></v-spacer>
    <v-btn>login</v-btn>
    <!-- <v-btn>button</v-btn>-->
    <!-- flex대신 줄간격사용 -> v-spacer 사용 후 밑에 v-btn만 입력해도 v-spacer적용됨 -->
  </v-app-bar>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AppBar',
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.logo {
  margin-left: 20px;
}
.menu {
  margin-left: 20px;
}
</style>
