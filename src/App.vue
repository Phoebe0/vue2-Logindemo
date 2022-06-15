<template>
<!-- form组件需要el-form包裹
        * label-width  文本占的宽度
    form表单的每一项使用el-form-item包裹
        * label 每一项文本
    每个输入框  el-input
 -->
 <!-- 为表单关联数据
    1. 需要给el-form绑定 :model属性="data中定义好的对象"
    2. 需要给每一个el-input绑定v-model属性
    3. 需要给el-form添加rules属性 :rules="data中定义的规则对象  并在对象中添加规则"
    4. 给el-input所在的form-item 添加prop属性，值是校验的字段
 -->
 <el-form ref="formRef" label-width="100px" class="demo-ruleForm" label-position="top" :model="loginForm" :rules="formRules">
   <!-- 用户名 -->
  <el-form-item label="用户名" prop="username">
    <el-input v-model="loginForm.username"></el-input>
  </el-form-item>
  <!-- 密码 -->
  <el-form-item label="密码" prop="password">
    <el-input v-model="loginForm.password"></el-input>
  </el-form-item>
  <el-button type="primary" @click="login">登录</el-button>
  <el-button @click="reset">重置</el-button>
</el-form>
</template>

<script>
export default {
  data () {
    return {
      // 表单关联的数据对象
      loginForm: {
        username: '',
        password: ''
      },
      // 表单校验规则
      formRules: {
        username: [
          // required 必填  message 提示消息  trigger  触发时机
          { required: true, message: '请填写用户名', trigger: 'blur' },
          { min: 6, max: 10, message: '用户名在6-10位', trigger: ['change', 'blur'] },
          { pattern: /^\S{6,10}$/, message: '用户名不能是空格', trigger: ['change', 'blur'] }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码在6-18位', trigger: ['change', 'blur'] }
        ]
      }
    }
  },
  methods: {
    login () {
      // 1. 登陆前的预校验
      // 1.1 需要给表单添加 ref属性
      // 1.2 在发送请求前获取到表单组件
      // 1.3 使用表单组件 调用方法 validate

      console.log(this.$refs.formRef)
      this.$refs.formRef.validate(boo => {
        console.log(boo)
        if (!boo) return console.log('表单校验未通过')

        // 2. 发送请求
        console.log('发送请求')
      })
    },
    reset () {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style>
</style>
