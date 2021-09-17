<template>
  <v-card-text class="mt-0">
    <p>Especificaciones</p>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="amountMessages"
        label="Cantidad de mensajes al mes"
        :rules="amountMessagesRules"
        hint="Mínimo 3000 mensajes"
        persistent-hint
        outlined
        dense
        @keypress="isNumber($event)"
      ></v-text-field>
      <v-container class="pa-0">
        <v-row>
          <v-col md="12" class="pa-0">
            <v-treeview
              :items="pricing"
              rounded
              hoverable
            >
              <template #append="{ item }">
                <p class="mr-10 mb-0 price  "> <b>{{ item.price }}</b> </p>
              </template>
            </v-treeview>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="pa-0">
        <v-row justify="end">
          <v-col class="mr-3" md="2">
            <add-button @addButton="addService"></add-button>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card-text>
</template>

<script>
import {amountMessagesRules} from "~/helpers/validation";
import AddButton from "~/components/services/AddButton";

export default {
  name: "InstantMessaging",
  components: {AddButton},
  data() {
    return {
      amountMessages: null,
      amountMessagesRules,
      valid: true,
      pricing: [
        {
          id: 1,
          name: 'Ver pricing :',
          children: [
            { id: 2, name: 'Hasta 5K :', price: 'S/.0.055'},
            { id: 3, name: 'Más de 5K hasta 10K :', price: 'S/.0.050'},
            { id: 4, name: 'Más de 10K hasta 25K :', price: 'S/.0.047'},
            { id: 5, name: 'Más de 25K hasta 50K :', price: 'S/.0.045'},
            { id: 6, name: 'Más de 50K hasta 100K :', price: 'S/.0.042'},
            { id: 7, name: 'Más de 100K hasta 250K :', price: 'S/.0.040'},
            { id: 8, name: 'Más de 250K hasta 500K :', price: 'S/.0.037'},
            { id: 9, name: 'Más de 500K hasta 1MM :', price: 'S/.0.036'},
          ],
        },
      ],
      units: ['KB', 'MB'],
    }
  },
  methods: {
    validate () {
      this.valid = this.$refs.form.validate();
    },
    isNumber(evt) {
      evt = (evt) || window.event;
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    addService () {
      this.validate();
      if (this.valid) {
        const serviceDetail1 =
          {
            name: 'Cantidad de mensajes',
            amount: this.amountMessages,
          };
        const serviceDetail2 =
          {
            name: 'Contrato mínimo de',
            amount: '12 meses',
          };
        const detail = [];
        detail.push(serviceDetail1);
        detail.push(serviceDetail2);

        const service = {
          nameService: 'Mensajería instantánea',
          typeService: 'VAS',
          detailService: detail,
          priceService: null,
        };
        this.$parent.$parent.$parent.$parent.$parent.$emit('addNewService', service)
      }
    },
  }
}
</script>

<style scoped>
.price{
  color: #535B6C;
}
</style>
