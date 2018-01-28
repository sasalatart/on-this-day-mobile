import { schema } from 'normalizr';
import { MONTHS } from '../utils/dates';

export const datesSchema = new schema.Entity(
  'dates',
  {},
  { idAttribute: value => `${MONTHS[value.month - 1][0]}-${value.day}` },
);

export default {
  datesSchema,
};
