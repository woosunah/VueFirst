import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    blogs: [{
        title: "MOBILE FIRST & RESPONSIVE",
        text: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
        img: "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      },
      {
        title: "THINK OUTSIDE THE BOX",
        text: "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
        img: "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot;"
      },
      {
        title: "SMALL CHANGES, BIG DIFFERENCE",
        text: "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
        img: "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1892&amp;q=80&quot;"
      }
    ],
    files: [{
      title: 'firstFile',
      subtitle: 'this file is good file'
    }],
  },
  mutations: {
    addBlog(state, payload) {
      state.blogs.push(payload);
    },
    addFile(state, payload) {
      state.files.push(payload);
    },
  },
  actions: {},
  modules: {}
});