// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Organization, OrganizationScore, ScoreFeature, Feature } = initSchema(schema);

export {
  Organization,
  OrganizationScore,
  ScoreFeature,
  Feature
};