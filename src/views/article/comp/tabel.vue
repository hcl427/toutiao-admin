<template>
  <div class="tabel-container">
    <el-card class="box-card">
      <h1>共找到{{ total }}条符合条件的内容</h1>
      <el-table :data="tableData" stripe>
        <el-table-column label="封面" width="180px">
          <template slot-scope="scope">
            <img v-if="scope.row.cover.images.length > 0" :src="scope.row.cover.images" alt="" />
            <img v-else src="@/assets/image/pic_bg.png" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag
            :type="articleStatus[scope.row.status].type"
            >{{ articleStatus[scope.row.status].label }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="pubdate" label="发布日期"> </el-table-column>
        <el-table-column label="操作">
          <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </el-table-column>
      </el-table>
      <el-pagination
      class="pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </el-card>
  </div>
</template>
<script>
import { article } from '@/api/article'
export default {
  data () {
    return {
      tableData: [], // 列表数据
      total: 0, // 分页总条数
      articleStatus: [
        {
          label: '草稿',
          status: 0,
          type: 'info'
        },
        {
          label: '待审核',
          status: 1
        },
        {
          label: '审核通过',
          status: 2,
          type: 'success'
        },
        {
          label: '审核失败',
          status: 3,
          tyup: 'warning'
        },
        {
          label: '已删除',
          status: 4,
          type: 'danger'
        }
      ],
      currentPage: 0,
      queryInfo: {
        page: 1,
        per_page: 10,
        status: null
      }
    }
  },
  created () {
    this.getTableList()
  },
  methods: {
    getTableList () {
      article(
        this.queryInfo
      ).then(res => {
        this.tableData = res.data.data.results
        console.log(res.data.data)
        this.total = res.data.data.total_count
      })
    },
    // 改变每页显示多少数据
    handleSizeChange (val) {
      this.queryInfo.per_page = val
      this.getTableList()
    },
    // 当前页
    handleCurrentChange (val) {
      this.queryInfo.page = val
      this.getTableList()
    }
  }
}
</script>
<style lang="less" scoped>
.tabel-container {
  padding-top: 30px;
  img {
    width: 150px;
    height: 80px;
  }
  .el-button{
    cursor: pointer;
  }
  .pagination {
    margin: 30px 0;
    float: right;
  }
}
</style>
