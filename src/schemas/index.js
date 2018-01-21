import { schema } from 'normalizr';
import { MONTHS } from '../utils/dates';

export const episodesSchema = new schema.Entity(
  'episodes',
  {},
  { idAttribute: value => `${MONTHS[value.month - 1][0]}-${value.day}` },
);

export default {
  episodesSchema,
};
