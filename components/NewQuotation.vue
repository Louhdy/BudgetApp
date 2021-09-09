<template>
  <v-container fluid>
    <page-title>
      Nueva Cotización
    </page-title>
    <v-row>
      <type-services @addNewService="addService"/>
      <quotation-services :services="newServices"/>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from "~/components/page/PageTitle";
import TypeServices from "~/components/services/TypeServices";
import QuotationServices from "~/components/services/QuotationServices";

export default {
  name: "NewCotization",
  components: {QuotationServices, TypeServices, PageTitle},
  data () {
    return {
      newServices: [],
    }
  },
  methods: {
    addService (service) {
     this.newServices.push(service);
    },
  },
}
</script>

<style scoped>

</style>
