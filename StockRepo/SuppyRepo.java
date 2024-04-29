package com.inventory.StockRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.model.Supplier;
@Repository
public interface SuppyRepo extends JpaRepository<Supplier ,Long> {

}
