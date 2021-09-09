<template>
  <div>
    <v-card-text class="pb-0">
      <div>VAS</div>
      <v-select
        v-model="selectedItem"
        :items="products"
        item-text="name"
        label="Seleccione un producto"
        class="mt-3 mb-0"
        dense
        outlined
        hide-details
      ></v-select>
    </v-card-text>
    <v-divider class="mt-3"></v-divider>
    <InstantMessaging v-if="selectedItem  === 'Mensajería instantánea'"></InstantMessaging>
  </div>
</template>

<script>
import InstantMessaging from "~/components/services/Vas/InstantMessaging";

export default {
  name: "VasProducts",
  components: {
    InstantMessaging,
  },
  data() {
    return {
      products: [
        {
          name: 'Mensajería instantánea',
          content: 'InstantMessaging',
        },
        {
          name: 'Apps de productividad',
          content: 'ProductiviyApps',
        },
        {
          name: 'Localizador',
          content: 'Locator',
        },
      ],
      selectedItem: null,
    }
  }
}
</script>

<style scoped>

</style>
