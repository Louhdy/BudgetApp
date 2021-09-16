<template>
  <v-row>
    <v-col>
      <v-card>
        <v-toolbar
          class=""
          color="primary"
          dark
          dense
          flat
        >
          <v-btn class="ml-2" icon x-small @click="deleteQuotation">
            <v-icon>mdi-close-thick</v-icon>
          </v-btn>

          <v-toolbar-title class="serviceTitle">{{typeService}} - {{nameService}}</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn class="mr-2" icon x-small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn class="mr-0" icon small>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container
          v-for="(item, idx) in detailService"
          :key="idx"
        >
          <v-row>
            <v-col class="ml-13">
              {{item.name}} :
            </v-col>
            <v-col>
              {{item.amount}}
            </v-col>
          </v-row>
        </v-container>
        <v-divider inset class="mr-12"/>
        <v-container>
          <v-row justify="space-between">
            <v-col md="3" class="pb-0 ml-13">
              <p><b>Total estimado:</b></p>
            </v-col>
            <v-col md="3" class="pr-2">
              <p>S/. {{formatPrice(priceService)}}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {getPriceFormat} from "~/helpers/pricing";
export default {
  name: "AddedService",
  props: {
    typeService: {
      type: String,
      default: '',
    },
    nameService: {
      type: String,
      default: '',
    },
    detailService: {
      type: Array,
      default: null,
    },
    priceService: {
      type: Number,
      default: null,
    }
  },
  methods: {
    formatPrice(price) {
      return getPriceFormat(price);
    },
    deleteQuotation() {
      this.$emit('deleteQuotation');
    }
  }
}
</script>

<style scoped>
.serviceTitle{
  font-size: 16px;
}
</style>
