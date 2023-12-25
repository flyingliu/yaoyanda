<template>
    <swiper :direction="'vertical'" :pagination="{
                    clickable: true,
                }" :modules="modules" :navigation="navigation" ref="mySwiper" class="mySwiper">
        <swiper-slide>
            <div class="page about">
                <div class="img"></div>
                <div class="wrap">
                    <div class="logo">耀研达</div>
                    <div class="article ">
                        <h1 class="title">公司主营业务：</h1>
                        <ul class="ul">
                            <li>第三类医疗器械经营；</li>
                            <li>货物进出口；</li>
                            <li>技术进出口；</li>
                            <li>
                                检验检测服务：基因检测，免疫检测，微生物检测，亚健康生化和生理功能检测；
                            </li>
                            <li>生物化工产品技术研发；</li>
                            <li>医学研究和试验发展；</li>
                            <li>专用化学产品销售；</li>
                            <li>细胞技术研发和应用；</li>
                            <li>亚健康保健服务；</li>
                            <li>人体干细胞技术开发和应用</li>
                        </ul>
                        <div class="swiper-button-next button draw">联系我们</div>
    
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="page map">
                <div class="img1"></div>
                <div class="wrap">
                    <div class="article article1">
                        <h1 class="link">联系方式：</h1>
                        <ul class="noneul">
                        <li>
                            <span>地址：</span><a target="_blank" href="https://map.baidu.com/search/%E8%8B%8F%E5%B7%9E%E5%B8%82%E6%98%86%E5%B1%B1%E5%B8%82%E8%8A%B1%E6%A1%A5%E9%95%87%E4%B8%AD%E7%A7%91%E5%88%9B%E6%96%B0%E5%B9%BF%E5%9C%BA1%E5%8F%B7%E6%A5%BC/@13478148.125,3649640,19z?querytype=s&da_src=shareurl&wd=%E8%8B%8F%E5%B7%9E%E5%B8%82%E6%98%86%E5%B1%B1%E5%B8%82%E8%8A%B1%E6%A1%A5%E9%95%87%E4%B8%AD%E7%A7%91%E5%88%9B%E6%96%B0%E5%B9%BF%E5%9C%BA1%E5%8F%B7%E6%A5%BC&c=340&src=0&pn=0&sug=0&l=15&b=(12692958,2570854;12705246,2576758)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2">
                              苏州市昆山市花桥镇中科创新广场1号楼B座13楼1309室
                            </a>
                        </li>
                        <li><span>电话：</span><a href="tel:0512-55193815">0512-55193815</a></li>
                        </ul>
                        <div class="swiper-button-prev button draw">关于我们</div>
    
                    </div>
                </div>
    
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper/modules'
import { ref } from 'vue'
const modules = [Pagination, Navigation]
const navigation = ref({
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
})
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.page {
    width: 100%;
    height: 100%;
}
.article {
    margin: 5% 0 0 10%;
    text-align: left;
    opacity: 1;
    font: 18px/24px arial;
}

.article h5 {
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
}

.article h1 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
}

.article ul {
  font:14px/1.75 arial;
    padding-left: 16px;
}

.article1 {
  margin: 10% 0 0 0;
  padding: 20px 0 20px 10%;
  background: rgba(255,255,255,.7)
}



.article ul.noneul {
  list-style: none;
  padding-left: 0;
}




.logo {
    margin: 10% 0 0 10%;
    background: url(../assets/logo.png) no-repeat center;
    background-size: contain;
    width: 119px;
    height: 74px;
    font-size: 0;
}




.img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    background: url(../assets/bg1.jpg) #fff no-repeat center;
    background-size: cover;
    opacity: 0.5;
}

.img1 {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    background: url(../assets/map.png) #fff no-repeat center;
    background-size: cover;
    opacity: 0.8;
}


.wrap {
    position: relative;
    z-index: 1;
    top: 0;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #eee;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.button {
    background: rgba(255,255,255,.6);
    border: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px var(--main-color);
    color: var(--main-color);
    font-size: inherit;
    font-weight: 700;
    padding: 5px 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    font: 14px/2 arial;
    font-weight: 500;
}

.button::before,
.button::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
}

.draw {
    transition: color 0.25s;
}

.draw::before,
.draw::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
}

.draw::before {
    top: 0;
    left: 0;
}

.draw::after {
    bottom: 0;
    right: 0;
}

.draw:hover {
    color: var(--main-g);
}

.draw:hover::before,
.draw:hover::after {
    width: 100%;
    height: 100%;
}

.draw:hover::before {
    border-top-color: var(--main-g);
    border-right-color: var(--main-g);
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}

.draw:hover::after {
    border-bottom-color: var(--main-g);
    border-left-color: var(--main-g);
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
}
</style>
