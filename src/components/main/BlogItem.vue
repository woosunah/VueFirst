<template>
  <div class="blog-item col-md-4 col-12">
    <!-- 웹 페이지 화면이 col-12가 기본이고 col-4하면 1/3로 나뉨 -->
    <!-- "col-md-4 col-12" - 부트스트랩 소스 사용 적용 파일명 -->
    <v-img :src="imgUrl" height="300"></v-img>
    <!-- 이미지 사이즈 v-img height로 사이즈 조절 -->
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <v-btn>continue reading</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "BlogItem",
  props: ["imgUrl", "title", "text"],
  // props의 이름과 blog-item박스안의 h2,p,v-img의 태그명이랑 같아야함
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.blog-item {
}
h2 {
  margin-bottom: 20px;
  font-size: 30px;
}
// p {
//   // min-height: 200px;
// }
</style>