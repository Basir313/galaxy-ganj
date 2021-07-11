<template>
  <v-row class="mt-8">
    <v-col
      align="start"
      class="pl-16"
      cols="12"
      md="12"
      sm="12"
      lg="12"
      xl="12"
    >
      <h3  class="secondary--text text-h1 font-weight-black">Who we are?</h3>
    </v-col>
    <v-col>
      <v-row class="mt-12">
        <v-col data-aos="fade-up"
         data-aos-anchor-placement="right-left" data-aos-daily="400" cols="12" md="6" lg="6" xl="6" sm="12">
          <p class="gray--text text-site pl-16 text-justify">
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
          <v-row>
            <v-col cols="12" align="end" class="pr-12">
              <v-btn color="secondary white--text" large>Read More</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6" sm="12">
          <v-row class="mt-n8 pr-4">
            <v-col data-aos="flip-left" data-aos-daily="200" align="center" cols="12" md="6" lg="6" xl="6" sm="12">
              <v-hover v-slot:default="{hover}" open-delay="100">
               <v-card :elevation="hover? 16:2" :class="{'on-hover':hover}">
                <v-img width="300" height="200" src="/image/who/01.png">
              <v-overlay v-if="hover" absolute opacity="0.7" color="secondary" >
               <h2>Galaxy Ganj</h2>
              </v-overlay>
              </v-img>
               </v-card>
              </v-hover>
            </v-col>
            <v-col data-aos="flip-right" data-aos-daily="200" align="center" cols="12" md="6" lg="6" xl="6" sm="12">
             <v-hover v-slot:default="{hover}" open-delay="200">
               <v-card :elevation="hover? 16: 2" :class="{'on-hover' :hover}">
                <v-img width="300" height="200" src="/image/who/02.png">
               <v-overlay v-if="hover" absolute opacity="0.7" color="secondary" >
               <h2>Galaxy Ganj</h2>
              </v-overlay> </v-img>
             </v-card>
             </v-hover>
            </v-col>
            <v-col data-aos="zoom-in-up" data-aos-daily="200" align="center" class="mt-n2" cols="12" md="6" lg="6" xl="6" sm="12">
              <v-hover v-slot:default= "{ hover}" open-delay="200">
                <v-card  :elevation="hover ?16:2" :class="{'on-hover':hover}">
                <v-img width="300" height="200" src="/image/who/03.png">
               <v-overlay v-if="hover" absolute opacity="0.7" color="secondary">
                <h2>Galaxy Gang</h2>
              </v-overlay></v-img>
              </v-card>
              </v-hover>
            </v-col>
            <v-col data-aos="zoom-in-down" data-aos-daily="200" align="center" class="mt-n2" cols="12" md="6" lg="6" xl="6" sm="12">
              <v-hover v-slot:default= "{ hover}" open-delay="200">
                <v-card :elevation="hover ? 16:2" :class="{'on-hover': hover}">
                  <v-img  width="300" height="200" src="/image/who/05.png">
                   <v-overlay v-if="hover" opacity="0.7" color="secondary" absolute>
                     <h2>Galaxy Ganj</h2>
                   </v-overlay>
               </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      overlay: false
    }
  },
};
</script>

<style scoped>
.text-site {
  font-family: "Times New Roman", Times, serif;
  latter-specing: 3px;
  word-spacing: 3px;
  line-height: 2;
  size: 300px;
}
.text-h1 {
  font-family: "Times New Roman", Times, serif;
  text-transform: capitalize;
}
.v-card:hover{
  background-color: blue;
}
</style>
