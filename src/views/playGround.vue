<template>
  <div class="playground">
    <!-- kebab case로 작성 class명은 -->
    <span>메시지 : {{ msg }}</span>
    <div v-html="msg"></div>
    <!-- v- 자바스크립트 끌어오는 용어 -->
    <div v-bind:title="title">타이틀</div>
    <div>{{ title.split('').reverse().join('') }}</div>
    <!-- div @bind="doSomething" -->
    <!--  v- (디렉티브라고 부름) title이 타이틀 문자 밑에 뜨는걸 나타냄.-->
    <div>{{ reverseTitle }}</div>
    <div>{{ reverse() }}</div>
    <!-- <div :class="{ active: isActive }" class="text-danger">클래스 바인딩</div> true/false 삼항 연산자 (제일 많이 사용)-->
    <!-- <div :class="['active', 'text-danger']">클래스 바인딩(제일 많이 사용)</div> -->
    <div :class="[isActive ? 'active':'', 'text-danger']">클래스 바인딩</div>
    <!--삼항 연산자 ":" -->
    <!-- 삼항 조건 연산자 true : false  -->
    <!-- <div :class="{ active(class이름): isActive }"></div> -->
    <div v-bind:class="{ active: !isActive }">클래스 바인딩 반전</div>
    <!-- 클래스 바인딩 -->
    <!-- <div :style="{color : 'blue', fontSize: size + 'px'}">인라인 스타일 바인딩</div> -->
    <div :style="{color : 'blue', fontSize: size + 'px'}">인라인 스타일 바인딩</div>
    <div :style="fontStyle">인라인 스타일 바인딩</div>
    <!-- font-size하면 에러가 나서 fontSize로 사용함 or 'font-size' 이렇게 문자열로 사용-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "playGround",
  //playGround는 그냥 지어준 이름, class와 달라도 상관없음.
  components: {},
  //key : {vlaue} / data() <-함수   , : 오브젝트안에 몇개를 더 넣을때 사용/ , :는 함수끝에 넣는것
  data() {
    return {
      msg: '<p style="color:red;">안녕하세요</p>',
      title: "안녕하세요 vue.js입니다.",
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",
      isActive: true,
      size: 30,
      fontStyle: { color: "orange", fontSize: "30px" }
    };
  },
  computed: {
    reverseTitle() {
      this.title
        .split("")
        .reverse()
        .join("");
      let result = this.title + "이건 computed";
      return result;
    }
  },
  //여러줄의 연산이 필요한 걸 - computed /
  // 캐싱이 되는 것(반복) this.title안에 내용이 한번만 실행되고 그 이후에 불러올땐,
  // 저장된 상태에서 연산하지 않고 불러오기만 하는것.
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
    // ex)로그인 창에서 번호를 입력할때 쓰는즉시 틀린경우 경고하는거?
  },
  methods: {
    reverse() {
      this.title
        .split("")
        .reverse()
        .join("");
      let result = this.title + "이건 computed";
      return result;
    }
  }
  //computed, methods 각 함수가 같긴하나,
  // methods는 한번 불러올때마다 첨부터 끝까지 반복
  // ex)유튜브 채널에서 계속 내용물이 바뀌는건 methods /
  // 각 영상마다 나중에 볼 영상 등 똑같은 내용 반복은 computed사용
};
</script>
<style lang="scss" scoped>
.active {
  font-size: 30px;
  color: red;
}
.text-danger {
  border: 1px solid purple;
}
//여기서의 플레이그라운드이름과 상단의 클래스 이름은 같아야함.
</style>

//computed(선언형/반응형 getter) 와 watch(명령형)의 다른점 -> 반응형에서 사용.
// class 이름은 kebab-case (무조건 소문자 띄어쓰기 "-"하이픈으로 대체
// 변수명은 cameCase처럼 소+대문자 
// 파일명은 class?,vue파일-PascalCase ex)PlayGround.vue / js파일은 파일명을 snake_case 소문자로 작성