package io.smartbrains.techdebtscore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.smartbrains.techdebtscore.model.Feature;
import io.smartbrains.techdebtscore.repository.FeatureRepository;

@Service
@Transactional
public class FeatureService {

    @Autowired
    private FeatureRepository featureRepository;

    public List<Feature> getAllFeatures() {
        return (List<Feature>) featureRepository.findAll();
    }

    public Optional<Feature> getFeatureById(Integer id) {
        return featureRepository.findById(id);
    }

    public Feature saveFeature(Feature feature) {
        return featureRepository.save(feature);
    }

    public void deleteFeature(Integer id) {
        featureRepository.deleteById(id);
    }
}
