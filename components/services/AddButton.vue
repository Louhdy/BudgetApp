<template>
  <v-btn class="mt-1" dark color="selected" @click="addService">Agregar</v-btn>
</template>

<script>
export default {
  name: "AddButton",
  methods: {
    addService() {
      this.$emit('addButton');
    }
  }
}
</script>

<style scoped>

</style>
