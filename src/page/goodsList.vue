<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>   
            <el-col :span="5" class="map-fav">
                <el-row>map</el-row>
                <el-row>
                    <favorite />
                </el-row>
            </el-col>
        </el-row>
    </div>

</template>

<script>
import Crumbs from '@/components/products/crumbs'
import Categroy from '@/components/products/categroy'
import List from '@/components/products/list'
import Favorite from "@/components/products/favorite"
export default {
    components: {
        Crumbs,
        Categroy,
        List,
        Favorite
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';

    .map-fav{
        padding-left: 10px;
    }
</style>