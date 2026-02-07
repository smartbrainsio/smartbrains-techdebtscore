package io.smartbrains.techdebtscore.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class FeatureDTO {

    @NotBlank(message = "Feature name is required")
    private String name;

    @NotNull(message = "Value is required")
    @Min(value = 0, message = "Value must be at least 0")
    @Max(value = 100, message = "Value must not exceed 100")
    private Double value;

    @NotNull(message = "Weight is required")
    @Min(value = 0, message = "Weight must be at least 0")
    @Max(value = 10, message = "Weight must not exceed 10")
    private Double weight;

    @NotNull(message = "Status is required")
    @Min(value = 0, message = "Status must be at least 0")
    @Max(value = 1, message = "Status must not exceed 1")
    private Integer status;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
