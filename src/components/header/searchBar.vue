<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search" @click ="click"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="item in hotPlaceList" :key="item + 'hotPlace'">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="item + 'search' + index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            v-for="item in suggestList"
            :key="item + 'suggest'"
            :to="{name: 'goods', params: {name: item}}"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      searchList: [],
      suggestList: [],
      hotPlaceList: []
    };
  },

  created() {
    api.searchHotWords().then(res => {
      if(res.data.status === 'success') {
        this.suggestList = res.data.data;
        this.hotPlaceList = res.data.data;
      }else {
          throw res.data.msg
        }
    }).catch(err => console.log(err))
  },

  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      const self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    click () {

    },
    input () {
      const val = this.searchWord
      api.getSearchList().then(res => {
        if(res.data.status === "success") {
          this.searchList = res.data.data.list.filter((item, index) => {
            return item.indexOf(val) > -1;
          })
        }else {
          throw res.data.msg
        }
      }).catch(err => console.log(err))
    }
  }
};
</script>
