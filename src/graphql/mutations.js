/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createScoreFeature = /* GraphQL */ `
  mutation CreateScoreFeature(
    $input: CreateScoreFeatureInput!
    $condition: ModelScoreFeatureConditionInput
  ) {
    createScoreFeature(input: $input, condition: $condition) {
      id
      organizationScoreid
      featureName
      featureValue
      featureWeight
      organizationscoreID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateScoreFeature = /* GraphQL */ `
  mutation UpdateScoreFeature(
    $input: UpdateScoreFeatureInput!
    $condition: ModelScoreFeatureConditionInput
  ) {
    updateScoreFeature(input: $input, condition: $condition) {
      id
      organizationScoreid
      featureName
      featureValue
      featureWeight
      organizationscoreID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteScoreFeature = /* GraphQL */ `
  mutation DeleteScoreFeature(
    $input: DeleteScoreFeatureInput!
    $condition: ModelScoreFeatureConditionInput
  ) {
    deleteScoreFeature(input: $input, condition: $condition) {
      id
      organizationScoreid
      featureName
      featureValue
      featureWeight
      organizationscoreID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createOrganizationScore = /* GraphQL */ `
  mutation CreateOrganizationScore(
    $input: CreateOrganizationScoreInput!
    $condition: ModelOrganizationScoreConditionInput
  ) {
    createOrganizationScore(input: $input, condition: $condition) {
      id
      organizationName
      createDate
      orgScore
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ScoreFeatures {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateOrganizationScore = /* GraphQL */ `
  mutation UpdateOrganizationScore(
    $input: UpdateOrganizationScoreInput!
    $condition: ModelOrganizationScoreConditionInput
  ) {
    updateOrganizationScore(input: $input, condition: $condition) {
      id
      organizationName
      createDate
      orgScore
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ScoreFeatures {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteOrganizationScore = /* GraphQL */ `
  mutation DeleteOrganizationScore(
    $input: DeleteOrganizationScoreInput!
    $condition: ModelOrganizationScoreConditionInput
  ) {
    deleteOrganizationScore(input: $input, condition: $condition) {
      id
      organizationName
      createDate
      orgScore
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ScoreFeatures {
        nextToken
        startedAt
      }
    }
  }
`;
export const createFeature = /* GraphQL */ `
  mutation CreateFeature(
    $input: CreateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    createFeature(input: $input, condition: $condition) {
      id
      name
      description
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFeature = /* GraphQL */ `
  mutation UpdateFeature(
    $input: UpdateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    updateFeature(input: $input, condition: $condition) {
      id
      name
      description
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFeature = /* GraphQL */ `
  mutation DeleteFeature(
    $input: DeleteFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    deleteFeature(input: $input, condition: $condition) {
      id
      name
      description
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
