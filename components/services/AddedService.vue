<template>
  <v-row>
    <v-col>
      <v-card>
        <v-toolbar
          class=""
          color="primary"
          dark
          dense
          flat
        >
          <v-btn class="ml-2" icon x-small>
            <v-icon>mdi-close-thick</v-icon>
          </v-btn>

          <v-toolbar-title class="serviceTitle">{{typeService}} - {{nameService}}</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn class="mr-2" icon x-small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn class="mr-0" icon small>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container
          v-for="(item, idx) in detailService"
          :key="idx"
        >
          <v-row>
            <v-col>
              {{item.name}} : {{item.amount}}
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AddedService",
  props: {
    typeService: {
      type: String,
      default: '',
    },
    nameService: {
      type: String,
      default: '',
    },
    detailService: {
      type: Array,
      default: null,
    },
  }
}
</script>

<style scoped>
.serviceTitle{
  font-size: 16px;
}
</style>
