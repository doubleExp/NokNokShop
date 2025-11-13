package com.noknokshop.repository;

import com.noknokshop.domain.order.Order;
import com.noknokshop.domain.user.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);
    Optional<Order> findByOrderNumber(String orderNumber);
}
