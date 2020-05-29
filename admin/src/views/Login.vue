<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-head">
        <span
          v-for="(title,i) in titles"
          @click="state = !state"
          :class="{'active':!state == i}"
          :key="title"
        >{{title}}</span>
      </div>
      <div v-if="state">
        <el-form @submit.native.prevent="login">
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="model.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-else>
        <el-form @submit.native.prevent="register">
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="model.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      state: true,
      titles: ["登录", "注册"]
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登录成功"
      });
    },
    async register() {
      await this.$http.post("register", this.model);
      this.$message({
        type: "success",
        message: "注册成功"
      });
    }
  },
  computed: {
    isState() {
      return this.state ? "登录" : "注册";
    }
  }
};
</script>



  
<style scoped>
.login-card {
  width: 25rem;
  margin: 5rem auto;
}
.login-head {
  display: flex;
  justify-content: space-around;
}
.login-head span {
  display: block;
  text-align: center;
  width: 50%;
  cursor: pointer;
}
.active {
  color: rgb(64, 158, 255);
}
</style>
