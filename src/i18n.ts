import i18next from 'i18next';

i18next.init({
  lng: 'pl',
  resources: {
    pl: {
      translation: {
        priceWithCurrency: '{{val, currency(PLN)}}'
      }
    }
  }
});