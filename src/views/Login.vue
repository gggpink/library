<template>
  <div style="margin:20px;">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
          <el-col :span="6">
          <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
          </el-col>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
          <el-col :span="6">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.user !== "") {
          this.$refs.ruleForm.validateField("user");
        }
        callback();
      }
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名账号"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        user: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: validateUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // console.log(valid);
        if (valid) {
          alert("sumbit");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
</style>