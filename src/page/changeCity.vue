<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title="热门城市：" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问：" :list="rencentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province";
import hot from '@/components/changeCity/hot'
import Category from '@/components/changeCity/category'
import api from '@/api/index'
export default {
  components: {
    Province,
    hot,
    Category
  },
  created () {
    api.getHotCity().then(res => {
      this.hotList = res.data.data.map((item) => item.name)
    });
    api.getRecentsCity().then(res => {
      this.rencentList = res.data.data.map(item => item.name)
    })
  },
  data() {
    return {
      hotList: [],
      rencentList: []
    }
  }
};
</script>

<style scoped>
</style>