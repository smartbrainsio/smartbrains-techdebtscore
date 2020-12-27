/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getScoreFeature = /* GraphQL */ `
  query GetScoreFeature($id: ID!) {
    getScoreFeature(id: $id) {
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
export const listScoreFeatures = /* GraphQL */ `
  query ListScoreFeatures(
    $filter: ModelScoreFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScoreFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncScoreFeatures = /* GraphQL */ `
  query SyncScoreFeatures(
    $filter: ModelScoreFeatureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScoreFeatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrganizationScore = /* GraphQL */ `
  query GetOrganizationScore($id: ID!) {
    getOrganizationScore(id: $id) {
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
export const listOrganizationScores = /* GraphQL */ `
  query ListOrganizationScores(
    $filter: ModelOrganizationScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationScores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationName
        createDate
        orgScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizationScores = /* GraphQL */ `
  query SyncOrganizationScores(
    $filter: ModelOrganizationScoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizationScores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        organizationName
        createDate
        orgScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFeature = /* GraphQL */ `
  query GetFeature($id: ID!) {
    getFeature(id: $id) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFeatures = /* GraphQL */ `
  query ListFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFeatures = /* GraphQL */ `
  query SyncFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
