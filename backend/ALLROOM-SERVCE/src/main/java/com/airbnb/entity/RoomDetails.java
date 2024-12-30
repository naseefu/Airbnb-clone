package com.airbnb.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "roomDetails")
public class RoomDetails {

    @Id
    private String id;

    private String picture_url;

    @Field(value = "property_type")
    private String propertyType;

    private String city;

    private String country;

    private String name;

    private String xl_picture_url;

    private String thumbnail_url;

    private String medium_url;

    private String price;

    private Double reviews_per_month;

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public Double getReviews_per_month() {
        return reviews_per_month;
    }

    public void setReviews_per_month(Double reviews_per_month) {
        this.reviews_per_month = reviews_per_month;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPicture_url() {
        return picture_url;
    }

    public void setPicture_url(String picture_url) {
        this.picture_url = picture_url;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getXl_picture_url() {
        return xl_picture_url;
    }

    public void setXl_picture_url(String xl_picture_url) {
        this.xl_picture_url = xl_picture_url;
    }

    public String getThumbnail_url() {
        return thumbnail_url;
    }

    public void setThumbnail_url(String thumbnail_url) {
        this.thumbnail_url = thumbnail_url;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getMedium_url() {
        return medium_url;
    }

    public void setMedium_url(String medium_url) {
        this.medium_url = medium_url;
    }
}
