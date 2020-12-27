// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ScoreFeature, OrganizationScore } = initSchema(schema);

export {
  ScoreFeature,
  OrganizationScore
};