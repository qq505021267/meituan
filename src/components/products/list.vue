<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :class="{'s-nav-active': item.active}" :key="item.key">{{item.name}}</li>
    </ul>
    <el-row>
        <m-item v-for="item in productList" :key="item.image" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import MItem from './item'
import api from '@/api/index.js'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格排序",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: []
    };
  },
  created() {
    api.getProductsList().then(res => {
      this.productList = res.data.data
    })
  },
  components: {
      MItem
  }
};
</script>

<style scoped>
</style>