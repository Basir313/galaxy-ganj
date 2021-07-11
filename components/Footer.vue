<template>
  <v-footer absolute color="primary" app>
    <v-row>
      <v-col align="center" cols="12" md="4" lg="4" sm="12" xl="4">
        <h2 class="white--text mt-8">Have a Question ?</h2>
        <v-row class="mt-3" >
          <v-col align="center" cols="12"  class="mt-7">
            <v-row justify="center">
              <v-btn icon
                ><v-icon color="secondary"
                  >mdi-map-marker-multiple-outline</v-icon
                ></v-btn
              >
              <span class=" ml-3 secondary--text ">
                Street 8th, Sherpur, District 10th,<br />
                Kabul, Afghanistan</span
              >
            </v-row>
          </v-col>
          <v-col cols="12" class="mt-7">
            <v-row class="pr-16 mt-3 mr-4" justify="center">
              <v-btn icon><v-icon color="secondary">mdi-phone</v-icon></v-btn>
              <span class="ml-3 secondary--text">+93 748 953 964</span>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row class="pr-12 mt-3 mr-2" justify="center">
              <v-btn icon><v-icon color="secondary">mdi-email</v-icon></v-btn>
              <span class="ml-3 secondary--text">info@galaxyganj.com</span>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" lg="4" sm="8" xl="4">
        <h2><span></span></h2>
      </v-col>
      <v-col align="center" cols="12" md="4" sm="12" lg="4" xl="4">
        <v-col cols="12" sm="8">
          <h2 class="mr-6 mt-8 ">
            <span class="white--text ">Subscribs us</span>
          </h2>
          <v-form class="mt-8">
            <v-text-field
              label="Enter Email"
              placeholder="...@example.com"
              class="px-sm-8 px-md-1 white--text"
              background-color="#2F406B"
              color="secondary"
              type="text"
              append-icon="mdi-email"
              outlined
              v-model="email"
              light
            ></v-text-field>
            <v-btn
              class="mt-4"
              elevation="3"
              large
              width="300"
              color="secondary"
              background-color="secondary"
            >
              <span class="white--text">Subscribs</span>
            </v-btn>
          </v-form>
        </v-col>
        <v-col class="mt-4" cols="12">
          <h2 class="white--text">Contact With Us</h2>
          <v-row justify="center" class="mt-7">

              <v-btn icon><v-icon color="secondary">mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon color="secondary">mdi-twitter</v-icon></v-btn>
            <v-btn icon><v-icon color="secondary">mdi-linkedin</v-icon></v-btn>
            <v-btn icon><v-icon color="secondary">mdi-instagram</v-icon></v-btn>
          </v-row>

        </v-col>
      </v-col>
      <v-col
        align="center"
        cols="12"
        md="12"
        lg="12"
        xl="12"
        class="mt-16"
        sm="12"
      >
        <span class="white--text"
          >Copyright &copy; {{ new Date().getFullYear() }} All right reversed |
          Website made by
          <nuxt-link target="_blank" to="https://sarchina.org"
            ><span class="white--text"> Sarchina</span></nuxt-link
          >
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
