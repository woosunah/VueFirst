<template>
  <div class="main-banner">
    <!-- <img :src="require('../../assets/banners/banners.jpg')" alt="images" /> -->
    <!-- v-img를 해야 반응형으로 작동함 / 그냥 imv :src하면 반응형으로 작동안됨 -->
    <v-img
      :src="require('../../assets/banners/banners.jpg')"
      alt="images"
      min-height="485"
    ></v-img>
    <div class="main-copy">
      WELCOME TO
      <br />
      <span>VUETIFY</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import AppBar from "@/components/core/AppBar.vue";
// (필요하든 안필요하든 무조건 불러와야함 / 동기적으로 불러오는것)

export default {
  name: "Main",
  components: {
    // MainBanner: () => import("@/components/main/MainBanner.vue")
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main-banner {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-copy {
  align-content: center;
  color: white;
  position: absolute;
  font-size: 45px;
  font-weight: 100;
}
.main-copy span {
  font-size: 100px;
  font-weight: bold;
  line-height: 1em;
}
</style>
