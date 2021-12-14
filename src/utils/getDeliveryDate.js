import moment from 'moment';

const getDeliveryDate = () => {
  const deliveryDate = 6;

  return moment().isoWeekday(deliveryDate);
}

export default getDeliveryDate;
