package io.smartbrains.techdebtscore.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import io.smartbrains.techdebtscore.model.Dashboard;
import io.smartbrains.techdebtscore.model.Feature;

@ExtendWith(MockitoExtension.class)
class DashboardServiceTest {

    @Mock
    private FeatureService featureService;

    @InjectMocks
    private DashboardService dashboardService;

    private List<Feature> testFeatures;

    @BeforeEach
    void setUp() {
        Feature feature1 = new Feature();
        feature1.setFeatureid(1);
        feature1.setName("Feature 1");
        feature1.setValue(75.0);
        feature1.setWeight(5.0);
        feature1.setStatus(1);

        Feature feature2 = new Feature();
        feature2.setFeatureid(2);
        feature2.setName("Feature 2");
        feature2.setValue(80.0);
        feature2.setWeight(3.0);
        feature2.setStatus(1);

        testFeatures = Arrays.asList(feature1, feature2);
    }

    @Test
    void testGetDashboard() {
        when(featureService.getAllFeatures()).thenReturn(testFeatures);

        Dashboard result = dashboardService.getDashboard();

        assertNotNull(result);
        assertEquals("Default Dashboard", result.getName());
        assertNotNull(result.getFeatures());
        assertEquals(2, ((List<?>) result.getFeatures()).size());
        verify(featureService, times(1)).getAllFeatures();
    }
}
