package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

    public Country getCountry(String code) {
        List<Country> countryList = (List<Country>) context.getBean("countryList");
        return countryList.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

    public List<Country> getAllCountries() {
        return (List<Country>) context.getBean("countryList");
    }
}
