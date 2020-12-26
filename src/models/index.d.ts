import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class OrganizationScore {
  readonly id: string;
  readonly organizationName?: string;
  readonly createDate?: string;
  readonly scoreCode?: number;
  readonly scoreModularity?: number;
  readonly scoreCicd?: number;
  readonly scoreEosl?: number;
  readonly scoreDocs?: number;
  readonly scoreHomogenity?: number;
  readonly scoreComplexity?: number;
  readonly scoreTests?: number;
  constructor(init: ModelInit<OrganizationScore>);
  static copyOf(source: OrganizationScore, mutator: (draft: MutableModel<OrganizationScore>) => MutableModel<OrganizationScore> | void): OrganizationScore;
}