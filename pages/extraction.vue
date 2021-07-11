<template>
  <v-row>
    <v-col cls="12" md="12" sm="12" lg="12" xl="12">
      <v-img
        src="/image/mining/mining.png"
        max-width="1500"
        height="300"
      >
        <v-overlay value="true" opacity="0.5" color="primary" absolute>
          <v-row align="center">
            <v-col cols="12" justify="center"><h2>Mining</h2></v-col>
            <v-col cols="12" justify="center"
              ><h4>
                <nuxt-link class="white--text" to="/">Home</nuxt-link> >
                <nuxt-link class="white--text" to="/extraction"
                  >Mining</nuxt-link
                >
                >
              </h4></v-col
            >
          </v-row>
        </v-overlay>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
