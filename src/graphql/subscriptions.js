/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateScoreFeature = /* GraphQL */ `
  subscription OnCreateScoreFeature {
    onCreateScoreFeature {
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
export const onUpdateScoreFeature = /* GraphQL */ `
  subscription OnUpdateScoreFeature {
    onUpdateScoreFeature {
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
export const onDeleteScoreFeature = /* GraphQL */ `
  subscription OnDeleteScoreFeature {
    onDeleteScoreFeature {
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
export const onCreateOrganizationScore = /* GraphQL */ `
  subscription OnCreateOrganizationScore {
    onCreateOrganizationScore {
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
export const onUpdateOrganizationScore = /* GraphQL */ `
  subscription OnUpdateOrganizationScore {
    onUpdateOrganizationScore {
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
export const onDeleteOrganizationScore = /* GraphQL */ `
  subscription OnDeleteOrganizationScore {
    onDeleteOrganizationScore {
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
export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature {
    onCreateFeature {
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
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature {
    onUpdateFeature {
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
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature {
    onDeleteFeature {
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
