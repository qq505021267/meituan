<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="recomment"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from '@/components/index/menu'
import MLife from '@/components/index/life'
import Container from '@/components/index/container.vue'
export default {
  data () {
    return {
      iStyle: {
        class: 'iStyle',
        title: '有格调',
        list: [
          {
            tab: 'all',
            text: '全部'
          },
          {
            tab: 'food',
            text: '约会聚餐'
          },
          {
            tab: 'spa',
            text: '丽人SPA'
          },
          {
            tab: 'movie',
            text: '电影演出'
          },
          {
            tab: 'travel',
            text: '品质出游'
          }
        ]
      },
      recomment: {
        class: 'perferential',
        title: '很优惠',
        list: [
          {
            text: '全部',
            tab: 'all'
          },
          {
            text: '美食',
            tab: 'food'
          },
          {
            text: '休闲',
            tab: 'rest'
          }
        ]
      }
    }
  },
  components: {
    MMenu,
    MLife,
    Container
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
