<template>
  <div class="parallax1">
    <v-parallax
      dark
      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    >
      <div class="box">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="4">
            <h1 class="txt font-weight-bold md-4">24k</h1>
            <h4 class="sub_txt">GITHUB STARS</h4>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="4">
            <h1 class="txt font-weight-bold md-4">330+</h1>
            <h4 class="sub_txt">RELEASES</h4>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="4">
            <h1 class="txt font-weight-bold md-4">1m</h1>
            <h4 class="sub_txt">DOWNLOADS/MO</h4>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="4">
            <h1 class="txt font-weight-bold md-4">5m</h1>
            <h4 class="sub_txt">TOTAL DOWNLOADS</h4>
          </v-col>
        </v-row>
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
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.box .txt {
  font-size: 70px;
}
.sub_txt {
  font-size: 18px;
  font-weight: 400;
}
.box {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
@media only screen and(max-width:768px) {
  .box {
    flex-flow: column nowrap;
  }
}
</style>

