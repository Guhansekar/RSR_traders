package com.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
	public Book() {}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Long dealer_id;
	private String product;
	private String quantity;
	private String price;
	private String date_of_order;

	
	

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Long getDealer_id() {
		return dealer_id;
	}

	public void setDealer_id(Long dealer_id) {
		this.dealer_id = dealer_id;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}


	public String getDate_of_order() {
		return date_of_order;
	}


	public void setDate_of_order(String date_of_order) {
		this.date_of_order = date_of_order;
	}


	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}
	
	

}
