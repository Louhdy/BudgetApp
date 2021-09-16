export const amountUserRules = [
  v => !!v || 'Debe de registrar una cantidad de usuarios',
  v => v === '' || (v && v > 9) || 'Debe de registrar un mínimo de 10 usuarios',
];
export const amountMessagesRules = [
  v => !!v || 'Debe de registrar una cantidad de mensajes',
  v => v === '' || (v && v > 2999) || 'Debe de registrar un mínimo de 3,000 mensajes',
  v => v === '' || (v && v < 1000000) || 'Debe de registrar un menor de 1,000.000 mensajes',
  v => v === '' || (v && (v%1000) === 0) || 'Debe de registrar un mínimo de 1000 mensajes adicionales',
];


