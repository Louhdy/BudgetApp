<template>
  <v-row justify="space-between">
    <v-col cols="12" md="auto">
      <p class="text-h4 primary-color page-title">
        <slot />
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PageTitle',
};
</script>

<style scoped>
.primary-color{
  color: #535B6C
}
.page-title {
  margin-top: 2rem;

}
</style>
