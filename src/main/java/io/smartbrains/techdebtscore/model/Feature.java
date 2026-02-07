package io.smartbrains.techdebtscore.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Feature {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer featureid;
    private String name;  
    private Double value;
    private Double weight;
    private Integer status;

    public Integer getFeatureid() {
        return featureid;
    }

    public void setFeatureid(Integer featureid) {
        this.featureid = featureid;
    }

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

    public void setValue(String v) {
        if (v != null && !v.trim().isEmpty()) {
            try {
                this.value = Double.valueOf(v);
            } catch (NumberFormatException e) {
                this.value = 0.0;
            }
        } else {
            this.value = 0.0;
        }
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public void setWeight(String w) {
        if (w != null && !w.trim().isEmpty()) {
            try {
                this.weight = Double.valueOf(w);
            } catch (NumberFormatException e) {
                this.weight = 0.0;
            }
        } else {
            this.weight = 0.0;
        }
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
   
    public void setStatus(String s) {
        if (s != null && !s.trim().isEmpty()) {
            try {
                this.status = Integer.valueOf(s);
            } catch (NumberFormatException e) {
                this.status = 0;
            }
        } else {
            this.status = 0;
        }
    }
    
}