package io.smartbrains.techdebtscore.model;

import io.smartbrains.techdebtscore.model.Feature;

public class Dashboard {

    private String name;
    private Iterable<Feature> features;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Iterable<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(Iterable<Feature> features) {
        this.features = features;
    }

    
    
}
