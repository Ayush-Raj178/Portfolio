package com.portfolio.service.impl;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.mapper.ContactMessageMapper;
import com.portfolio.model.ContactMessage;
import com.portfolio.repository.ContactMessageRepository;
import com.portfolio.service.ContactMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContactMessageServiceImpl implements ContactMessageService {

    private final ContactMessageRepository contactMessageRepository;
    private final ContactMessageMapper contactMessageMapper;

    @Override
    @Transactional
    public void saveMessage(ContactMessageDTO messageDTO) {
        log.debug("Saving contact message from: {}", messageDTO.getEmail());
        try {
            ContactMessage message = contactMessageMapper.toEntity(messageDTO);
            contactMessageRepository.save(message);
            log.info("Contact message saved successfully from: {}", messageDTO.getEmail());
        } catch (Exception e) {
            log.error("Error saving contact message: {}", e.getMessage(), e);
            throw e;
        }
    }
}
