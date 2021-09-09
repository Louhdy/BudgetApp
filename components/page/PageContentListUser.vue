<template>
  <v-container class="padding-0">
    <v-container>
      <v-layout class="d-flex justify-end" wrap>
        <div wrap around justify-space-around>

          <slot name = "buttons"></slot>

        </div>
      </v-layout>
    </v-container>
    <v-row justify="space-between">
      <v-col cols="12" md="12">
        <slot name = "table"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>
