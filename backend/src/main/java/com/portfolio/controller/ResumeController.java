package com.portfolio.controller;




import com.portfolio.model.ResumeDownload;
import com.portfolio.repository.ResumeDownloadRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private static final String RESUME_FILENAME = "Ayush-Raj-Resume.pdf";
    private static final String RESOURCE_PATH = "static/" + RESUME_FILENAME;
    
    private final ResumeDownloadRepository resumeDownloadRepository;

    @GetMapping("/download")
    public ResponseEntity<Resource> downloadResume() throws IOException {
        // Save download record
        resumeDownloadRepository.save(new ResumeDownload());
        log.info("Resume downloaded at: {}", LocalDateTime.now());
        
        // Load the resume file
        Resource resource = new ClassPathResource(RESOURCE_PATH);
        
        if (!resource.exists()) {
            log.error("Resume file not found at: {}", RESOURCE_PATH);
            return ResponseEntity.notFound().build();
        }
        
        // Set headers for file download
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, 
                        "attachment; filename=\"" + RESUME_FILENAME + "\"")
                .body(resource);
    }
    
    @GetMapping("/download-count")
    public ResponseEntity<Map<String, Long>> getDownloadCount() {
        long count = resumeDownloadRepository.count();
        Map<String, Long> response = new HashMap<>();
        response.put("downloadCount", count);
        
        return ResponseEntity.ok(response);
    }
}
