<template>
  <div class="forif">
    <h1>New For / If page</h1>
    <h1 v-if="awesome">Vue is Visible!</h1>
    <h1 v-if="!awesome">Vue is Unvisibel!</h1>
    <h2 v-else-if="isElse">This is Else If</h2>
    <h1 v-else>Oh no 😢</h1>
    <!-- v-if다음에 v-else가 오는것 if/else 조건문  if/elseif/else 순서중요-->
    <h1 v-show="ok">안녕하세요!</h1>
    <!-- v-show/v-if는 기능이 같음/ v-if는 랜더링 시, false면 아예 없는것 노출력
    / v-show 랜더링 시, css에서만 display:none처리됨. 
    보였다가 안보였다가 하는 것 연산량을 줄여주는 효과 (깜빡깜빡하면서)-->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "ForIf",
  components: {},
  data() {
    return { awesome: true, isElse: true, ok: true };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.forif {
}
</style>

