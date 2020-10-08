<template>
  <div class="gallery2">
    <!-- component폴더안에 gallery폴더 안에 연결된 gallery2파일 -->
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(image, i) in images"
        :key="i"
      >
        <!-- 반응형하려면 필수로 sm, md, lg값 줘야함 -->
        <image-card
          :url="image.download_url"
          :author="image.author"
        ></image-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
// postman에서 불러오는 코드?
export default {
  name: "Gallery2",
  components: {
    ImageCard: () => import("@/components/gallery/ImageCard.vue")
  },
  data() {
    return {};
  },
  computed: { ...mapState(["images"]) },
  methods: {},
  beforeMount() {
    //image data를 이미 불러온 상태라서 api통신을 그만하기 위해 if써줌. 아니면 서버 다운됨.
    // if (this.images.length <= 0) {

    // $http.get - http get요청 코드
    this.$http.get("https://picsum.photos/v2/list").then(images => {
      // console.log(images);
      // (this.images = images.data)]);
      let parsedImage = images.data.map(el => {
        let tmpArr = el.download_url.split("/");
        tmpArr.splice(-2, 2, "300/200.webp");
        el.download_url = tmpArr.join("/");
        return el;
      });
      this.$store.commit("setImages", parsedImage);
    });
  }
};
</script>

<style lang="scss" scoped>
.gallery2 {
  // min-height: calc(100vh - 120px);
}
</style>