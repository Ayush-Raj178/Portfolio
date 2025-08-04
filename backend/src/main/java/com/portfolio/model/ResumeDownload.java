package com.portfolio.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "resume_downloads")
public class ResumeDownload {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "downloaded_at", nullable = false, updatable = false)
    private LocalDateTime downloadedAt = LocalDateTime.now();
}
