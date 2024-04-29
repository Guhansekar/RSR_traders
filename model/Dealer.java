package com.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Dealer {

	public Dealer() {}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long deal_Id;
	private String deal_Name;
	private String store;
	private String contact;
	private String location;
	public Long getDeal_Id() {
		return deal_Id;
	}
	public void setDeal_Id(Long deal_Id) {
		this.deal_Id = deal_Id;
	}
	public String getDeal_Name() {
		return deal_Name;
	}
	public void setDeal_Name(String deal_Name) {
		this.deal_Name = deal_Name;
	}
	public String getStore() {
		return store;
	}
	public void setStore(String store) {
		this.store = store;
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
