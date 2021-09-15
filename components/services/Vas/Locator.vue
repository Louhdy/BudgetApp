<template>
  <v-card-text class="mt-0">
    <p>Especificaciones</p>
    <v-text-field
      v-model="amountUsers"
      label="Cantidad de usuarios"
      hint="Mínimo 10 usuarios"
      persistent-hint
      outlined
      dense
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
  </v-card-text>
</template>

<script>
export default {
  name: "Locator",
  data() {
    return {
      amountUsers: null,
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
    addService () {
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
    },
  }
}
</script>

<style scoped>

</style>
