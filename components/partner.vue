<template>
  <v-row class="pa-12" justify="center">
    <v-col align="center" cols="12" md="12" sm="12" lg="12" xl="12">
      <h1 class="secondary--text font-wighte-bold">Our Partners</h1>
    </v-col>
    <v-col class="mt-n3" align="center" justify="center" cols="3"
      ><v-divider class="primary"></v-divider
    ></v-col>
    <v-col align="center" cols="12" md="12" lg="12" xl="12" sm="12">
      <carousel autoplay perPage="3">
        <slide v-for="partner in partners" class="pa-4" :key="partner.index">
          <v-card>
            <v-img contain width="400" height="220" :src="partner.logo">
            </v-img>
            <h2 class="primary--text">{{partner.name}}</h2>
            <h4 class="primary--text">{{partner.website}}</h4>
          </v-card>
        </slide>

      </carousel>
    </v-col>
  </v-row>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      partners: [
        {
          name: "Galaxy LSP",
          website: "www.galaxylspe.com",
          logo: "/image/partners/galaxylsp.png"
        },
        {
          name: "Serchina Consulting service",
          website: "www.sarchina.org",
          logo: "/image/partners/sarchina.png"
        },
        {
          name: "ALGSO",
          website: "www.algso.org",
          logo: "/image/partners/algso.png"
        },
        {
          name: "Galaxy LSP",
          website: "www.galaxylspe.com",
          logo: "/image/partners/galaxylsp.png"
        },
        {
          name: "Serchina Consulting service",
          website: "www.sarchina.org",
          logo: "/image/partners/sarchina.png"
        },
        {
          name: "ALGSO",
          website: "www.algso.org",
          logo: "/image/partners/algso.png"
        }
      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="scss" scoped></style>
