<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <h1>{{ msg }}</h1> -->
    <span v-bind:title="message">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수
      있습니다!
    </span>
    <!-- message는 변수명으로 내가 임의로 작성한 이름 -->
    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <li v-for="(todo, i) in todos" v-bind:key="i">{{ todo.text }}</li>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>
    <input v-model="message" />
    <!-- v-model은 실시간으로 받는 체크박스 개념 -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HelloWorld :msg="안녕하세요"></HelloWorld>
    <HelloWorld :msg="안녕하세요"></HelloWorld>
    <HelloWorld :msg="안녕하세요"></HelloWorld>
    <Event :pageH1="eventH1"></Event>
    <Event :pageH1="'이건H2'"></Event>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Event from "@/views/Event.vue";

export default {
  name: "Home",
  components: { HelloWorld, Event },
  data() {
    return {
      eventH1: "이건 EventH1",
      message: "안녕하세요! Vue.js!",
      seen: true,
      todos: [
        { text: "JavaScript 배우기" },
        { text: "Vue 배우기" },
        { text: "무언가 멋진 것을 만들기" }
      ]
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
// 객체 안에 들어가있는건 methods라고 부름
</script>
<style lang="scss" scoped>
.home {
}
</style>
