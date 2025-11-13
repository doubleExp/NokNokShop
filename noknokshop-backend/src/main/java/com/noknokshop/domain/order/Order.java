package com.noknokshop.domain.order;

import com.noknokshop.domain.common.Address;
import com.noknokshop.domain.common.BaseEntity;
import com.noknokshop.domain.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String orderNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Embedded
    private Address shippingAddress;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentMethod paymentMethod;

    @Column(nullable = false)
    private int totalPrice;

    private String memo;

    private LocalDateTime orderedAt;

    private LocalDateTime canceledAt;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();

    protected Order() {
    }

    public static Order createOrder(User user, Address shippingAddress,
                                    PaymentMethod paymentMethod, List<OrderItem> orderItems) {
        Order order = new Order();
        order.user = user;
        order.shippingAddress = shippingAddress;
        order.paymentMethod = paymentMethod;
        order.status = OrderStatus.ORDERED;
        order.orderedAt = LocalDateTime.now();

        for (OrderItem item : orderItems) {
            order.addOrderItem(item);
        }

        order.calculateTotalPrice();
        return order;
    }

    public void addOrderItem(OrderItem orderItem) {
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    public void calculateTotalPrice() {
        this.totalPrice = orderItems.stream()
                .mapToInt(OrderItem::getTotalPrice)
                .sum();
    }

    public void cancel() {
        if (this.status == OrderStatus.SHIPPED || this.status == OrderStatus.COMPLETED) {
            throw new IllegalStateException("이미 배송 중이거나 완료된 주문은 취소할 수 없습니다.");
        }
        this.status = OrderStatus.CANCELED;
        this.canceledAt = LocalDateTime.now();

        for (OrderItem item : orderItems) {
            item.cancel();
        }
    }

    public Long getId() {
        return id;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public User getUser() {
        return user;
    }

    public Address getShippingAddress() {
        return shippingAddress;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public String getMemo() {
        return memo;
    }

    public LocalDateTime getOrderedAt() {
        return orderedAt;
    }

    public LocalDateTime getCanceledAt() {
        return canceledAt;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }
}
