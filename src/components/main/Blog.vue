<!--<template>
  <div class="blog-view">
    <div class="box">
      <h2>{{ "blog".toUpperCase() }}</h2>
      <div class="divider"></div>
      v-row justify="center"
      v-col cols="12" sm(작은)="3" md="4" v-for="(blog,i) in blogs" :key="i"  
      위의 주석처리 된 부분이 vuetify grid시스템 적용
      <div class="wrapper"> 
        v-for="(blog(아무이름),i) in blogs(data,return->"blogs"이름이랑 같아야함 
        <blog-item
          v-for="(blog, i) in blogs"
          :key="i"
          :title="blog.title"
          :text="blog.text"
          :imgUrl="blog.img"
          class="blog-item"
        >
          데이터 전달하는 방법 -> "통신" :title=""이런거
        </blog-item> 
      </div> 
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Blog",
  components: {
    BlogItem: () => import("@/components/main/BlogItem.vue")
  },
  data() {
    return {
      blogs: [
        {
          title: "MOBILE FIRST & RESPONSIVE",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
          img:
            "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },
        {
          title: "THINK OUTSIDE THE BOX",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
          img:
            "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot;"
        },
        {
          title: "SMALL CHANGES, BIG DIFFERENCE",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
          img:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1892&amp;q=80&quot;"
        }
      ]
    };
  },
  methods: {}
};

</script>


// <style lang="scss" scoped>
.blog-view {
  padding: 20px;
}
.wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.blog-item {
  width: 300px;
  margin: 0 10px;
}
@media only screen and(max-width:1268px) {
  .blog-item {
    width: 200px;
  }
}
@media only screen and(max-width:768px) {
  .wrapper {
    flex-flow: column;
  }
  .blog-item {
    width: 100%;
    margin: 10px 0;
  }
}
1268px일때 바로아래css처럼 768px일때 아래css처럼 그 나머지는 위의 css대로 적용됨

</style>-->

<template>
  <div class="blog-view">
    <h2>{{ 'Blog'.toUpperCase() }}</h2>
    <div class="divider"></div>
    <v-row justify="center">
      <v-col cols="12" sm="3" md="4" v-for="(blog, i) in blogs" :key="i"
        ><blog-item
          :title="blog.title"
          :imgUrl="blog.img"
          :text="blog.text"
          class="blog-item"
        ></blog-item
      ></v-col>
    </v-row>
    <v-btn @click="addblogItem">addBlog</v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Blog',
  components: { BlogItem: () => import('@/components/main/BlogItem.vue') },
  data() {
    return {};
  },
  computed: { ...mapState(['blogs']) },
  methods: {
    addblogItem() {
      //click
      this.$store.commit('addBlog', {
        title: 'shiba',
        url:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120605_100%2Fwlsudfjqm1_1338899021027DEBJM_JPEG%2F2012-06-05_21%253B20%253B35.jpg&type=sc960_832',
        text: 'shiba입니다.',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-view {
  padding: 20px;
}
.wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.blog-item {
  margin: 0 10px;
}
</style>
