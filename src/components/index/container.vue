<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="item in nav.list"
        :key="item.type"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in resultData[kind]" :key="item.image">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="poi-info">
              <div class="title" :title="item.title">{{item.title}}</div>
              <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">
                    {{item.price}}
                  </span>
                </span> 
                <span class="sold bottom-right-info">{{item.address}}</span>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      kind: 'all',
      resultData: {}
    }
  },
  created() {
    api.resultsByKeywords().then(res => {
      this.resultData = res.data.data;
    })
  },
  props: ['nav'],
  methods: {
    over (e) {
      const dom = e.target
      const tagName = dom.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
