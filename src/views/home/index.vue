<template>
    <div class="index">
       <div class="swiper">
        <van-swipe>
             <van-swipe-item v-for="item in banner" :key="item.bannerId">
                 <img :src="item.pic">
             </van-swipe-item>
        </van-swipe>
       </div>
       <div class="navlist">
           <ul>
               <li>
                   <img src="@/assets/image/mrtj.png">
                   <p>每日推荐</p>
               </li>
                 <li>
                   <img src="@/assets/image/srFM.png">
                   <p>私人FM</p>
               </li>
                 <li>
                   <img src="@/assets/image/gd.png">
                   <p>歌单</p>
               </li>
                 <li>
                   <img src="@/assets/image/phb.png">
                   <p>排行榜</p>
               </li>
                 <li>
                   <img src="@/assets/image/zb.png">
                   <p>直播</p>
               </li>
                 <li>
                   <img src="@/assets/image/dt.png">
                   <p>电台</p>
               </li>
                 <li>
                   <img src="@/assets/image/szzj.png">
                   <p>数字专辑</p>
               </li>
                 <li>
                   <img src="@/assets/image/cl.png">
                   <p>唱聊</p>
               </li>
                 <li>
                   <img src="@/assets/image/yxzq.png">
                   <p>游戏专区</p>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    name : "home",
    data(){
       return {
            banner : [],
       }
    },
    created(){
        this.getBanner()
    },
    methods:{
        getBanner(){
            this.axios('get','banner',{type:1}).then(res=>{
                this.banner = res.banners
            })
        },
    },
}
</script>

<style lang="less" scoped>
.swiper{
    border-radius: 10px;
    .van-swipe{
        height: 150px;
        width: 95%;
        margin-left: 2.5%;
        border-radius: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.navlist{
    overflow: auto;
    padding : 20px 0;
    ul{
        display: flex;
        li{
            font-size: 14px;
            padding : 0 20px;
            img{
                width: 55px;
                height: 50px;
            }
            p{
                text-align: center;
                line-height: 20px;
                white-space: nowrap;
            }
        }
    }
}
</style>