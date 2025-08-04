package com.portfolio.mapper;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.model.ContactMessage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ContactMessageMapper {
    ContactMessageMapper INSTANCE = Mappers.getMapper(ContactMessageMapper.class);
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "timestamp", expression = "java(java.time.LocalDateTime.now())")
    ContactMessage toEntity(ContactMessageDTO dto);
    
    ContactMessageDTO toDto(ContactMessage entity);
}
