<template>
  <div class="event">
    <h1>Event Page : {{ pageH1 }}</h1>
    <button v-on:click="counter += 1">Add 1</button>
    <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
    <button @click="greet">Greet</button>
    <!-- v-on => @ -->
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click.ctrl="say('what')">Say what</button>
  </div>
</template>
// e.preventDefault = v-on:click.stop같은 개념?
<script>
// @ is an alias to /src
export default {
  name: "Event",
  props: ["pageH1"],
  components: {},
  data() {
    return { counter: 0, name: "Vue.js" };
    //event는 자동으로 true로 인식해서 alert이 출력됨.true or false 아니더라도 false:0,빈칸,
  },
  computed: {},
  methods: {
    greet: function(event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert("Hello " + this.name + "!");
      // `event` 는 네이티브 DOM 이벤트입니다
      console.log(event);
      if (event) {
        alert(event.target.tagName);
        // 콜백함수
      }
    },
    say: message => {
      alert(message);
      //event.preventDefault();
      // // 새로고침 막기
      event.stopPropagation();
      // 이벤트 상위 엘리먼트 전달 중지
    }
  }
};
</script>

<style lang="scss" scoped>
.event {
}
</style>
