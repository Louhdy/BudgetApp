export const getInstanMessagePrice = (amountMessages) => {
  if (amountMessages === null) return null;
  if (amountMessages < 5000) return amountMessages*0.055;
  if ((amountMessages <= 10000) && (amountMessages > 5000)) return amountMessages*0.050;
  if ((amountMessages <= 25000) && (amountMessages > 10000)) return amountMessages*0.047;
  if ((amountMessages <= 50000) && (amountMessages > 25000)) return amountMessages*0.045;
  if ((amountMessages <= 100000) && (amountMessages > 50000)) return amountMessages*0.042;
  if ((amountMessages <= 250000) && (amountMessages > 100000)) return amountMessages*0.040;
  if ((amountMessages <= 500000) && (amountMessages > 250000)) return amountMessages*0.037;
  if ((amountMessages <= 1000000) && (amountMessages > 500000)) return amountMessages*0.036;
};
export const getProductivityAppsPrice = (amountUsers, serviceType, trackingType) => {
  if (serviceType === 'APP + TRACKING') {
    if (trackingType === 'TRACKING FULL') {
      return amountUsers*30
    } else return amountUsers*20
  } else if (trackingType === 'TRACKING FULL') {
      return amountUsers*18
    } else return amountUsers*15

}
export const getLocatorPrice = (amountUsers) => {
  if (amountUsers === null) return null;
  if (amountUsers <= 29) return amountUsers*22;
  if ((amountUsers <= 99) && (amountUsers > 29)) return amountUsers*15;
  if ((amountUsers <= 199) && (amountUsers > 99)) return amountUsers*10;
  if (amountUsers > 199) return amountUsers*8;
}
export const getPriceFormat = (price) => {
  return new Intl.NumberFormat('en-US').format(price);
}

