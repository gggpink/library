<template>
  <div>
    <div style="background:#fff;border-radius:10px;padding-bottom:10px;">
      <div class="library_three">图书推荐</div>
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
        <el-form-item label="出版社" prop="publish">
          <el-col :span="9">
          <el-input v-model="ruleForm.publish" placeholder="图书出版社"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-col :span="9">
          <el-input v-model="ruleForm.author" placeholder="图书作者"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="参考价格" prop="price">
          <el-col :span="9">
          <el-input v-model="ruleForm.price" placeholder="请输入数字"></el-input>
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
        <el-form-item label="推荐人" prop="referrer">
          <el-col :span="9">
          <el-input v-model.number="ruleForm.referrer" placeholder="请输入数字"></el-input>
          </el-col>
        </el-form-item>
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
        publish: "",
        author: "",
        price: "",
        type: "",
        referrer: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        publish: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        price: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        referrer: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
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
.library_three {
  font-size: 22px;
  padding: 20px;
}
</style>