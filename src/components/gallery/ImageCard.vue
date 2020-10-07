<template>
  <div>
    <v-img :src="url" aspect-ratio="1.7"></v-img>
  </div>
</template>

<script>
export default {
  props: ["url"]
};
</script>

<style lang="scss" scoped>
</style>