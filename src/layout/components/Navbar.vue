<template>
  <div class="flex-jb full navbar flex-align-center">
    <div class="user flex-jb flex-align-center">
      <div class="user-avatar"></div>
      <div class="fon-14">请登录</div>
    </div>
    <div class="flex-column title">
      <p class="fon-16">网鱼网咖(成都武侯南晶国际店) - 服务</p>
      <p class="fon-12 fon-col-99">DESKTOP - PLIQ443号机</p>
    </div>
    <div class="hadle-slot flex-align-center flex-jb">
      <i class="el-icon-minus"></i>
      <i class="el-icon-close"></i>
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
  padding: 0px 16px;
  background: #fff;
  .user {
    width:84px;
    .user-avatar {
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius:50px;
          background-color: #5a5e66;
        }
  }
   .title{
    // height: 60px;
    width: 296px;
   box-sizing: border-box;
    :nth-child(1){
      height: 16px;
      // padding: 0px;
      margin: 0px 0px 8px;
      line-height: 16px;
    }
    :nth-child(2){
      height: 16px;
      line-height: 16px;
      padding: 0px;
      margin: 0px;
    }
   }
   .hadle-slot{
    width:56px;
   }

}
</style>
