package com.portfolio.mapper;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.model.ContactMessage;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-08-05T13:47:12+0530",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.14 (Eclipse Adoptium)"
)
@Component
public class ContactMessageMapperImpl implements ContactMessageMapper {

    @Override
    public ContactMessage toEntity(ContactMessageDTO dto) {
        if ( dto == null ) {
            return null;
        }

        ContactMessage contactMessage = new ContactMessage();

        contactMessage.setName( dto.getName() );
        contactMessage.setEmail( dto.getEmail() );
        contactMessage.setSubject( dto.getSubject() );
        contactMessage.setMessage( dto.getMessage() );

        contactMessage.setTimestamp( java.time.LocalDateTime.now() );

        return contactMessage;
    }

    @Override
    public ContactMessageDTO toDto(ContactMessage entity) {
        if ( entity == null ) {
            return null;
        }

        ContactMessageDTO contactMessageDTO = new ContactMessageDTO();

        contactMessageDTO.setId( entity.getId() );
        contactMessageDTO.setName( entity.getName() );
        contactMessageDTO.setEmail( entity.getEmail() );
        contactMessageDTO.setSubject( entity.getSubject() );
        contactMessageDTO.setMessage( entity.getMessage() );
        contactMessageDTO.setTimestamp( entity.getTimestamp() );

        return contactMessageDTO;
    }
}
