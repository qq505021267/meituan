<template>
  <div class="m-category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(value,key) in cityGroup" :key="key" :id="'city-' + key">
      <dt>{{key}}</dt>
      <dd>
        <span v-for="city in value" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityGroup: {}
    };
  },
  created() {
    api.getCityList().then(res => {
      const obj = {};

      res.data.data.forEach(item => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
    });
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'})
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>