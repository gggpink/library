<template>
  <div>
    <div style="background:#fff;border-radius:10px;padding-bottom:10px;">
      <div class="library_four">图书推荐</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="图书名称" prop="name">
          <el-col :span="9">
          <el-input v-model="ruleForm.name" placeholder="请输入图书名称"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="ISBN" prop="code">
          <el-col :span="9">
          <el-input v-model="ruleForm.code" placeholder="请输入ISBN号"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="书目类别" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择" width="400">
            <el-option label="上海书" value="shanghai"></el-option>
            <el-option label="北京书" value="beijing"></el-option>
            <el-option label="广州书" value="guangzhou"></el-option>
            <el-option label="山西书" value="shanxi"></el-option>
            <el-option label="河北书" value="hebei"></el-option>
            <el-option label="杭州书" value="hangzhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="捐赠人" prop="persons">
          <el-col :span="9">
          <el-input v-model="ruleForm.persons" placeholder="请输入捐赠人"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="捐赠时间" required>
          <el-col :span="9">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="ruleForm.status">
            <el-radio label="待入库"></el-radio>
            <el-radio label="在库"></el-radio>
            <el-radio label="外借"></el-radio>
            <el-radio label="遗失"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div style="margin-left:20px;margin-bottom:20px;color:#F37327;font-size:12px;">提醒：若选择“在库”状态的话，请确认已经将图书放置到1-5-10-N的书架。</div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        code:"",
        type: [],
        persons:"",
        date: "",
        status: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入图书名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入ISBN", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个书目类别",
            trigger: "change"
          }
        ],
        persons: [
          { required: true, message: "请输入捐赠人", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        status: [
          { required: true, message: "请选择状态", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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
.library_four {
  font-size: 22px;
  padding: 20px;
}
</style>