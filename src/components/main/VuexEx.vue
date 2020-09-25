<template>
  <div class="vuex-ex-comp">
    <div v-for="(file, i) in files" :key="i">
      <v-card class="mx-auto" max-width="344">
        <v-list-item-title class="headline mb-1">{{
          file.title
        }}</v-list-item-title>
        <v-img :src="file.url"></v-img>
        <v-list-item-subtitle>{{ file.subtitle }}</v-list-item-subtitle>
      </v-card>
      <v-btn @click="addFile">AddFile</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VueEx",
  components: {},
  data() {
    return {};
  },
  computed: { ...mapState(["files"]) },
  methods: {
    addFile() {
      this.$store.commit("addFile", {
        title: "shiba",
        url:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120605_100%2Fwlsudfjqm1_1338899021027DEBJM_JPEG%2F2012-06-05_21%253B20%253B35.jpg&type=sc960_832",
        subtitle: "shiba입니다."
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.vuex-ex-comp {
}
</style>