<template>
  <div>
    <el-container class="container">
      <section class="main-form">
        <div class="img-box"></div>
        <div class="form-box">
          <div class="login-logo"></div>
          <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.username" placeholder="请输入用户名" autofocus clearable>
                <i slot="prefix" class="el-input__icon icon-name"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="form.password"
                type="password"
                placeholder="请输入密码"
                @keyup.enter.native="loginHandler"
                clearable
              >
                <i slot="prefix" class="el-input__icon icon-password"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="captcha"
                placeholder="请输入验证码"
                @keyup.enter.native="loginHandler"
                clearable
              >
                <i slot="prefix" class="el-input__icon el-icon-picture"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox-group v-model="remember">
                <el-checkbox label="记住密码"></el-checkbox>
              </el-checkbox-group>
              <span>{{ this.$store.state.name }}</span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginHandler" :disabled="loading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </section>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      captcha: "",
      uid: "",
      loading: false,
      remember: false
    };
  },
  computed: {
    
  },
  methods: {
    loginHandler: function() {
      this.$store.commit("login/changeNameByLogin", {
        name: this.form.username
      });

      setTimeout(() => {
        this.$store.dispatch("changeNameByAsyns",{
          name: this.form.username + "123"
        })
      },0)
    }
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>

<style lang="scss">

</style>