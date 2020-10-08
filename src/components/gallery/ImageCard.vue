<template>
  <!-- hover시,힌트 -->
  <!-- 1. Vue.js Document 이벤트 핸들링 참조 
        2. ImageCard에서  이미지 위에 오랜지색 div 추가해서  opacitiy를  이벤트를 이용해 변경  -->
  <!-- >  3.ImageCard.vue에서  cover와  mouseover mouseleave 이벤트 적용한 코드 
// ImageCard.vue -->
  <!-- 4.ImageCard.vue에  mouseover 이벤트 적용 완료  -->

  <!-- aspect ratio - 화면비 디스플레이 화면 가로와 세로 길이의 비율 x.y형태 -->
  <div class="image-card" @mouseover="mouseover" @mouseleave="mouseleave">
    <transition name="fade">
      <!-- <v-fade-transition> </v-fade-transition> 으로 v-expand-transition 
      태그만 v-()-transition으로 넣어주면 아래css에 따로 효과 안줘도 자동 적용됨  -->
      <div v-if="isMouseOver" class="cover">
        <!-- 마우스가 보였다 안보였다 하려고 v-if를 사용? -->
        <v-row justify="center" align="center" style="height: 100%;">
          <div class="content-wrapper">
            <v-avatar color="#efa053">
              <v-icon dark large>
                mdi-link
              </v-icon>
            </v-avatar>
            <h4>{{ author }}</h4>
          </div>
        </v-row>
      </div>
    </transition>
    <v-img :src="url" aspect-ratio="1.7"></v-img>
  </div>
</template>

<script>
export default {
  props: ["url", "author"],
  data() {
    return {
      isMouseOver: false
    };
  },
  methods: {
    // mouse event 이벤트
    mouseover() {
      // console.log('mouse up!!', e.target)
      // 테스트해보려고 console.log로 선출력 확인
      this.isMouseOver = true;
    },
    mouseleave() {
      // console.log('mouse leave!!!',e.target)
      this.isMouseOver = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-card {
  position: relative;
}
.cover {
  background-color: #efa053;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.8;
}
.content-wrapper {
  width: 200px;
  height: 100px;
  margin: auto;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

