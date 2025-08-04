package com.portfolio.service.impl;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;
    private static final String FROM_EMAIL = "your-email@gmail.com";
    private static final String TO_EMAIL = "ayushraj12121212@gmail.com";
    private static final String SUBJECT = "New Contact Form Submission";

    @Async
    @Override
    public void sendContactEmail(ContactMessageDTO contactMessage) {
        log.info("Sending contact email to: {} from: {}", TO_EMAIL, contactMessage.getEmail());
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            
            helper.setFrom(FROM_EMAIL);
            helper.setTo(TO_EMAIL);
            helper.setSubject(SUBJECT);
            
            // Process HTML template
            Context context = new Context();
            context.setVariable("name", contactMessage.getName());
            context.setVariable("email", contactMessage.getEmail());
            context.setVariable("subject", contactMessage.getSubject());
            context.setVariable("message", contactMessage.getMessage());
            
            String htmlContent = templateEngine.process("emails/contact-email", context);
            
            helper.setText(htmlContent, true);
            
            mailSender.send(message);
            log.info("Contact email sent successfully to: {}", TO_EMAIL);
        } catch (MessagingException e) {
            log.error("Failed to send contact email: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to send email", e);
        }
    }
}
