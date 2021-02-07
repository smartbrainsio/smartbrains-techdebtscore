import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Organization {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly createDate?: string;
  readonly OrganizationScores?: (OrganizationScore | null)[];
  constructor(init: ModelInit<Organization>);
  static copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

export declare class OrganizationScore {
  readonly id: string;
  readonly orgScoreDescription?: string;
  readonly createDate?: string;
  readonly orgScore?: number;
  readonly ScoreFeatures?: (ScoreFeature | null)[];
  readonly organizationID: string;
  constructor(init: ModelInit<OrganizationScore>);
  static copyOf(source: OrganizationScore, mutator: (draft: MutableModel<OrganizationScore>) => MutableModel<OrganizationScore> | void): OrganizationScore;
}

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

export declare class Feature {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly weight?: number;
  constructor(init: ModelInit<Feature>);
  static copyOf(source: Feature, mutator: (draft: MutableModel<Feature>) => MutableModel<Feature> | void): Feature;
}