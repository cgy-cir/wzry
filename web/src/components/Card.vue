<template>
  <div class="card bg-white p-3 mt-3 bd-b">
    <div class="card-header bd-b d-flex pb-3 ai-center">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fx-xxl flex-1 px-2">
        <span :class="{'font-weight':plain}">{{title}}</span>
      </div>
      <i class="iconfont icon-menu" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    plain: {
      type: Boolean
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.font-weight {
  font-weight: 900;
  font-size: 1.2rem;
}
</style>
  
