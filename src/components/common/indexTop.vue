<template>
    <div class="index_top">
        <div class="left">
            <img src="@/assets/icon/bar.svg">
        </div>
        <div class="center">
            <ul>
                <router-link to="/my" tag="li">我的</router-link>
                <router-link to="/index" tag="li">发现</router-link>
                <router-link to="/yuncun" tag="li">云村</router-link>
                <router-link to="/video" tag="li">视频</router-link>
            </ul>
        </div>
        <div class="right">
            <img src="@/assets/icon/search.svg">
        </div>
    </div>
</template>

<style lang="less" scoped>
.index_top{
    display: flex;
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    height: 50px;
    padding : 0 10px;
    box-sizing: border-box;
    justify-content: sapce-between;
    img{
        width: 30px;
        height: 30px;
    }
    .left{
        width: 15%;
        text-align: left;
    }
    .right{
        width: 15%;
        text-align: right;
    }
    .center {
        flex:1;
        ul{
            width: 100%;
            display: flex;
            font-size: 15px;
            height: 40px;
            li{
                width: 25%;
                height: 100%;
                text-align: center;
                line-height:40px;
            }
        }
    }
}
</style>