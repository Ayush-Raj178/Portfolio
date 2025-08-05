package com.portfolio.controller;

import com.portfolio.model.ResumeDownload;
import com.portfolio.repository.ResumeDownloadRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;

@Slf4j
@RestController
@CrossOrigin(origins = {"https://portfolio-orcin-zeta-43.vercel.app", "http://localhost:3000"})
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private static final String RESUME_FILENAME = "Ayush-Raj-Resume.pdf";
    private static final String RESOURCE_PATH = "static/" + RESUME_FILENAME;
    
    private final ResumeDownloadRepository resumeDownloadRepository;

    @GetMapping(
        value = "/download",
        produces = MediaType.APPLICATION_OCTET_STREAM_VALUE
    )
    public ResponseEntity<byte[]> downloadResume() throws IOException {
        log.info("Attempting to download resume from: {}", RESOURCE_PATH);
        
        // Load the resume file
        try (InputStream inputStream = new ClassPathResource(RESOURCE_PATH).getInputStream()) {
            byte[] fileContent = inputStream.readAllBytes();
            
            // Save download record
            try {
                resumeDownloadRepository.save(new ResumeDownload());
                log.info("Resume download recorded at: {}", LocalDateTime.now());
            } catch (Exception e) {
                log.warn("Failed to save download record: {}", e.getMessage());
                // Continue with the download even if saving the record fails
            }
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDisposition(
                ContentDisposition.attachment()
                    .filename(RESUME_FILENAME)
                    .build()
            );
            headers.setCacheControl("no-cache, no-store, must-revalidate");
            headers.setPragma("no-cache");
            headers.setExpires(0);
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
