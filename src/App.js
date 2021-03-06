import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import logo from './logo.svg';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { listOrganizations, listOrganizationScores, listFeatures, listScoreFeatures } from './graphql/queries';
import { createOrganization as createOrganizationScoreMutation, createOrganizationScore as createOrganizationScoreMutation, deleteOrganizationScore as deleteOrganizationScoreMutation } from './graphql/mutations';

const initialFormState = { organizationName: '', orgScore: '', scoreFeatureValues: [] }

function App() {

  const [organizations, setOrganizations] = useState([]);
  const [organizationScores, setOrganizationScores] = useState([]);
  const [scoreFeatures, setScoreFeatures] = useState([]);
  const [features, setFeatures] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchOrganizations();
    fetchOrganizationScores();
    fetchScoreFeatures();
    fetchFeatures();
  }, []);

  async function fetchOrganizations() {
    const apiData = await API.graphql({ query: listOrganizations });
    setOrganizations(apiData.data.listOrganizations.items);
  }

  async function fetchOrganizationScores() {
    const apiData = await API.graphql({ query: listOrganizationScores });
    setOrganizationScores(apiData.data.listOrganizationScores.items);
  }

  async function fetchScoreFeatures() {
    const apiData = await API.graphql({ query: listScoreFeatures });
    setScoreFeatures(apiData.data.listScoreFeatures.items);
  }

  async function fetchFeatures() {
    const apiData = await API.graphql({ query: listFeatures });
    setFeatures(apiData.data.listFeatures.items);
  }

  async function createOrganizationScore() {
    if (!formData.organizationName || !formData.orgScore) return;
    await API.graphql({ query: createOrganizationScoreMutation, variables: { input: formData } });
    setOrganizationScores([ ...organizationScores, formData ]);
    setFormData(initialFormState);
  }

  async function deleteOrganizationScore({ id }) {
    const newOrganizationScoresArray = organizationScores.filter(organizationScore => organizationScores.id !== id);
    setOrganizationScores(newOrganizationScoresArray);
    await API.graphql({ query: deleteOrganizationScoreMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to SmartBrains.io Tech Debt Scores App!</h1>
      </header>
      <input
        onChange={e => setFormData({ ...formData, 'organizationName': e.target.value})}
        placeholder="Organization name"
        value={formData.organizationName}
      />
      {
        features.map(feature => (
          <input
            onChange={e => setFormData({ ...formData, name: e.target.value})}
            placeholder={feature.name}
            value={formData.scoreFeatureValues}
          />
          ))
      }
      <input
        onChange={e => setFormData({ ...formData, 'orgScore': e.target.value})}
        placeholder="Score"
        value={formData.orgScore}
      />
      <button onClick={createOrganizationScore}>Create Score</button>
      <div style={{marginBottom: 30}}>
        {
          organizationScores.map(organizationScore => (
            <div key={organization.id || organization.organizationName}>
              <h2>{organization.organizationName}</h2>
              <p>{organizationScore.orgScore}</p>
              <button onClick={() => deleteOrganizationScore(organizationScore)}>Delete Score</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
