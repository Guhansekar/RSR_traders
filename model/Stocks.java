package com.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Stocks {

	public Stocks() {}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String stockName;
	private String quantity;
	private String supplier;
	private String reFilled;
	private String MRP;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getMRP() {
		return MRP;
	}
	public void setMRP(String mRP) {
		MRP = mRP;
	}
	public String getStockName() {
		return stockName;
	}
	public void setStockName(String stockName) {
		this.stockName = stockName;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getSupplier() {
		return supplier;
	}
	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	public String getReFilled() {
		return reFilled;
	}
	public void setReFilled(String reFilled) {
		this.reFilled = reFilled;
	}
	
	
	

}
