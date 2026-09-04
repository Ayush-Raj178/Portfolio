package com.portfolio.controller;

import com.portfolio.dto.ApiResponse;
import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.service.ContactMessageService;
import com.portfolio.service.EmailService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSendException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoInteractions;

class ContactControllerTest {

    private ContactMessageService contactMessageService;
    private EmailService emailService;
    private ContactController controller;
    private ContactMessageDTO message;

    @BeforeEach
    void setUp() {
        contactMessageService = mock(ContactMessageService.class);
        emailService = mock(EmailService.class);
        controller = new ContactController(contactMessageService, emailService);

        message = new ContactMessageDTO();
        message.setName("Test Visitor");
        message.setEmail("visitor@example.com");
        message.setSubject("Portfolio contact");
        message.setMessage("A test message");
    }

    @Test
    void returnsSuccessOnlyAfterSaveAndMailCallsComplete() {
        ResponseEntity<ApiResponse> response = controller.submitContactForm(message);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().isSuccess());
        verify(contactMessageService).saveMessage(message);
        verify(emailService).sendContactEmail(message);
    }

    @Test
    void returnsServerErrorWhenMailDeliveryFails() {
        doThrow(new MailSendException("SMTP unavailable"))
            .when(emailService).sendContactEmail(message);

        ResponseEntity<ApiResponse> response = controller.submitContactForm(message);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNotNull(response.getBody());
        assertFalse(response.getBody().isSuccess());
    }

    @Test
    void returnsServerErrorAndDoesNotSendMailWhenSavingFails() {
        doThrow(new IllegalStateException("Database unavailable"))
            .when(contactMessageService).saveMessage(message);

        ResponseEntity<ApiResponse> response = controller.submitContactForm(message);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNotNull(response.getBody());
        assertFalse(response.getBody().isSuccess());
        verifyNoInteractions(emailService);
    }
}
