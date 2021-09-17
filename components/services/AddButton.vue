<template>
  <v-btn class="mt-1" color="secondary" @click="addService">Agregar</v-btn>
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
