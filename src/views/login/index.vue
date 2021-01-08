<template>
  <div class="login-container">
    <el-form class="form" ref="user" :rules="formRules" :model="user" label-width="80px">
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" :loading="loading">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'login',
  data () {
    var validMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请同意用户协议'))
      }
    }
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810', // 验证码
        agree: true // 是否同意协议
      },
      formRules: { // 表单验证规则
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式' }
        ],
        isAgree: [
          { validator: validMobile, trigger: 'blur' }
        ]
      },
      loading: false // 登录的 loading 状态
    }
  },
  methods: {
    submitForm () {
      // 开启 loading ...
      this.loading = true
      login(this.user).then(res => {
        this.$message.success('登录成功')
        this.loading = false
        if (res.status === 201) {
          this.$router.push({ path: '/home' })
        }
        window.localStorage.setItem('user', JSON.stringify(res.data.data))
        console.log(res)
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        this.$message.error('登录失败')
        this.loading = false
      })
    },
    // 重置功能
    resetForm () {
      this.$refs.user.resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
  .login-container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../assets/image/login_bg.jpg") no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .form{
      min-width: 300px;
      padding: 50px 50px 50px 30px;
      background-color: #fff;
    }
  }
</style>
