<template>
  <v-row justify="space-between">
    <v-col cols="12" md="12">
      <search-box class="ml-4" search-text="Ingrese el Nombre o DNI" :search="search" />
      <slot />
    </v-col>
  </v-row>
</template>

<script>
import searchBox from '~/components/search/SearchBox';
export default {
  name: 'PageTitle',
  components: {
    searchBox,
  },
};
</script>

<style scoped>
</style>
