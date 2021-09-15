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
    <instant-messaging v-if="selectedItem  === 'Mensajería instantánea'"></instant-messaging>
    <productivity-apps v-if="selectedItem === 'Apps de productividad'"></productivity-apps>
    <locator v-if="selectedItem === 'Localizador'"></locator>
  </div>
</template>

<script>
import InstantMessaging from "~/components/services/Vas/InstantMessaging";
import ProductivityApps from "~/components/services/Vas/ProductivityApps";
import Locator from "~/components/services/Vas/Locator";

export default {
  name: "VasProducts",
  components: {
    Locator,
    InstantMessaging,
    ProductivityApps
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
          content: 'ProductivityApps',
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
