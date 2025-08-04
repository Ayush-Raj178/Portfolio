package com.portfolio.service;

import com.portfolio.dto.ContactMessageDTO;

public interface EmailService {
    void sendContactEmail(ContactMessageDTO contactMessage);
}
