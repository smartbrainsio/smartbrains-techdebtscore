package io.smartbrains.techdebtscore.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.smartbrains.techdebtscore.dto.FeatureDTO;

@SpringBootTest
@AutoConfigureMockMvc
class FeatureControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetDashboard() throws Exception {
        mockMvc.perform(get("/feature/dashboard"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Default Dashboard"))
                .andExpect(jsonPath("$.features").isArray());
    }

    @Test
    void testGetAllFeatures() throws Exception {
        mockMvc.perform(get("/feature/all"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    void testAddNewFeature_Valid() throws Exception {
        FeatureDTO featureDTO = new FeatureDTO();
        featureDTO.setName("Test Feature");
        featureDTO.setValue(75.0);
        featureDTO.setWeight(5.0);
        featureDTO.setStatus(1);

        mockMvc.perform(post("/feature/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(featureDTO)))
                .andExpect(status().isCreated());
    }

    @Test
    void testAddNewFeature_InvalidName() throws Exception {
        FeatureDTO featureDTO = new FeatureDTO();
        featureDTO.setName("");  // Invalid: blank name
        featureDTO.setValue(75.0);
        featureDTO.setWeight(5.0);
        featureDTO.setStatus(1);

        mockMvc.perform(post("/feature/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(featureDTO)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Failed"))
                .andExpect(jsonPath("$.errors.name").exists());
    }

    @Test
    void testAddNewFeature_InvalidValue() throws Exception {
        FeatureDTO featureDTO = new FeatureDTO();
        featureDTO.setName("Test Feature");
        featureDTO.setValue(150.0);  // Invalid: exceeds max 100
        featureDTO.setWeight(5.0);
        featureDTO.setStatus(1);

        mockMvc.perform(post("/feature/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(featureDTO)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Failed"))
                .andExpect(jsonPath("$.errors.value").exists());
    }

    @Test
    void testAddNewFeature_InvalidWeight() throws Exception {
        FeatureDTO featureDTO = new FeatureDTO();
        featureDTO.setName("Test Feature");
        featureDTO.setValue(75.0);
        featureDTO.setWeight(-1.0);  // Invalid: negative weight
        featureDTO.setStatus(1);

        mockMvc.perform(post("/feature/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(featureDTO)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("Validation Failed"))
                .andExpect(jsonPath("$.errors.weight").exists());
    }
}
