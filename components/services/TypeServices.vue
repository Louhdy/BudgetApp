<template>
  <v-col>
    <v-card elevation="1" class="cardRounded" outlined>
      <v-card-text class="pb-0">
        Servicios
      </v-card-text>
      <v-tabs
        v-model="tabSelected"
        background-color="white"
        color="secondary"
        centered
        light
        icons-and-text
      >
        <v-tab
          v-for="service in services"
          :key="service.name"
        >
          {{service.name}}
          <v-icon>{{service.icon}}</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
    <v-card class="mt-3 cardRounded">
      <v-tabs-items v-model="tabSelected">
        <v-tab-item
          v-for="item in services"
          :key="item.name"
        >
          <component :is="item.content"/>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-col>
</template>

<script>
import VasProducts from "~/components/services/VasProducts";
export default {
  name: "TypeServices",
  components: {VasProducts},
  data () {
    return {
      tabSelected: 2,
      services: [
        { name:'TELCO', icon:'mdi-access-point', content:'TelcoProducts'},
        { name:'TI', icon:'mdi-cube-outline', content:'TIProducts'},
        { name:'VAS', icon:'mdi-application', content:'VasProducts'},
        { name:'CYBERSEG', icon:'mdi-shield-lock', content:'CyberProducts'},
      ],
    }
  },
}
</script>

<style scoped>
.cardRounded {
  border-radius:15px;
}
</style>
