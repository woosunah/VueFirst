<template>
  <div class="feature-item">
    <v-avatar color="#1976d2" size="36">
      <v-icon dark>{{ icon }}</v-icon>
    </v-avatar>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "FeatureItem",
  props: ["icon", "title", "text"],
  // 만든 변수를 담는 역할?
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.feature-item {
  padding: 20px;
  text-align: center;
  background: white;
}
h2 {
  margin-bottom: 20px;
  font-size: 30px;
}
</style>