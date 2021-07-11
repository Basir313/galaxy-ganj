<template>
  <v-carousel
    hide-delimiter-background
    show-arrows:false
    cycle
    :show-arrows="false"
  >
    <v-carousel-item
    src="/image/carousel/01.png"
      reverse-transition="fade-transition"
      transition="fade-transition"
      data-aos="fade-right"
      data-aos-daily="400"
      progress
      progress-color="primary"
    >
      <v-row class=" fill-height" align="center">
        <v-col cols="5" class="ml-4">
          <v-icon color="secondary" size="100px">mdi-chevron-right</v-icon>
          <v-icon class="ml-n16" color="secondary" size="100px"
            >mdi-chevron-right</v-icon
          >
          <h1
            class="
              white--text
              text-uppercase text-primary
              font-weight-block
              myFont
            "
            transition="scale-transition"
          >
            Welcome to
          </h1>
          <br />
          <h2 class="secondary--text subfont ml-8">
            Galaxy Ganj Mining & Mineral Processing !
          </h2>
        </v-col>
      </v-row>
    </v-carousel-item>
    <v-carousel-item
     src="/image/carousel/02.png"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row class="fill-height" align="center">
        <v-col cols="5" class="ml-4">
          <v-icon color="white" size="100px">mdi-chevron-right</v-icon>
          <v-icon class="ml-n16" color="white" size="100px"
            >mdi-chevron-right</v-icon
          >
          <h1
            class="
              secondary--text
              text-uppercase text-primary
              font-weight-block
              myFont
            "
            transition="scale-transition"
          >
            Welcome to
          </h1>
          <br />
          <h2 class="white--text subfont ml-8">
            Galaxy Ganj Mining & Mineral Processing !
          </h2>
        </v-col>
      </v-row>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
       src="/image/carousel/04.png"
    >
      <v-row class=" fill-height" align="center">
        <v-col cols="6" sm="8" class="ml-4">
          <v-icon color="secondary" size="100px">mdi-chevron-right</v-icon>
          <v-icon class="ml-n16" color="secondary" size="100px"
            >mdi-chevron-right</v-icon
          >
          <transition
            enter-active-class="animate__animated animate__bounce"
            leave-active-class="animate__animated animate__fadeOutDown"
          >
            <h1
              class="
                white--text
                text-uppercase text-primary
                font-weight-block
                goalFont
              "
              transition="scale-transition"
            >
              Mine Extraction & Mineral Processing
              <span class="secondary--text">are our major point</span>
            </h1>
          </transition>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {};
  },
};
</script>
<style scoped>
.myFont {
  font-family: "Times New Roman";
  font-size: 350%;
}
.goalFont {
  font-family: "Times New Roman";
  font-size: 300%;
}
.subfont {
  font-family: "sans-serif";
}
carousel {
}
</style>
