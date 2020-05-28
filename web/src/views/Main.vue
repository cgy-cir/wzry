<template>
  <div>
    <div class="topbar bg-black py-2 px-4 d-flex ai-center">
      <img src="../assets/img/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary text-dark">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div v-for="(title, i) in titles" :key="title" class="nav-item">
          <router-link
            class="nav-link"
            @click.native="active = i"
            :class="{ active: active === i }"
            tag="span"
            to="/"
            >{{ title }}</router-link
          >
        </div>
        <!-- 
        <div class="nav-item">
          <router-link class="nav-link" tag="span" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="span" to="/">赛事中心</router-link>
        </div> -->
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: ["首页", "攻略中心", "赛事中心"],
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  width: 33.333%;
  text-align: center;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
