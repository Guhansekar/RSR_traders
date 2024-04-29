package com.inventory.StockRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import com.inventory.model.Order;
import com.inventory.model.Orders;
@Repository
public interface OrderRepo extends  JpaRepository<Orders,Long>{

}
