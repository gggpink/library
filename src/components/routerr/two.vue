<template>
  <div>
    <div style="background:#fff;border-radius:10px;padding-bottom:10px;">
      <div class="library_two">图书借阅</div>
    <div class="sumbit">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-form-item label="图书名称" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域" width='400'>
            <el-option label="上海书" value="shanghai"></el-option>
            <el-option label="北京书" value="beijing"></el-option>
            <el-option label="广州书" value="guangzhou"></el-option>
            <el-option label="山西书" value="shanxi"></el-option>
            <el-option label="河北书" value="hebei"></el-option>
            <el-option label="杭州书" value="hangzhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="借阅/归还" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="借阅"></el-radio>
            <el-radio label="归还"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="借书证" prop="name">
          <el-col :span="9">
          <el-input v-model="ruleForm.name"></el-input>
          </el-col>
        </el-form-item>
        
        <el-form-item label="借书时间" required>
          <el-col :span="9">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">提交</el-button>
          <!-- <el-button :plain="true" @click="open2">成功</el-button> -->
        </el-form-item>
      </el-form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        resource: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    // open2() {
    //     this.$message({
    //       message: '提交成功',
    //       type: 'success'
    //     });
    //   },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('提交成功')
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
.library_two {
  font-size: 22px;
  padding: 20px;
}
</style>