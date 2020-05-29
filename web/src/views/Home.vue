<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOptions1">
      <swiper-slide>
        <img class="w-100" src="../assets/img/swiper.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/img/swiper.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/img/swiper.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>

    <!-- 导航 -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey">
      <div v-if="open" class="d-flex flex-wrap">
        <div class="nav-item bd-r mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">
            <span>爆料站</span>
          </div>
        </div>
      </div>
      <div v-else>
        <swiper :options="swiperOptions2">
          <swiper-slide v-for="n in 10" :key="n" class="text-center">
            <div class="nav-item-1 bd-r">
              <i class="sprite sprite-news"></i>
              <div class="py-2">
                <span>爆料站</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bg-light py-2 fs-sm" @click="open = !open">
        <i class="sprite mr-1" :class="open ? 'sprite-arrow-close' : 'sprite-arrow-open'"></i>
        <span>{{ open ? "收起" : "展开" }}</span>
      </div>
    </div>

    <!-- 新闻资讯 -->

    <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <template v-slot:items="{ category }">
        <router-link
          tag="div"
          :to="`/articles/${item._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(item, i) in category.newsList"
          :key="i"
        >
          <span class="text-grey">[{{ item.categoryName }}]</span>
          <span class="px-2 text-dark">|</span>
          <span class="flex-1 text-dark text-ellipsis pr-2">
            {{
            item.title
            }}
          </span>
          <span class="text-grey fs-sm">{{ item.createdAt | date }}</span>
        </router-link>
      </template>
    </m-list-card>

    <!-- 英雄列表 -->
    <m-list-card icon="icon-test" title="英雄列表" :categories="heroCats">
      <template v-slot:items="{ category }">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${item._id}`"
            class="p-2 text-center"
            style="width:20%"
            v-for="(item, i) in category.heroList"
            :key="i"
          >
            <img :src="item.avatar" alt class="w-100" />
            <div>
              <span>{{ item.name }}</span>
            </div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <p class="fs-xl text-center" style="height:500px;font-weight:900">英雄请点击赵云，其他英雄数据还未添加</p>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      swiperOptions1: {
        pagination: {
          el: ".pagination-home"
        },
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        }
      },
      swiperOptions2: {
        freeMode: true,
        freeModeMomentum: false,
        slidesPerView: 4
      },
      newsCats: [],
      heroCats: [],
      open: false
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  filters: {
    //过滤器过滤日期
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  }
};
</script>

<style lang="scss">
.pagination-home {
  left: -1em;
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: #4b67af;
    }
  }
}

.nav-icons {
  .nav-item {
    width: 25%;
    &:nth-child(4n) {
      border-right: none;
    }
  }
  .nav-item-1 {
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
