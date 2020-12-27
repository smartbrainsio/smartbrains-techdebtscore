import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ScoreFeature {
  readonly id: string;
  readonly organizationScoreid?: string;
  readonly featureName?: string;
  readonly featureValue?: number;
  readonly featureWeight?: number;
  readonly organizationscoreID: string;
  constructor(init: ModelInit<ScoreFeature>);
  static copyOf(source: ScoreFeature, mutator: (draft: MutableModel<ScoreFeature>) => MutableModel<ScoreFeature> | void): ScoreFeature;
}

export declare class OrganizationScore {
  readonly id: string;
  readonly organizationName?: string;
  readonly createDate?: string;
  readonly orgScore?: number;
  readonly ScoreFeatures?: (ScoreFeature | null)[];
  constructor(init: ModelInit<OrganizationScore>);
  static copyOf(source: OrganizationScore, mutator: (draft: MutableModel<OrganizationScore>) => MutableModel<OrganizationScore> | void): OrganizationScore;
}