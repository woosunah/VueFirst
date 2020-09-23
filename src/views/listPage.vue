<template>
  <!-- vue자체의 문법을 내포하고 있는데, vue에서는 forIn을 사용. -->
  <div class="list">
    <h1>List Page</h1>
    <ul id="example-1">
      <li v-for="(item, i) in items" :key="i">{{ item.message }}</li>
      <!-- (item, i(index:0,1,2etc)) -->
    </ul>
    <!-- forEach / forIn반복문(KEY값을 가져옴) / forOf반복문(값을 가져옴) 기존for문보다 더 자주사용-->
    <!-- 자바스크립트는 forOf기반 -->
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name) in object" :key="name">
        {{ value }} : {{ name }}
      </li>
    </ul>
    <li v-for="(n, i) in evenNumbers" :key="i">{{ n }}</li>
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "List",
  components: {},
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      // 배열 출력 예제
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10"
      },
      // 객체 출력 예제
      numbers: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.list {
}
</style>
