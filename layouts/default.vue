<template>
  <v-app class="default">
    <v-app-bar
      absolute
      color="primary"
      class="mt-6"
      fixed
      app
    >
      <v-img
        :src="require('../static/logoEntel.png')"
        contain
        max-height="50"
        max-width="70"
      >
      </v-img>
      <v-toolbar-title class="header" v-text="title"></v-toolbar-title>
      <v-tabs
        v-model="tabSelected"
        centered
        dark
        class="mr-10"
      >
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab
          v-for="item in items"
          :key="item.name"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-tabs-items v-model="tabSelected">
          <v-tab-item
            v-for="item in items"
            :key="item.name"
          >
            <component :is="item.content"></component>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from '~/components/Dashboard';
import NuevaCotización from '~/components/NewQuotation';
import Cotizaciones from '~/components/Quotations';

export default {
  components: {
    Dashboard,
    NuevaCotización,
    Cotizaciones,
  },
  data () {
    return {
      clipped: false,
      tabSelected: null,
      fixed: false,
      items: [
        { name:'Dashboard', content:'Dashboard'},
        { name:'Nueva Cotización', content:'NuevaCotización'},
        { name:'Cotizaciones', content:'Cotizaciones'},
      ],
      title: 'Budget App',
    }
  }
}
</script>
<style scoped>
.header{
  width: 200px;
  color: white;
}
.default{
  background: white;
}

</style>
