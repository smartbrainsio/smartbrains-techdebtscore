// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrganizationScore } = initSchema(schema);

export {
  OrganizationScore
};