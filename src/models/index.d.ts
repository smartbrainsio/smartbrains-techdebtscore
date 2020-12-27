import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class OrganizationScore {
  readonly id: string;
  readonly organizationName?: string;
  readonly createDate?: string;
  readonly orgScore?: number;
  constructor(init: ModelInit<OrganizationScore>);
  static copyOf(source: OrganizationScore, mutator: (draft: MutableModel<OrganizationScore>) => MutableModel<OrganizationScore> | void): OrganizationScore;
}