package com.noknokshop.domain.common;

import jakarta.persistence.Embeddable;

@Embeddable
public class Address {

    private String zipcode;
    private String address1;
    private String address2;

    protected Address() {
    }

    public Address(String zipcode, String address1, String address2) {
        this.zipcode = zipcode;
        this.address1 = address1;
        this.address2 = address2;
    }

    public String getZipcode() {
        return zipcode;
    }

    public String getAddress1() {
        return address1;
    }

    public String getAddress2() {
        return address2;
    }
}
