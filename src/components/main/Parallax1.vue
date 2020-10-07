<template>
  <div class="parallax-view">
    <h1>parallax</h1>
    <v-parallax
      :height="isMobile ? 800 : 500"
      dark
      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    >
      <div class="inner-parallax">
        <div class="container">
          <div class="spec" v-for="(spec, i) in specs" :key="i">
            <div class="value-text">{{ spec.value }}</div>
            <div calss="title-text">{{ spec.title }}</div>
          </div>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Parallax",
  components: {},
  data() {
    return {
      specs: [
        { title: "github stars", value: "24k" },
        { title: "releases", value: "330+" },
        { title: "cownloads/mo", value: "1m" },
        { title: "toptal downloads", value: "5m" }
      ],
      isMobile: false
    };
  },
  methods: {},
  mounted() {
    let onresize = () => {
      let width = document.body.clientWidth;
      // document - > dom 객체 // html & js에서 구현되는 파일
      // document - body 출력
      // offsetwidth margin값 제외한 값을 출력해옴
      // clientwidth border 무시한 값을 출력
      console.log(width);
      if (width < 768) {
        // mobile 기준 사이즈가 768정도 공식적인(구글) 기준 확인 -> vuetify(grid)
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    };
    window.addEventListener("resize", onresize);
    // 한 페이지에서 과도한 사용 금지 (3개정도가 적당 버벅임방지/ 많아지면 버벅이니까) - "eventlistener"
    // "resize" <- event 종류 기입 , 다양한 event종류 많음. "html event종류" - 검색하면됨
  }
};
</script>

<style lang="scss" scoped>
.parallax-view {
}
.inner-parallax {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-flow: row;
  justify-content: center;
  text-align: center;
}
.spec {
  margin: 0 20px;
  width: 300px;
}
.value-text {
  font-size: 5rem;
  font-weight: bold;
}
.title-text {
  font-size: 2rem;
}

@media only screen and(max-width:768px) {
  .container {
    flex-flow: column;
    align-items: center;
  }
}
</style>
