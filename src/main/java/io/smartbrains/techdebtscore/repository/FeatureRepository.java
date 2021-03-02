package io.smartbrains.techdebtscore.repository;

import org.springframework.data.repository.CrudRepository;
import io.smartbrains.techdebtscore.model.Feature;

public interface FeatureRepository extends CrudRepository<Feature,Integer> {
    
}
