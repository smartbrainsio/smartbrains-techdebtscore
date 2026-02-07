package io.smartbrains.techdebtscore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import io.smartbrains.techdebtscore.dto.DashboardDTO;
import io.smartbrains.techdebtscore.dto.FeatureDTO;
import io.smartbrains.techdebtscore.model.Dashboard;
import io.smartbrains.techdebtscore.model.Feature;
import io.smartbrains.techdebtscore.service.DashboardService;
import io.smartbrains.techdebtscore.service.FeatureService;
import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/feature")
public class FeatureController {

  @Autowired
  private FeatureService featureService;

  @Autowired
  private DashboardService dashboardService;

  @GetMapping(path="/")
  public String get(Model model) {
      model.addAttribute("feature", new Feature());
      return "feature";
  }

  @GetMapping("/dashboard")
  public @ResponseBody Dashboard dashboard() {
    return dashboardService.getDashboard();
  }

  @PostMapping(path="/add")
  public ResponseEntity<String> addNewFeature(@Valid @RequestBody FeatureDTO featureDTO) {
    Feature feature = new Feature();
    feature.setName(featureDTO.getName());
    feature.setValue(featureDTO.getValue());
    feature.setWeight(featureDTO.getWeight());
    feature.setStatus(featureDTO.getStatus());

    featureService.saveFeature(feature);
    return ResponseEntity.status(HttpStatus.CREATED).body("Feature saved successfully");
  }

  @GetMapping(path="/all")
  public @ResponseBody List<Feature> getAllFeatures() {
    return featureService.getAllFeatures();
  }
}