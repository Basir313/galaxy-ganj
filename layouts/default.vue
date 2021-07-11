<template>
  <v-app light>
    <v-toolbar prominent fixed width="100%" absolute color="primary">
      <v-app-bar-nav-icon class="ml-4">
        <v-avatar class="mt-12" size="90">
          <v-img
            alt="Galaxy Ganj Logo"
            class="mr-2"
            src="/galaxy ganj logo.png"
            transition="scale-transition"
          />
        </v-avatar>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="white--text"> GALAXY GANJ </v-app-bar-title>
      <v-toolbar-items class="ml-8">
        <v-row class="mb-2" align="end">
          <v-col>
            <v-btn color="secondary" @click="goToHome" light outlined rounded>Home</v-btn>
          </v-col>
          <v-col>
            <v-btn outlined rounded color="secondary" @click="goToAboutUs" light>About Us</v-btn>
          </v-col>
          <v-col>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="secondary"
                  light
                  outlined
                  rounded
                  v-bind="attrs"
                  v-on="on"
                >
                  Services
                </v-btn>
              </template>
              <v-list>
                <v-list-item light link>
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-diamond-stone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title @click="goToExtraction" class="primary--text"
                    >Extraction</v-list-item-title
                  >
                </v-list-item>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-diamond-stone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title @click="goToProcessing" class="primary--text"
                    >Processing</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col>
            <v-btn @click="goToPartner" outlined rounded light color="secondary"
              >Partners</v-btn
            >
          </v-col>
          <v-col>
            <v-btn @click="goToContact" outlined rounded light color="secondary"
              >Contact</v-btn
            >
          </v-col>
        </v-row>
      </v-toolbar-items>
    </v-toolbar>
    <v-main class="mt-16 pt-16">
      <nuxt />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue"
import extractionVue from '../pages/extraction.vue';
export default {
  name: "App",
  mounted() {
    window.onscroll = () => {};
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop < 100 ||
        document.documentElement.scrollTop < 100
      ) {
        this.bg = "transparent";
      } else {
        this.bg = "primary";
      }
    },
    goToContact(){
      this.$router.push({path: "/contact"});
    },
    goToAboutUs(){
      this.$router.push({path:"/about-us"});
    },
    goToProcessing(){
      this.$router.push({path:"/processing"})
    },
    goToExtraction(){
      this.$router.push({path:"/extraction"})
    },
    goToHome(){
      this.$router.push({path:"/"});
    },
    goToPartner(){
      this.$router.push({path:"/partner"})
    }
  },
  components: {
    Footer,
  },
};
</script>
