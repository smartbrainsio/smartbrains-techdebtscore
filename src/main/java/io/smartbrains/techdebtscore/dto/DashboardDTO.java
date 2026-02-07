package io.smartbrains.techdebtscore.dto;

import java.util.List;

import io.smartbrains.techdebtscore.model.Feature;

public class DashboardDTO {

    private String name;
    private List<Feature> features;

    public DashboardDTO() {
    }

    public DashboardDTO(String name, List<Feature> features) {
        this.name = name;
        this.features = features;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(List<Feature> features) {
        this.features = features;
    }
}
