<template>
  <div>
    <el-button type="primary" size="small" v-on:click="query">查询</el-button>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="index" width="60"></el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120"></el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120"></el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150"></el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250"></el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250"></el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180"></el-table-column>
    </el-table>
    <el-pagination
      layout="prev,pager,next"
      :page-size="params.size"
      v-on:current-change="changePage"
      :total="total"
      :current-page="params.page" style="float:right;">
    </el-pagination>
  </div>
</template>

<script>
  import * as cmsApi from "../api/cms"

  export default {
    name: "page_list.vue",
    data() {
      return {
        list: [],
        total: 0,
        params: {
          page: 1,
          size: 5,
        },

      }
    },
    methods: {
      changePage: function (page) {
        this.params.page = page;
        this.query();
      },
      query: function () {
        cmsApi.page_list(this.params.page, this.params.size).then((request) => {
          //将res结果数据赋值给数据模型对象
          this.list = request.queryResult.list;
          this.total = request.queryResult.total;
        })
      },

    },
    mounted() {
      this.query()
    }
  }
</script>

<style scoped>

</style>
