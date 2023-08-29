<template>
  <div class="flex-jb full navbar flex-align-center">
    <div class="flex-jb">
      <div class="title flex-jb flex-align-center">
        <div class="title-img"></div>
        <div class="fon-14">网鱼网咖牛市口店服务</div>
      </div>
      <div class="meun">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">网吧服务</el-menu-item>
          <el-menu-item index="3">网吧管理</el-menu-item>
          <el-menu-item index="4">网吧超市</el-menu-item>
          <el-menu-item index="5">系统管理</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="flex-align-center flex-jb hadle-slot">
      <div class="flex-align-center flex-jb win95">
        <div class="imgs back-color-99"></div>
        <div class="fon-14">需求建议</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0px 30px;
  background: #fff;
  .title {
    width: 180px;
    margin-right: 150px;
    .title-img {
      cursor: pointer;
      width: 24px;
      height: 24px;
      border-radius: 24px;
      background-color: #5a5e66;
    }
  }

  .el-menu-item {
    width: 90px;
    margin-right: 32px;
  }
  .hadle-slot {
    width: 378px;
    .imgs {
      width: 32px;
      height: 32px;
    }
  }
}
.win95{
  width:95px;
}
</style>
