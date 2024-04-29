package com.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Supplier {

	public Supplier() {}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long sup_Id;
	private String sup_Name;
	private String product;
	private String contact;
	private String location;
	
	
	public Long getSup_Id() {
		return sup_Id;
	}
	public void setSup_Id(Long sup_Id) {
		this.sup_Id = sup_Id;
	}
	public String getSup_Name() {
		return sup_Name;
	}
	public void setSup_Name(String sup_Name) {
		this.sup_Name = sup_Name;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	

}
