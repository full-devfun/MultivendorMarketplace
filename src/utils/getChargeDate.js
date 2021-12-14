import moment from 'moment';

const getChargeDate = () => {
  const chargeDate = 5;

  return moment().isoWeekday(chargeDate);
}

export default getChargeDate;
