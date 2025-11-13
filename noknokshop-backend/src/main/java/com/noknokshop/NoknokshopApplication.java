package com.noknokshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class NoknokshopApplication {

    public static void main(String[] args) {
        SpringApplication.run(NoknokshopApplication.class, args);
    }
}
