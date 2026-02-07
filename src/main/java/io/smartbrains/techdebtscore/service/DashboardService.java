package io.smartbrains.techdebtscore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.smartbrains.techdebtscore.model.Dashboard;
import io.smartbrains.techdebtscore.model.Feature;

@Service
@Transactional(readOnly = true)
public class DashboardService {

    @Autowired
    private FeatureService featureService;

    public Dashboard getDashboard() {
        Dashboard dashboard = new Dashboard();
        dashboard.setName("Default Dashboard");

        List<Feature> allFeatures = featureService.getAllFeatures();
        dashboard.setFeatures(allFeatures);

        return dashboard;
    }
}
