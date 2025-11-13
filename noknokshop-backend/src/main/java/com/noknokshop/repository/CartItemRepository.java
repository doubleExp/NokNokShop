package com.noknokshop.repository;

import com.noknokshop.domain.cart.CartItem;
import com.noknokshop.domain.product.Product;
import com.noknokshop.domain.user.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUser(User user);
    Optional<CartItem> findByUserAndProduct(User user, Product product);
}
