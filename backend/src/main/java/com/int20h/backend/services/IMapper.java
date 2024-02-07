package com.int20h.backend.services;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface IMapper<E, D> {
    E convertToEntity(D dto, E foundEntity);

    D convertToDTO(E entity);

    List<D> convertToDtoList(List<E> entities);

    Map<UUID, D> convertToDtoMap(List<E> entities);
}