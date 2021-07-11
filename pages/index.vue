<template>
<v-row>
    <v-col cols="12" lg="12" md="12" sm="12" xl="12">
      <Carousel />
    </v-col>
    <v-col cols="12" lg="12" md="12" sm="12" xl="12">
      <Who></Who>
    </v-col>
    <v-col cols="12">
      <homeServices></homeServices>
    </v-col>
    <v-col><Partner></Partner></v-col>
  </v-row>
</template>

<script>
import Carousel from "~/components/carousel.vue";
import homeServices from "~/components/homeServices.vue";
import Story from "~/components/story.vue";
import Who from "~/components/who.vue";
import Partner from "~/components/partner.vue";
export default {
 components: {
    Carousel,
    homeServices,
    Story,
    Who,
    Partner
  },
}
</script>
