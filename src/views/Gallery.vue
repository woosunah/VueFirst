<template>
  <div class="gallery">
    <v-btn v-on:click="show = !show">
      Toggle
    </v-btn>
    <transition name="fade">
      <p v-if="show">Fade hello</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="show">Slide hello</p>
    </transition>
    <transition name="bounce">
      <p v-if="show">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id. Pellentesque
        habitant morbi tristique senectus et netus.
      </p>
    </transition>
    <div id="list-demo">
      <v-btn v-on:click="add">Add</v-btn>
      <v-btn @click="remove">Remove</v-btn>
      <!-- v-on:click = @click같음  -->
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
      <!-- transition group을 p 태그로 보는것 span은 1,2,3,4..숫자를 인라인요소로 나열하려고 사용 -->
    </div>
    <!-- shuffle -->
    <v-btn @click="shuffle">Shuffle</v-btn>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
    <!-- shuffle-end -->

    <!-- element간의 바뀌는 것 -->
    <transition name="fade" mode="out-in">
      <!-- in-out새로운 엘리먼트 후 현재 엘리먼트가 트렌지션됨<->out in -->
      <v-btn v-if="isEditing" key="save" @click="isEditing = !isEditing">
        Save
      </v-btn>
      <v-btn v-else key="edit" @click="isEditing = !isEditing">
        Edit
      </v-btn>
    </transition>
    <div>
      <transition name="slide-fade" mode="in-out">
        <!-- in-out새로운 엘리먼트 후 현재 엘리먼트가 트렌지션됨<->out in -->
        <v-btn
          v-if="isEditing"
          key="save"
          @click="isEditing = !isEditing"
          class="absol"
        >
          Save
        </v-btn>
        <v-btn v-else key="edit" @click="isEditing = !isEditing" class="absol">
          Edit
        </v-btn>
      </transition>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Gallery",
  data() {
    return {
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      isEditing: true
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    // math.floor - 정수만 남기고, 다 날림.정수만 출력
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
    //  _.lodash쓸때 자주사용하는 클래스명?
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  min-height: calc(100vh - 120px);
}
// vh - 스크린 화면에서 100%출력
#list-demo {
  margin-top: 40px;
}

.absol {
  position: absolute;
  margin-left: 60px;
}

//toggle btn이 사라질때 부드럽게 사라지는 현상!
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: all 1s;
}
// move를 넣으면 알아서 css애니메이션 작동함
// 셔플과 위의 add, remove 같이 움직이는 현상은
// data안에 items1,2,3,4.. 를 같이 사용해서 그렇기때문에,
// 따로 나눠서 사용하면 같이 셔플 되는일없음.
</style>
