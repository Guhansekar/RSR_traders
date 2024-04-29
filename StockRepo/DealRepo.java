package com.inventory.StockRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.model.Dealer;
@Repository
public interface DealRepo extends JpaRepository<Dealer, Long> {

}
