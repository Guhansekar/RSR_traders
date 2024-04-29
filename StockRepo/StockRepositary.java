package com.inventory.StockRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.inventory.model.Stocks;
@Repository
public interface StockRepositary extends JpaRepository<Stocks,Long> {

}
