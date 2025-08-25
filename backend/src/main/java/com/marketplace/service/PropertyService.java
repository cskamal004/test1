package com.marketplace.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marketplace.model.Property;
import com.marketplace.model.User;
import com.marketplace.repository.PropertyRepository;

import java.util.List;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long id) {
        return propertyRepository.findById(id).orElse(null);
    }

    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }

    public List<Property> getPropertiesByUser(User user) {
        return propertyRepository.findByUser(user);
    }

    public List<Property> searchProperties(String location, Double minPrice, Double maxPrice, String propertyType) {
        return propertyRepository.searchProperties(location, minPrice, maxPrice, propertyType);
    }
}