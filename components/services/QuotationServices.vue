<template>
  <v-col>
    <v-card elevation="1" outlined class="cardRounded">
      <v-card-text class="pb-0">
        Cotización
      </v-card-text>
      <v-container v-if="services.length === 0" class="ml-1">
        <p>Configure y agregue un producto</p>
      </v-container>
      <v-container
        v-for="(item, idx) in services"
        v-else
        :key="idx"
      >
        <added-service
          :type-service="item.typeService"
          :name-service="item.nameService"
          :detail-service="item.detailService"
          :price-service="item.priceService"
          @deleteQuotation="deleteQuotation(idx)"
        />
      </v-container>
      <v-container v-if="services.length !== 0">
        <v-row justify="space-between">
          <v-col md="3" class="pb-0 ml-16">
            <p><b>Costo total estimado: </b></p>
          </v-col>
          <v-col md="3" class="mr-1">
            <p>S/. {{formatPrice(getEstimateTotal())}}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import AddedService from "~/components/services/AddedService";
import {getPriceFormat} from "~/helpers/pricing";
export default {
  name: "QuotationServices",
    components: {AddedService},
    props: {
      services: {
          type: Array,
          default: null,
      }
    },
    methods: {
      getEstimateTotal() {
        if (this.services.length === 0) return null;
        let totalPrice = 0;
        for (const service of this.services) {
          totalPrice += service.priceService;
        }
        return totalPrice;
      },
      formatPrice(price) {
        return getPriceFormat(price);
      },
      deleteQuotation(index) {
        this.$emit('deleteQuotation',index);
      },
    },
}
</script>

<style scoped>
.cardRounded {
  border-radius:15px;
}
</style>
