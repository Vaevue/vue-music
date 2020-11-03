<template>
    <div class="index">
        <index-top></index-top>
        <transition name="opacity" mode="out-in">
           <keep-alive>
                <router-view class="c"></router-view>
           </keep-alive>
        </transition>
    </div>
</template>

<script>
import indexTop from '_c/indexTop'
export default {
    name : "index",
    components : { indexTop }
}
</script>

<style lang="less" scoped>
   .opacity-enter-active,.opacity-leave-active{transition:all .3s}.opacity-enter,.opacity-leave-to{opacity:0}
    ::v-deep .router-link-active{font-weight: 600;}
    .c{margin-top: 50px;}
</style>