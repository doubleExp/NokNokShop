package com.noknokshop.domain.order;

import com.noknokshop.domain.common.BaseEntity;
import com.noknokshop.domain.product.Product;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_items")
public class OrderItem extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private int orderPrice;

    @Column(nullable = false)
    private int quantity;

    protected OrderItem() {
    }

    public static OrderItem createOrderItem(Product product, int orderPrice, int quantity) {
        product.decreaseStock(quantity);

        OrderItem orderItem = new OrderItem();
        orderItem.product = product;
        orderItem.orderPrice = orderPrice;
        orderItem.quantity = quantity;
        return orderItem;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public int getTotalPrice() {
        return orderPrice * quantity;
    }

    public void cancel() {
        product.increaseStock(quantity);
    }

    public Long getId() {
        return id;
    }

    public Order getOrder() {
        return order;
    }

    public Product getProduct() {
        return product;
    }

    public int getOrderPrice() {
        return orderPrice;
    }

    public int getQuantity() {
        return quantity;
    }
}
