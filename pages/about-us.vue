<template>
  <v-row>
    <!-- Paner of first page -->
    <v-col cls="12" md="12" sm="12" lg="12" xl="12">
      <v-img
        src="/image/about-us/about-us-03.png"
        max-width="1500"
        height="300"
      >
        <v-overlay value="true" opacity="0.5" color="primary" absolute>
          <v-row align="center">
            <v-col cols="12" justify="center"><h2>About Us</h2></v-col>
            <v-col cols="12" justify="center"
              ><h4>
                <nuxt-link class="white--text" to="/">Home</nuxt-link> >
                <nuxt-link class="white--text" to="/about-us"
                  >About Us</nuxt-link
                >
                >
              </h4></v-col
            >
          </v-row>
        </v-overlay>
      </v-img>
    </v-col>
    <!-- welcome page -->
    <v-col cols="12" md="12" lg="12" xl="12" xs="12" sm="12">
      <v-row justify="center" align="center" class="pa-5">
        <v-col cols="12" md="6" sm="12" lg="6" xl="6">
          <h1 class="about-h1 pl-5 secondary--text font-weight-bold">
            Welcome to the Galaxy Ganj <br />
            Company (ggc).
          </h1>
          <p class="about-p px-10 pt-8 gray--text text-justify">
            An important approach to text mining involves the use of
            natural-language information extraction. Information extraction (IE)
            distills structured data or knowledge from unstructured text by
            identifying references to named entities as well as stated
            relationships between such entities. IE systems can be used to
            directly extricate abstract knowledge from a text corpus, or to
            extract concrete data from a set of documents which can then be
            further analyzed with traditional data-mining techniques to discover
            more general patterns. We discuss methods and implemented systems
            for both of these approaches and summarize results on mining real
            text corpora of biomedical abstracts , job announcements, and
            product descriptions. We also discuss challenges that arise when
            employing current information extraction technology to discover
            knowledge in text.
          </p>
        </v-col>
        <v-col class="mt-md-16 pt-md-16 pr-4" align="center" justify="center" cols="12" md="6" sm="12" lg="6" xl="6">
          <carousel :scrollPerPage="false" autoplay autoplayTimeout="2000" :loop="true" perPage="1">
            <slide
              v-for="abouts in about_solide"
              class="pa-4"
              :key="abouts.index"
            >
                <v-img contain width="600" height="250" :src="abouts.src">
                </v-img>
            </slide>
          </carousel>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="mt-16 pt-6" cols="12" md="12" lg="12" xl="12" xs="12" sm="12">
    <v-row justify="center">
      <v-col  data-aos="fade-right" data-aos-delay="300" class="pl-5 pb-5 pt-16" cols="12" md="6" lg="6" xl="6" sm="12">
       <v-img height="350" contain src="/image/about-us/meeting-aim.png">
       </v-img>
      </v-col>
      <v-col data-aos="fade-left" data-aos-delay="500" cols="12" md="6" lg="6" xl="6" sm="12">
       <h1 class="pl-10 about-h1 secondary--text font-weight-bold">Our Aim</h1>
       <p class="about-p text-justify px-10">An important approach to text mining involves the use of natural-language information extraction. Information extraction (IE) distills structured data or knowledge from unstructured text by identifying references to named entities as well as stated relationships between such entities. IE systems can be used to directly extricate abstract knowledge from a text corpus, or to extract concrete data from a set of documents which can then be further analyzed with traditional data-mining techniques to discover more general patterns. We discuss methods and implemented systems for both of these approaches and summarize results on mining real text corpora of biomedical abstracts , job announcements, and product descriptions. We also discuss challenges that arise when employing current information extraction technology to discover knowledge in text.</p>
      </v-col>
    </v-row>
    </v-col>
    <v-col class="py-16 mt-12" cls="12" md="12" sm="12" lg="12" xl="12">
      <v-img
        src="/image/process/minral-processing.png"
        max-width="1500"
        height="150"
      >
        <v-overlay value="true" opacity="0.7" color="secondary" absolute>
          <v-row align="center">
            <v-col cols="12" justify="center"><h1 class="font-weight-bold about-h1 white--text target">We are extract minerals from the heart of the earth</h1></v-col>
          </v-row>
        </v-overlay>
      </v-img>
    </v-col>
    <v-col class="pt-16" cols="12" lg="12" md="12" xl="12" sm="12">
     <v-row>
       <v-col cols="12" md="6" sm="12" lg="6" xl="6">

       </v-col>
     </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      about_solide:[
        {src:"/image/about-us/about-solide/about-us-01.png"},
        {src:"/image/about-us/about-solide/about-us-02.png"},
        {src:"/image/about-us/about-solide/about-us-03.png"},
        {src:"/image/about-us/about-solide/about-us-04.png"},
        {src:"/image/about-us/about-solide/about-us-05.png"},
        {src:"/image/about-us/about-solide/about-us-06.png"},
        {src:"/image/about-us/about-solide/about-us-07.png"},
        {src:"/image/about-us/about-solide/about-us-08.png"},

      ]
    }
  },
  components:{
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.about-h1 {
  font-family: "Times New Roman", Times, serif;
}
.about-p {
  font-family: "Times New Roman", Times, serif;
  latter-specing: 3px;
  word-spacing: 3px;
  line-height: 2;
  size: 400px;
}
.target{
  animation: flowing 8s linear infinite;
  transform: translateX(100%);
}

@keyframes flowing {
  100% {
    transform: translateX(-100%);
  }
}
</style>
