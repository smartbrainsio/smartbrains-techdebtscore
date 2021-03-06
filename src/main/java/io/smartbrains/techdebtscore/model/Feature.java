package io.smartbrains.techdebtscore.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
        if (v != null) {
            try {
                this.value = new Double(v);
            } catch (Exception e) {
                this.value = new Double("0");
            }
        } else {
            this.value = new Double("0");
        }
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public void setWeight(String w) {
        if (w != null) {
            try {
                this.weight = new Double(w);
            } catch (Exception e) {
                this.weight = new Double("0");
            }
        } else {
            this.weight = new Double("0");
        }
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
   
    public void setStatus(String s) {
        if (s != null) {
            try {
                this.status = new Integer(s);
            } catch (Exception e) {
                this.status = new Integer("0");
            }
        } else {
            this.status = new Integer("0");
        }
    }
    
}