<template>
  <v-container fluid>
    <page-title>
      Nueva Cotización
    </page-title>
    <v-row>
      <type-services @addNewService="addService"/>
      <quotation-services :services="newServices" @deleteQuotation="deleteQuotation"/>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from "~/components/page/PageTitle";
import TypeServices from "~/components/services/TypeServices";
import QuotationServices from "~/components/services/QuotationServices";
import {getInstanMessagePrice, getLocatorPrice, getProductivityAppsPrice} from "~/helpers/pricing";

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
     if (service.nameService === 'Mensajería instantánea') {
       service.priceService = getInstanMessagePrice(service.detailService[0].amount)
     }
     if (service.nameService === 'Apps de productividad') {
       service.priceService = getProductivityAppsPrice(service.detailService[0].amount, service.detailService[1].amount, service.detailService[2].amount);
     }
     if (service.nameService === 'Localizador') {
       service.priceService = getLocatorPrice(service.detailService[0].amount);
     }
     this.newServices.push(service);
    },
    deleteQuotation (index) {
      this.newServices.splice(index,1);
    }
  },
}
</script>

<style scoped>

</style>
