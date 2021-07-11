<template>
  <v-row fill-height>
    <v-col cols="12" md="12" lg="12" xl="12" sm="12" align="center" class="mt-12 pt-16">
      <v-sheet ripple rounded="xl" elevation class="mx-auto">
        <h1
        data-aos="zoom-out-up"
          class="pt-5 font-weight-black secondary--text"
        >
          {{ services.title }}
        </h1>
      </v-sheet>
      <v-col cols="1">
        <v-divider light color="primary" class="mt-3 elevation-3"></v-divider>
      </v-col>
    </v-col>
    <v-col cols="12" md="12" sm="12" lg="12" xl="12">
      <v-row class="pa-2">
        <v-col data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="300" align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple elevation="1" color="white">
            <v-img
              class="pt-3"
              width="110"
              height="110"
              src="/image/extrac/ex-1.png"
            ></v-img>
            <h3 class="pt-8 secondary--text">Coal Extraction</h3>
            <h5 class="pb-10 gray--text">
              we extract coal, processed<br />
              coal in beter useage
            </h5>
          </v-sheet>
        </v-col>
        <v-col data-aos="fade-right" data-aos-delay="500" align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple elevation="3" color="white">
            <v-img
              width="110"
              height="120"
              src="/image/extrac/ex-2.png"
            ></v-img>
            <h3 class="pt-4 secondary--text">Minral Processing</h3>
            <h5 class="pt-4 pb-7 gray--text">
              Mining is the extraction of <br />valuable minerals or other
            </h5>
          </v-sheet>
        </v-col>
        <v-col data-aos="fade-right" data-aos-delay="700" align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple elevation="3" color="white">
            <v-img
              width="110"
              height="110"
              src="/image/extrac/ex-3.png"
            ></v-img>
            <h3 class="pt-4 secondary--text">Turquoise Extraction</h3>
            <h5 class="pt-4 gray--text pb-9">
              Mining is the extraction <br />
              geological materials from the Earth
            </h5>
          </v-sheet>
        </v-col>
        <v-col data-aos="fade-right" data-aos-delay="900" align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple width="300" elevation="3" color="white">
            <v-img
              width="110"
              height="110"
              src="/image/extrac/ex-3.png"
            ></v-img>
            <h3 class="pt-4 secondary--text">Turquoise Extraction</h3>
            <h5 class="pt-4 gray--text pb-9">
              Mining is the extraction <br />
              geological materials from the Earth
            </h5>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="12" sm="12" lg="12" xl="12">
      <v-row class="pa-2">
        <v-col data-aos="fade-left" data-aos-delay="300" align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple elevation="1" color="white">
            <v-img
              class="pt-3"
              width="110"
              height="110"
              src="/image/extrac/ex-4.png"
            ></v-img>
            <h3 class="pt-8 secondary--text">Coal Extraction</h3>
            <h5 class="pb-10 gray--text">
              we extract coal, processed<br />
              coal in beter useage
            </h5>
          </v-sheet>
        </v-col>
        <v-col data-aos="fade-left" data-aos-delay="500" align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple elevation="3" color="white">
            <v-img
              width="110"
              height="120"
              src="/image/extrac/ex-5.png"
            ></v-img>
            <h3 class="pt-4 secondary--text">Minral Processing</h3>
            <h5 class="pt-4 pb-7 gray--text">
              Mining is the extraction of <br />valuable minerals or other
            </h5>
          </v-sheet>
        </v-col>
        <v-col data-aos="fade-left" data-aos-delay="700" align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple elevation="3" color="white">
            <v-img
              width="200"
              height="110"
              src="/image/extrac/ex-6.jpg"
            ></v-img>
            <h3 class="pt-4 secondary--text">Turquoise Extraction</h3>
            <h5 class="pt-4 gray--text pb-9">
              Mining is the extraction <br />
              geological materials from the Earth
            </h5>
          </v-sheet>
        </v-col>
        <v-col data-aos="fade-left" data-aos-delay="900"  align="center" cols="12" md="3" sm="6" lg="3" xl="3">
          <v-sheet ripple width="300" elevation="3" color="white">
            <v-img
              width="300"
              height="110"
              src="/image/extrac/ex-7.png"
            ></v-img>
            <h3 class="pt-4 secondary--text">Turquoise Extraction</h3>
            <h5 class="pt-4 gray--text pb-9">
              Mining is the extraction <br />
              geological materials from the Earth
            </h5>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
    <v-col  class="py-n12" cols="12" md="12" lg="12" sm="12">
     <v-sheet  shaped height="699" width="1300" class="ml-n12 white">
       <video-bg class="mt-12 "  :sources="['/video/galaxy-ganj.mp4']">
    </video-bg>
     </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import VideoBg from 'vue-videobg'
export default {
  data() {
    return {
      services: {
        title: "Our Main Services"
      }
    };
  },
  components: {
    VideoBg,
  },
};
</script>

<style scoped>
.time_font {
  font-family: "Times New Roman";
  font-size: 100%;
}
</style>
