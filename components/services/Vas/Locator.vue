<template>
  <v-card-text class="mt-0">
    <p>Especificaciones</p>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="amountUsers"
        label="Cantidad de usuarios"
        :rules="amountUserRules"
        hint="Mínimo 10 usuarios"
        persistent-hint
        outlined
        required
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
            <v-btn class="mt-1" color="primary" @click="addService">Agregar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card-text>
</template>

<script>

import {amountUserRules} from "~/helpers/validation";
export default {
  name: "Locator",
  data() {
    return {
      valid: true,
      amountUsers: null,
      amountUserRules,
      pricing: [
        {
          id: 1,
          name: 'Ver pricing por licencia:',
          children: [
            { id: 2, name: 'De 10 a 29 usuarios :', price: 'S/.22.00'},
            { id: 3, name: 'De 30 a 99 usuarios :', price: 'S/.15.00'},
            { id: 4, name: 'De 100 a 199 usuarios :', price: 'S/.10.00'},
            { id: 5, name: 'De 200 a más usuarios :', price: 'S/.8.00'},
          ],
        },
      ],
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
          { name: 'Cantidad de usuarios',
            amount: this.amountUsers,
          };
        const serviceDetail2 =
          { name: 'Contrato mínimo de',
            amount: '12 meses',
          };
        const detail = [];
        detail.push(serviceDetail1);
        detail.push(serviceDetail2);

        const service = {
          nameService: 'Localizador',
          typeService: 'VAS',
          detailService: detail,
          priceService: null,
        };
        this.$parent.$parent.$parent.$parent.$parent.$emit('addNewService', service)
      }
    }
  }
}
</script>

<style scoped>

</style>
