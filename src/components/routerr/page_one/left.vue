<template>
  <div>
    <div class="input">
      <div class="infor_one">
        <div class="information">图书信息：</div>
        <div style="float:left;">
          <el-input placeholder="请输入" v-model="input0" clearable></el-input>
        </div>
      </div>
      <div class="infor_one">
        <div class="information">作者名称：</div>
        <div style="float:left">
          <el-input placeholder="请输入" v-model="input1" clearable></el-input>
        </div>
      </div>
      <div class="infor_one">
        <div class="information">ISBN号：</div>
        <div style="float:left">
          <el-input placeholder="请输入" v-model="input2" clearable></el-input>
        </div>
      </div>
      <div class="infor_one">
        <div class="information">图书出版：</div>
        <div style="float:left">
          <el-input placeholder="请输入" v-model="input3" clearable></el-input>
        </div>
      </div>
      <div class="infor_one">
        <div class="information">出版社：</div>
        <div style="float:left">
          <el-input placeholder="请输入" v-model="input4" clearable></el-input>
        </div>
      </div>
    </div>
    <div class="table">
      <!-- v-loading -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="ISBN号" width="80"></el-table-column>
        <el-table-column prop="type" label="图书类型" width="120"></el-table-column>
        <el-table-column prop="name" label="图书名称" width="180"></el-table-column>
        <el-table-column prop="author" label="作者名称" width="90"></el-table-column>
        <el-table-column prop="publish" label="出版社" width="90"></el-table-column>
        <el-table-column prop="date" label="日期" width="100"></el-table-column>
        <el-table-column prop="total" label="总数量" width="70"></el-table-column>
        <el-table-column prop="tubes" label="在管数量" width="90"></el-table-column>
        <el-table-column prop="price" label="价格" width="60"></el-table-column>
        <el-table-column prop="operating" label="操作"></el-table-column>
      </el-table>
      <div class="pages"><el-pagination background layout="prev, pager, next" :total="100"></el-pagination></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      // loading: true,
      tableData: [
        {
          id: "00001",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00002",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00003",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00004",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00005",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00006",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00007",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00008",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        },
        {
          id: "00009",
          type: "计算机",
          name: "软件工程导论",
          author: "淘小宝",
          publish: "某出版社",
          date: "2018-01-01",
          total: "1000",
          tubes: "300",
          price: "22.0",
          operating: ""
        }
      ]
    };
  }
};
</script>

<style>
.infor_one {
  display: inline-block;
  margin: 20px 40px 16px 20px;
}
.infor_one:after {
  content: "";
  display: block;
  clear: both;
}
.information {
  /* display: inline-block; */
  width: 90px;
  line-height: 40px;
  float: left;
  font-size: 18px;
  color: #666;
}
.el-table-column {
  font-size: 20px;
}
.el-table__header-wrapper {
  font-size: 18px !important;
  font-weight: none !important;
}
.el-table__body-wrapper {
  font-size: 16px !important;
}
.pages{
    float: right;
    margin-top: 20px;
}
</style>