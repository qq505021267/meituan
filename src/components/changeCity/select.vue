<template>
  <div :class="{'disabled': disabled}" class="choose-wrap" v-documentClick="documentClick">
    <div class="choose" @click="showWrapper">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"/>
      <div :class="{'mt-content': true, 'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(listData, index) in renderList" :key="index">
            <span
              @click="changeValue(item)"
              :class="{'mt-item': true, 'active': item.name == value}"
              v-for="item in listData"
              :key="item.name"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "title", "value", "showWrapperActive", "disabled", "className"],
  computed: {
    renderList () {
      const col = Math.ceil(this.list.length / 12);
      const resultList = []
      for (let i = 0; i < col; i ++) {
        let data = this.list.slice(i * 12, i * 12 + 12)
        resultList.push(data)
      }
      return resultList
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_active", true);
      }

    },
    documentClick() {
      this.$emit("change_active", false);
    },
    changeValue(item) {
      this.$emit('change', item)
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
</style>