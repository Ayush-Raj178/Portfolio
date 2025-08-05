package com.portfolio.controller;

import com.portfolio.model.ResumeDownload;
import com.portfolio.repository.ResumeDownloadRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

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

        byte[] fileContent;
        try (InputStream inputStream = new ClassPathResource(RESOURCE_PATH).getInputStream()) {
            fileContent = inputStream.readAllBytes();

            try {
                resumeDownloadRepository.save(new ResumeDownload());
                log.info("Resume download recorded at: {}", LocalDateTime.now());
            } catch (Exception e) {
                log.warn("Failed to save download record: {}", e.getMessage());
            }
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
                .headers(headers)
                .body(fileContent);
    }

    @GetMapping("/download-count")
    public ResponseEntity<Map<String, Long>> getDownloadCount() {
        long count = resumeDownloadRepository.count();
        Map<String, Long> response = new HashMap<>();
        response.put("downloadCount", count);

        return ResponseEntity.ok(response);
    }
}
