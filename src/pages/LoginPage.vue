<template>
  <div id="login">
    <div class="login-left">
      <div>
        <img src="../assets/logo-simple.png" alt="" />
        <h1 class="login-left-title">慕课乐高</h1>
      </div>
      <h1 class="description">这是我用过的最好的广告页工具</h1>
      <h3 class="user-text">王特吹，google</h3>
    </div>
    <div class="login-right">
      <div class="right-box">
        <h1 class="welcome">欢迎回来</h1>
        <h3 class="login-dec mb-20">使用手机号和验证码登陆慕课乐高</h3>
        <a-input class="mb-20" v-model:value="userPhone" placeholder="手机号码">
          <template #suffix>
            <user-outlined />
          </template>
        </a-input>
        <a-input style="" v-model:value="userPassword" placeholder="验证码">
        </a-input>
        <div style="margin-top: 20px">
          <a-button
            style="margin-right: 10px"
            type="primary"
            @click="handleLogin"
            >登录</a-button
          >
          <a-button
            type="primary"
            :disabled="!userPhone"
            @click="queryInfo"
            :loading="isLoading"
            >获取验证码</a-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
export default {
  name: "LoginPage",
  components: {
    UserOutlined,
  },
  setup() {
    const userPhone = ref("");
    const userPassword = ref("");
    const isLoading = ref(false);
    const router = useRouter();

    function handleLogin() {
      console.log("User: " + userPhone.value);
      router.push({ path: "/", meta: { withHeader: true, withFooter: true } });
    }

    function queryInfo() {
      console.log("发送短信");
      isLoading.value = true;
    }

    return {
      userPhone,
      userPassword,
      isLoading,
      handleLogin,
      queryInfo,
    };
  },
};
</script>

<style>
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-left,
.login-right {
  width: 50%;
  height: 100%;
}
.login-left {
  background-image: url("../assets/login.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-left h1,
.login-left h3 {
  color: white;
}
.login-left > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-left img {
  width: 50px;
  height: 50px;
}
.login-left-title {
  font-size: 28px;
  font-weight: 600;
  padding-left: 20px;
}
.description {
  font-size: 24px;
  margin: 20px 0;
}
.user-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
}
.login-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-box {
  width: 60%;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.welcome {
  font-size: 28px;
  font-weight: 500;
}
.login-dec {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
}
.mb-20 {
  margin-bottom: 20px;
}
</style>
