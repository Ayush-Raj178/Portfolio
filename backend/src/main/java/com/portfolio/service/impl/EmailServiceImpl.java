package com.portfolio.service.impl;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
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
    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${app.contact.email}")
    private String toEmail;
    private static final String SUBJECT = "New Contact Form Submission";

    @Async
    @Override
    public void sendContactEmail(ContactMessageDTO contactMessage) {
        log.info("Sending contact email to: {} from: {}", toEmail, contactMessage.getEmail());
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            
            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
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
            log.info("Contact email sent successfully to: {}", toEmail);
        } catch (MessagingException e) {
            log.error("Failed to send contact email: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to send email", e);
        }
    }
}
