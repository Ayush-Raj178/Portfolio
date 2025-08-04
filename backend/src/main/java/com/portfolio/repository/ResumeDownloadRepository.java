package com.portfolio.repository;

import com.portfolio.model.ResumeDownload;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResumeDownloadRepository extends JpaRepository<ResumeDownload, Long> {
    // Custom query methods can be added here if needed
}
