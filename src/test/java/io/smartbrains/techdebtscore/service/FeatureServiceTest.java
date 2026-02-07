package io.smartbrains.techdebtscore.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import io.smartbrains.techdebtscore.model.Feature;
import io.smartbrains.techdebtscore.repository.FeatureRepository;

@ExtendWith(MockitoExtension.class)
class FeatureServiceTest {

    @Mock
    private FeatureRepository featureRepository;

    @InjectMocks
    private FeatureService featureService;

    private Feature testFeature;

    @BeforeEach
    void setUp() {
        testFeature = new Feature();
        testFeature.setFeatureid(1);
        testFeature.setName("Test Feature");
        testFeature.setValue(75.0);
        testFeature.setWeight(5.0);
        testFeature.setStatus(1);
    }

    @Test
    void testGetAllFeatures() {
        List<Feature> features = Arrays.asList(testFeature);
        when(featureRepository.findAll()).thenReturn(features);

        List<Feature> result = featureService.getAllFeatures();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Test Feature", result.get(0).getName());
        verify(featureRepository, times(1)).findAll();
    }

    @Test
    void testGetFeatureById() {
        when(featureRepository.findById(1)).thenReturn(Optional.of(testFeature));

        Optional<Feature> result = featureService.getFeatureById(1);

        assertTrue(result.isPresent());
        assertEquals("Test Feature", result.get().getName());
        verify(featureRepository, times(1)).findById(1);
    }

    @Test
    void testSaveFeature() {
        when(featureRepository.save(any(Feature.class))).thenReturn(testFeature);

        Feature result = featureService.saveFeature(testFeature);

        assertNotNull(result);
        assertEquals("Test Feature", result.getName());
        verify(featureRepository, times(1)).save(testFeature);
    }

    @Test
    void testDeleteFeature() {
        featureService.deleteFeature(1);
        verify(featureRepository, times(1)).deleteById(1);
    }
}
