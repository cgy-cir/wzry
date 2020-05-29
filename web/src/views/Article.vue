<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <router-link tag="i" to="/" class="iconfont icon-back text-blue"></router-link>
      <strong class="flex-1 text-blue">{{model.title}}</strong>
      <div class="text-grey">
        <span>{{date}}</span>
      </div>
    </div>
    <div v-html="model.body" class="body px-3 fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-Menu"></i>
        <strong class="text-blue fs-xl ml-1">相关资讯</strong>
      </div>
      <div class="pt-1">
        <router-link
          class="py-2"
          tag="div"
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      model: null
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  },
  computed: {
    date() {
      return dayjs(this.model.createdAt).format("YYYY-MM-DD");
    }
  },
  watch: {}
};
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>