<template>
  <v-card-text class="mt-0">
    <p>Especificaciones</p>
    <p class="mb-1">Seleccione un servicio</p>
    <v-item-group v-model="activeItem" active-class="primary">
      <v-container>
        <v-row>
          <v-col
            v-for="n in 2"
            :key="n"
            cols="12"
            md="6"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                class="align-center"
                :light="active"
                :dark="active"
                @click="toggle"
              >
                <v-card-title class="justify-center flex-grow-1"> {{serviceName[n-1]}} </v-card-title>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-text-field
      v-model="amountUsers"
      label="Cantidad de usuarios"
      hint="Mínimo 10 usuarios"
      persistent-hint
      class="mt-2"
      outlined
      dense
    ></v-text-field>
    <v-select
      v-if="activeItem === 0"
      v-model="selectedItem"
      :items="products"
      label="Seleccione una aplicación"
      class="mt-2 mb-0 pb-3"
      dense
      outlined
      hide-details
    ></v-select>
    <v-card-text v-if="activeItem === 1 || !(selectedItem === null)" class="pa-0 pt-1"><p>Seleccione una de las opciones</p></v-card-text>
    <v-item-group v-if="activeItem === 1 || !(selectedItem === null)" v-model="activeTracking" active-class="primary">
      <v-container>
        <v-row>
          <v-col
            v-for="n in 2"
            :key="n"
            cols="12"
            md="6"
            class="pt-0"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                class="align-center"
                :light="active"
                :dark="active"
                height="350px"
                @click="toggle"
              >
                <v-card-title class="justify-center flex-grow-1"> {{trackingName[n-1]}} </v-card-title>
                <v-card-text class="justify-center">
                  <v-container v-for="(detail,idx) in trackingDetail[n-1]" :key="idx" text-md-center>
                    <v-row align-content="center">
                      <v-col class="ma-0 pa-0">
                        <p class="ma-0 pb-3">{{detail}}</p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-container v-if="activeItem === 1 || !(selectedItem === null)" class="pa-0">
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
  name: "ProductivityApps",
  data (){
    return {
      amountUsers: null,
      activeItem: null,
      activeTracking: null,
      selectedItem: null,
      serviceName: ['APP + TRACKING', 'TRACKING'],
      trackingName: ['TRACKING FULL', 'TRACKING LITE'],
      trackingDetail: [
        ['Visualización de recorrido',
          'Frecuencia hasta 1 min',
          'Horario de trackeo por usuario',
          'Geocercas',
          'Puntos de interés',
          'Notificaciones',
          'Alerta de GPS apagado',
          'Reporte de recorrido',
        ],
        ['Visualización de recorrido',
          'Frecuencia hasta 7 min',
          'Horario de trackeo genérico',
          'Reporte de recorrido'
        ],
      ],
      products: [
        'Gestor de actividades',
        'Gestor comercial',
        'Reparto',
        'Seguridad',
        'Tracking',
        'Trade marketing',
        'Gestor de servicios',
        'Home office'
    ],
    }
  },
  methods:{
    addService() {
      const serviceDetail1 =
        { name: 'Cantidad de usuarios',
          amount: this.amountUsers,
        };
      const serviceDetail2 =
        { name: 'Servicio',
          amount: this.activeItem === 0 ? 'APP + TRACKING' : 'TRACKING',
        };
      const serviceDetail3 =
        { name: 'Tipo de tracking',
          amount: this.activeTracking === 0 ? 'TRACKING FULL' : 'TRACKING LITE',
        };
      const serviceDetail4 =
        { name: 'Aplicación',
          amount: this.selectedItem,
        };
      const detail = [];
      detail.push(serviceDetail1);
      detail.push(serviceDetail2);
      detail.push(serviceDetail3);
      if (this.activeItem === 0) {
        detail.push(serviceDetail4);
      }

      const service = {
        nameService: 'Apps de productividad',
        typeService: 'VAS',
        detailService: detail,
        priceService: null,
      };
      this.$parent.$parent.$parent.$parent.$parent.$emit('addNewService', service)
    }

  },
}
</script>

<style scoped>

</style>
