<template>
  <v-row>
    <!-- contact banner -->
    <v-col cols="12" height="100" md="12" sm="12" lg="12" xl="12">
      <v-img src="/image/contact/contact-11.png">
        <v-overlay value="true" opacity="0.6" color="primary" absolute>
          <v-row align="center">
            <v-col cols="12" justify="center"><h2>Contact Us</h2></v-col>
            <v-col cols="12" justify="center"
              ><h4>
                <nuxt-link class="white--text" to="/">Home</nuxt-link> >
                <nuxt-link class="white--text" to="/contact"
                  >Contact</nuxt-link
                >
                >
              </h4></v-col
            >
          </v-row>
        </v-overlay>
      </v-img>
    </v-col>
    <!-- Contact info -->
    <v-col class="pa-10" cols="12" sm="12" lg="12" xl="12">
      <v-row justify="center" class="mt-12">
        <v-col align="center" cols="12" md="4" sm="12" xl="4" lg="4">
          <v-icon color="primary" large>mdi-map-legend</v-icon>
          <h1 class="pt-4 secondary--text">Address</h1>
          <h3 class="pt-4 pb-12 primary--text">
            Street 8th, Sherpur, District 10th <br />,Kabul, Afghanistan
          </h3>
        </v-col>
        <v-col align="center" cols="12" md="4" sm="12" lg="4" xl="4">
          <v-icon color="primary" large>mdi-email</v-icon>
          <h1 class="pt-4 secondary--text">Email</h1>
          <h3 class="pt-4 primary--text">info@galaxyganj.com</h3>
        </v-col>
        <v-col cols="12" md="4" sm="12" lg="4" xl="4" align="center">
          <v-icon color="primary" large>mdi-phone</v-icon>
          <h1 class="pt-4 secondary--text">Phone</h1>
          <h3 class="pt-4 primary--text">+93 748 953 964</h3>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="pa-10" cols="12" sm="12" lg="12" md="12" xl="12">
      <v-row>

      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {

};
</script>

<style lang="scss" scoped>
$banner-actions-start-margin: 0px;
</style>
