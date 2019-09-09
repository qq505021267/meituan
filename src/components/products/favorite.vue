<template>
    <div class="favorite-list">
        <dl>
            <dt>猜你喜欢</dt>
            <dd v-for="item in favoriteList" :key="item.itemId">
                <img src="@/assets/logo.png" alt="">
                <div class="title">{{item.title}}</div>
                <div class="score">
                    <el-rate :value="Number(item.score)" disabled text-color="#ff9900" score-template="{value}" class="stars"></el-rate>
                    <span>{{item.commentNum}}人评论</span>
                </div>
                <div class="area">
                    {{item.areaName}}
                </div>
                <div class="Price">
                    平均价格 ￥
                    <span>{{item.avgPrice}}</span>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            favoriteList: []
        }
    },
    created () {
        api.getFavoriteList().then( res => {
            console.log(res);
            this.favoriteList = res.data.data;

        }).catch( error => {
            console.log(error);
        })
    }
}
</script>

<style>

    .favorite-list {
        width: 230px;
        margin-top: 10px;
        padding: 16px 20px 20px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
    }

    .favorite-list dt {
        font-size: 16px;
        color: #333;
        line-height: 22px;
        font-weight: 500;
    }

    .favorite-list img {
        width: 100%;
        height: 106px;
    }

    .favorite-list dd {
        margin-top: 10px;
    }

    .favorite-list dl dd .title {
        font-size: 14px;
        color: #222;
        line-height: 20px;
        font-weight: 500;
        margin-top: 5px;
    }

    .favorite-list dl dd .score {
        margin-top: 5px;
    }

    .favorite-list dl dd .score>span {
        font-size: 12px;
        color: #999;
        height: 24px;
        line-height: 24px;
    }

    .favorite-list dl dd .score .stars {
        display: inline-block;
    }

    .favorite-list .stars .el-rate__icon {
        font-size: 12px !important;
    }

    .favorite-list dl dd .area {
        font-size: 12px;
        color: #999;
        height: 18px;
        margin-top: 5px;
        line-height: 18px;
    }

    .favorite-list dl dd .Price {
        color: #f60;
        font-size: 12px;
        font-weight: 700;
        margin-top: 5px;
    }

    .favorite-list dl dd .Price>span {
        font-size: 22px;
    }
</style>