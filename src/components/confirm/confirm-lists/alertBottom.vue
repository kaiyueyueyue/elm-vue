<template>
  <div class="alertBottom">
    <div class="alertContainer">
      <h2 class="p_title">{{tableware.title}}</h2>
      <div class="number">
        <ul>
          <li :key="index" v-for="(n,index) in tableware.number" @click="sendNum(n)"><span>{{n}}</span></li>
        </ul>
      </div>
      <div class="closeBtn" @click="hidePanel">X</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alertBottom",
  props: {
    panelShow: {
      type: Boolean
    }
  },
  data() {
    return {
      tableware: {
        title: "餐具份数",
        number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "10份以上"]
      }
    };
  },
  methods: {
    hidePanel() {
      this.$emit("panelShow", false);
    },
    sendNum(n) {
      this.hidePanel();
      this.$emit("sendNum", n);
      // console.log(n)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin.scss";
.alertBottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  .alertContainer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    background-color: #efefef;
    text-align: center;
    box-sizing: border-box;
    padding: 0.2rem 0.3rem;
    .p_title {
      @include sc(0.16rem, $fc03);
      padding-bottom: 0.1rem;
    }
    .number {
      height: 90%;
      overflow-y: scroll;
      ul {
        li {
          margin-bottom: 0.12rem;
          span {
            display: block;
            @include sc(0.16rem, $fc03);
          }
        }
      }
    }
    .closeBtn {
      @include sc(0.16rem, $fc03);
      position: absolute;
      top: 0.05rem;
      right: 0.1rem;
    }
  }
}
</style>
