<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-4 d-flex ai-center text-white">
      <img src="../assets/img/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <span>王者荣耀</span>
        <span class="ml-2">·</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link tag="div" to="/">
        <span class="fs-sm">更多英雄 &gt;</span>
      </router-link>
    </div>
    <!-- 英雄简介 -->
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div>
          <span>{{model.title}}</span>
        </div>
        <h2 class="my-2">{{model.name}}</h2>
        <div>
          <span>{{heroCatrgories}}</span>
        </div>
        <div class="scores" v-if="model.scores">
          <span>难度</span>
          <span class="badge bg-primary">{{model.scores.difficult}}</span>
          <span>技能</span>
          <span class="badge bg-blue-1">{{model.scores.skills}}</span>
          <span>攻击</span>
          <span class="badge bg-red">{{model.scores.attack}}</span>
          <span>生存</span>
          <span class="badge bg-dark">{{model.scores.survive}}</span>
        </div>
      </div>
    </div>

    <!-- 具体介绍 -->
    <div>
      <div class="px-3 bg-white d-flex jc-around border-bottom">
        <div class="nav pt-3 pb-2" v-for="(item,i) in topTitle" :key="i">
          <div
            class="nav-item"
            :class="{active:active === i}"
            @click="$refs.list.$swiper.slideTo(i)"
          >
            <div class="nav-link">{{item}}</div>
          </div>
        </div>
        <!-- <div class="nav jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item" @click="$refs.list.$swiper.slideTo(0)">
            <div class="nav-link active">英雄初识</div>
          </div>
          <div class="nav-item" @click="$refs.list.$swiper.slideTo(1)">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>-->
      </div>
      <swiper ref="list" @slide-change="() => (active = $refs.list.$swiper.realIndex)">
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <!-- <div class="d-flex">
                <router-link class="btn btn-lg flex-1" tag="button" to="/">英雄介绍视频</router-link>
                <router-link class="btn btn-lg flex-1 ml-2" tag="button" to="/">一图识别英雄</router-link>
              </div>-->

              <!-- 技能 -->
              <div class="skills bg-white mt-4">
                <div class="d-flex jc-around">
                  <img
                    class="icon"
                    @click="currentSkillIndex = i"
                    :class="{active:currentSkillIndex === i}"
                    :src="item.icon"
                    alt
                    v-for="(item,i) in model.skills"
                    :key="item.name"
                  />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex pt-4 pb-3">
                    <h3 class="m-0">{{currentSkill.name}}</h3>
                    <span class="text-grey-1 ml-4">
                      (冷却值：{{currentSkill.cd}}
                      消耗：{{currentSkill.cost}})
                    </span>
                  </div>
                  <p>{{currentSkill.description}}</p>
                </div>
              </div>
            </div>

            <m-card plain icon="Menu" title="出装推荐" class="hero-items">
              <div class="fs-xl">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.item1" :key="item.name">
                  <img :src="item.icon" class="icon" alt />
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
              <div class="border-bottom mt-3"></div>
              <div class="fs-xl mt-3">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.item2" :key="item.name">
                  <img :src="item.icon" class="icon" alt />
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
            </m-card>
            <m-card plain icon="Menu" title="使用技巧">
              <p class="m-0">{{model.usageTips}}</p>
            </m-card>
            <m-card plain icon="Menu" title="对抗技巧">
              <p class="m-0">{{model.battleTips}}</p>
            </m-card>
            <m-card plain icon="Menu" title="团战思路">
              <p class="m-0">{{model.teamTips}}</p>
            </m-card>
            <m-card plain icon="Menu" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div class="d-flex pt-4" v-for="item in model.partners" :key="item.name">
                <img :src="item.hero.avatar" height="50" alt />
                <p class="flex-1 m-0 ml-3">{{item.description}}</p>
              </div>
              <div class="border-bottom mt-3"></div>
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide>
          <h1>暂时还没做</h1>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      model: null,
      currentSkillIndex: 0,
      active: 0,
      topTitle: ["英雄初识", "进阶攻略"]
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  },
  computed: {
    heroCatrgories() {
      return this.model.categories
        .map(elem => {
          return elem.name;
        })
        .join("/");
    },
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    }
  }
};
</script>

<style lang="scss" scoped>
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.65rem;
      }
    }
  }
  .skills {
    img.icon {
      width: 60px;
      height: 60px;
      border: 3px solid white;
      border-radius: 45%;
      &.active {
        border: 3px solid #db9e3f;
      }
    }
  }
  .hero-items {
    img.icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
.btn-lg {
  padding: 0.8rem 1rem;
  font-size: 1rem;
}
</style>