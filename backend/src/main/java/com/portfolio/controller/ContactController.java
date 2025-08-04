package com.portfolio.controller;

import com.portfolio.dto.ApiResponse;
import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.service.ContactMessageService;
import com.portfolio.service.EmailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "${cors.allowed-origins}")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMessageService contactMessageService;
    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<ApiResponse> submitContactForm(
            @Valid @RequestBody ContactMessageDTO contactMessageDTO) {
        try {
            // Save to database
            contactMessageService.saveMessage(contactMessageDTO);
            
            // Send email
            emailService.sendContactEmail(contactMessageDTO);
            
            // Return success response
            return ResponseEntity.ok(
                new ApiResponse(true, "Message sent successfully.")
            );
            
        } catch (MailException e) {
            log.error("Failed to send email: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse(false, "Failed to send message. Please try again later."));
                
        } catch (Exception e) {
            log.error("Unexpected error: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse(false, "An unexpected error occurred. Please try again later."));
        }
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        return ResponseEntity.badRequest()
            .body(new ApiResponse(false, "Validation failed", errors));
    }
}
