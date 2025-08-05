package com.portfolio.mapper;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.model.ContactMessage;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-08-05T11:29:53+0530",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.42.50.v20250729-0351, environment: Java 21.0.8 (Eclipse Adoptium)"
)
@Component
public class ContactMessageMapperImpl implements ContactMessageMapper {

    @Override
    public ContactMessage toEntity(ContactMessageDTO dto) {
        if ( dto == null ) {
            return null;
        }

        ContactMessage contactMessage = new ContactMessage();

        contactMessage.setEmail( dto.getEmail() );
        contactMessage.setMessage( dto.getMessage() );
        contactMessage.setName( dto.getName() );
        contactMessage.setSubject( dto.getSubject() );

        contactMessage.setTimestamp( java.time.LocalDateTime.now() );

        return contactMessage;
    }

    @Override
    public ContactMessageDTO toDto(ContactMessage entity) {
        if ( entity == null ) {
            return null;
        }

        ContactMessageDTO contactMessageDTO = new ContactMessageDTO();

        contactMessageDTO.setEmail( entity.getEmail() );
        contactMessageDTO.setId( entity.getId() );
        contactMessageDTO.setMessage( entity.getMessage() );
        contactMessageDTO.setName( entity.getName() );
        contactMessageDTO.setSubject( entity.getSubject() );
        contactMessageDTO.setTimestamp( entity.getTimestamp() );

        return contactMessageDTO;
    }
}
