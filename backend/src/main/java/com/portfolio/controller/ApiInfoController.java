package com.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiInfoController {

    @GetMapping
    public Map<String, String> getApiInfo() {
        Map<String, String> apiInfo = new LinkedHashMap<>();
        apiInfo.put("message", "Welcome to Portfolio API");
        apiInfo.put("version", "1.0.0");
        apiInfo.put("endpoints", "");
        apiInfo.put("POST /api/contact", "Submit contact form");
        apiInfo.put("GET /api/resume/download", "Download resume");
        apiInfo.put("GET /api/actuator/health", "Health check endpoint");
        return apiInfo;
    }
}
