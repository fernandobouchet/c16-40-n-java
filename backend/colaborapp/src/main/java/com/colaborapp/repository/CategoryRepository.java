package com.colaborapp.repository;

import com.colaborapp.model.Category;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @NotNull Optional<Category> findById(@NotNull Long categoryId);
}
