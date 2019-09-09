<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-map-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name: 'changeCity'}">
                切换城市
            </router-link>
            [
            <a href="" class="color" v-for="item in nearCity" :key="item.name">{{item.name}} </a>
            ]
        </div>
        <div class="m-user" v-if="!$store.state.userName">
            <router-link class="login" :to="{name: 'login'}">
                立即登录
            </router-link>
            <router-link class="register" :to="{name: 'register'}">
                注册
            </router-link>
        </div>

    </div>

</template>

<script>
import api from '@/api/index'
export default {
    data() {
        return {
            nearCity: []
        }
    },
    watch: {
        "$store.state.position": function () {
            this.nearCity = this.$store.state.position.nearCity;
        }
    },
    created () {
        api.getCurPosition().then(res => {
            this.$store.dispatch('setPosition', res.data.data)
            this.nearCity = res.data.data.nearCity
        })
    }
}
</script>

<style scoped>
    .position .color{
        color: #999
    }

    .position .color:hover {
        color: #31BBAC
    }
</style>
