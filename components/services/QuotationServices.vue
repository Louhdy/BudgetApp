<template>
  <v-col>
    <v-card elevation="1" outlined>
      <v-card-text class="pb-0">
        Cotización
      </v-card-text>
      <v-container
        v-for="(item, idx) in services"
        :key="idx"
      >
        <added-service
          :type-service="item.typeService"
          :name-service="item.nameService"
          :detail-service="item.detailService"
        />
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import AddedService from "~/components/services/AddedService";
export default {
  name: "QuotationServices",
    components: {AddedService},
    props: {
      services: {
          type: Array,
          default: null,
      }
  },
}
</script>

<style scoped>

</style>
