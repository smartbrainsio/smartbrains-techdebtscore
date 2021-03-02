package io.smartbrains.techdebtscore.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import io.smartbrains.techdebtscore.model.Dashboard;
import io.smartbrains.techdebtscore.model.Feature;
import io.smartbrains.techdebtscore.repository.FeatureRepository;

@Controller
@RequestMapping(path="/feature")
public class FeatureController {
  @Autowired 
  private FeatureRepository featureRepository;

  @GetMapping(path="/")
  public String get(Model model) {
      model.addAttribute("feature", new Feature());
      return "feature";
  }

  @GetMapping("/dashboard")
  public @ResponseBody Dashboard dashboard() {

    Dashboard dashboard = new Dashboard();
    dashboard.setName("Default Dashboard");

    //Get the score features
    Iterable<Feature> allFeatures = featureRepository.findAll();
    dashboard.setFeatures(allFeatures);

    //Get the score history data

    //Get the current score data

    //model.put("scoreHistoryData", "This is the score history data");
    //model.put("iModelAllFeatures", allFeatures);
    //model.put("currentScoreData", "This is the current score data");

    return dashboard;
  }

  @PostMapping(path="/add")
  public @ResponseBody String addNewFeature (@RequestParam String name,
      @RequestParam String value, 
      @RequestParam String weight,
      @RequestParam String status) {

    Feature f = new Feature();
    f.setName(name);
    f.setValue(value);
    f.setWeight(weight);
    f.setStatus(status);

    featureRepository.save(f);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Feature> getAllFeatures() {
    return featureRepository.findAll();
  }
}