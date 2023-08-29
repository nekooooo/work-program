<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <div class="contanier">
        <el-container>
          <el-aside width="196px">
            <Sidebar />
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </div>
    </el-container>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    // sidebar() {
    //   return this.$store.state.app.sidebar;
    // },
    // device() {
    //   return this.$store.state.app.device;
    // },
    // fixedHeader() {
    //   return this.$store.state.settings.fixedHeader;
    // },
    // classObj() {
    //   return {
    //     hideSidebar: !this.sidebar.opened,
    //     openSidebar: this.sidebar.opened,
    //     withoutAnimation: this.sidebar.withoutAnimation,
    //     mobile: this.device === "mobile"
    //   };
    // }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
  line-height: 60px;
  padding: 0px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: calc(100vh - 88px);
  // line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 88px);
  // line-height: 160px;
}
</style>
