<template>
  <div class="header-container">
    <div class="header-left">
      <i :class="isCollapse === true ? 'el-icon-s-fold': 'el-icon-s-unfold'" @click="fold"></i>
      <p>xxx有限公司</p>
    </div>
    <div class="header-right">
      <img src="@/assets/image/head.jpg" alt="" />
      <p class="name">hello</p>
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" @click.native="signOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { getUserInfo } from '@/api/user'
export default {
  data () {
    return {
      user: {} // 当前用户信息
    }
  },
  created () {
    this.getUser()
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    getUser () {
      getUserInfo().then(res => {
        console.log('头部信息暂未获取', res)
      })
    },
    // 从 vuex 判断侧边栏是否展开和收起
    fold () {
      this.$store.commit('fold')
    },
    // 退出功能
    signOut () {
      window.localStorage.removeItem('user')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
<style lang="less" scoped>
.header-container {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #fff;
  .header-left,
  .header-right {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    i {
      cursor: pointer;
    }
    p {
      margin-left: 10px;
    }
  }
  .header-right {
    img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    i {
      margin-left: 10px;
    }
  }
}
</style>
