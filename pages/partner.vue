<template>
  <v-layout>
    <v-row>
      <v-col cols="12" md="12" lg="12" xl="12" sm="12">
        <v-img max-width="1500" max-height="400" src="/image/partners/partner-11.png">
          <v-overlay value="true" opacity="0.6" color="primary" absolute>
            <v-row align="center">
              <v-col cols="12" justify="center"><h2>Our Partners</h2></v-col>
              <v-col cols="12" justify="center"
                ><h4>
                  <nuxt-link class="white--text" to="/">Home</nuxt-link> >
                  <nuxt-link class="white--text" to="/partner"
                    >Partners</nuxt-link
                  >
                  >
                </h4></v-col
              >
            </v-row>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
