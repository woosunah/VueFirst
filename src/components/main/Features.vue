<template>
  <div class="features">
    <div class="box">
      <h2>VUETIFY FEATURES</h2>
      <div class="divider"></div>
      <div class="wrapper">
        <feature-item
          v-for="(feature, i) in features"
          :key="i"
          :icon="feature.icon"
          :title="feature.title"
          :text="feature.text"
          class="flex-item"
        >
        </feature-item>
        <!-- feature배열을 3번 반복예정,  -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Features",
  components: {
    FeatureItem: () => import("@/components/main/FeaturesItem.vue")
  },
  data() {
    return {
      features: [
        {
          icon: "mdi-account-music",
          title: "VIBRANT COMMUNITY",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-camera-wireless-outline",
          title: "FREQUENT UPDATES",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-cloud",
          title: "LONG-TERM SUPPORT",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.features {
  padding: 20px;
  background: #eee;
}
.wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.flex-item {
  width: 300px;
  margin: 0 10px;
}
@media only screen and(max-width:768px) {
  .wrapper {
    flex-flow: column nowrap;
  }
  .flex-item {
    width: 100%;
    margin: 10px 0;
  }
}
</style>