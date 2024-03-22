<template>
    <div class="container">
        <h1>Birds</h1>
        <swiper :effect="'cube'"
                :grabCursor="true"
                :cubeEffect="{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
                }"
                :pagination="true"
                :modules="modules">
            <swiper-slide v-for="bird in $store.state.birdData" :key="bird">
                <div class="card mb-3">
                    <img :src="require(`@/assets/${bird.ImagePath}`)" alt="" width="300px" height="300px">
                    <div class="card-body">
                        <p>{{bird.BirdEnglishName}}</p>
                        <p>{{bird.BirdMyanmarName}}</p>
                        <div>
                            <router-link :to='{name: "BirdDescriptions", params: {
                                id: bird.Id
                            }}' class="btn btn-outline-info">See More</router-link>
                        </div>
                    </div>
                    
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {Swiper , SwiperSlide } from 'swiper/vue';
  import { EffectCube, Pagination } from 'swiper/modules';
  import 'swiper/css';

  import 'swiper/css/effect-cube';
  import 'swiper/css/pagination';


    export default {
        name: "BirdLists",
         components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCube, Pagination],
      };
    },
    }
</script>

<style scoped>
    .swiper {
        width: 400px;

    }
    img {
        width: 100%;
    }
</style>