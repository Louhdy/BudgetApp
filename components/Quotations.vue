<template>
  <v-container>
    <page-title>
      Cotizaciones
    </page-title>
    <v-row>
      <v-col>
        <search-box search-text="Ingrese el Cliente o Tipo de Servicio" :search="search" />
      </v-col>
      <v-spacer/>
      <v-col md="auto">
        <option-button class="mt-2" button-name="Nueva Cotización" icon="mdi-plus-thick" />
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="12" md="12">
        <search-table
          table-title="Pacientes"
          :full-name="true"
          :headers="headers"
          :items="quotations"
          :search="search"
          search-text="Busca por nombre o DNI del paciente"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import searchBox from '~/components/search/SearchBox';
import PageTitle from '~/components/page/PageTitle';
import SearchTable from '~/components/dataTable/SearchTable';
import OptionButton from "~/components/dataTable/OptionButton";


export default {
  name: 'Quotations',
  components: {
    OptionButton,
    SearchTable,
    searchBox,
    PageTitle,
  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Cliente (Representante)', align: 'start', value: 'clientName', filterable: true },
        { text: 'RUC', value: 'ruc' },
        { text: 'Fecha de generación', value: 'date', width: '18%'},
        { text: 'Tipo de servicio', value: 'serviceType', width: '25%' },
        { text: 'Monto (Soles)', value: 'amount' },
      ],
      quotations: [
        { clientName: 'Rosa de Martis - Unicon', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: 'Rosa de Martis - Unicon', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: 'Rosa de Martis - Unicon', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: 'Rosa de Martis - Unicon', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: 'Rosa de Martis - Unicon', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },

      ],
    };
  },
  methods: {

  },
};
</script>

