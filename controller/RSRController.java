package com.inventory.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.StockRepo.BookRepo;
import com.inventory.StockRepo.DealRepo;
import com.inventory.StockRepo.OrderRepo;
import com.inventory.StockRepo.StockRepositary;
import com.inventory.StockRepo.SuppyRepo;
import com.inventory.model.Book;
import com.inventory.model.Dealer;
import com.inventory.model.Orders;
import com.inventory.model.Stocks;
import com.inventory.model.Supplier;



@RestController
@CrossOrigin("http://localhost:3000")
public class RSRController {
	
	
	@Autowired
	StockRepositary stockRepo;
	@Autowired
	DealRepo delrepo;
	SuppyRepo supRepo;
	@Autowired
	OrderRepo orRepo;
	@Autowired
	BookRepo bookRepo;
	
	//LocalDate today=LocalDate.now();
	Date today=new Date();
	
	
	DateFormat format=new SimpleDateFormat("dd-MM-yyyy");
	
	
	
	
	

	
	

	public RSRController() {}
	@GetMapping("/getStocks")
	public List<Stocks> getStocks()
	{
		return stockRepo.findAll();
	}
	@GetMapping("/getStock/{id}")
	public Stocks getStock(@PathVariable Long id)
	{
		return stockRepo.findById(id).orElse(null);
				
	}
	@PostMapping("/addStock")
	public Stocks addStocks(@RequestBody Stocks stock){
		
		return stockRepo.save(stock);
	}
	@PutMapping("/updateStock/{id}")
	public Stocks updateStocks(@RequestBody Stocks stock,@PathVariable Long id){
		
		Stocks s1=stockRepo.findById(id).get();
		s1.setStockName(stock.getStockName());
		s1.setMRP(stock.getMRP());
		s1.setQuantity(stock.getQuantity());
		s1.setReFilled(stock.getReFilled());
		s1.setSupplier(stock.getSupplier());
			
		return stockRepo.save(s1);
	}
	@DeleteMapping("/deleteStock/{id}")
	public String deleteStock(@PathVariable Long id) {
		stockRepo.deleteById(id);
		return "deleted";
	}
	
	@PostMapping("/addDealer")
	public Dealer addDealer(@RequestBody Dealer dealer){
		return delrepo.save(dealer);
	}
	
	@GetMapping("/getDealers")
	public List<Dealer> getDealers()
	{
		return delrepo.findAll();
	}
	@DeleteMapping("/removeDealer/{id}")
	public String removeDealer(@PathVariable Long id) {
		delrepo.deleteById(id);
		return "remove";
	}
	
	
	@PostMapping("/addSupplier")
	public Supplier addSupplier(@RequestBody Supplier supplier){
		return supRepo.save(supplier);
	}
	
	@GetMapping("/getSuppliers")
	public List<Supplier> getSuppliers()
	{
		return supRepo.findAll();
	}
	@DeleteMapping("/removeSupplier/{id}")
	public String removeSupplier(@PathVariable Long id) {
		supRepo.deleteById(id);
		return "remove";
	}
	
	@PostMapping("/addOrder")
	public Orders addOrder(@RequestBody Orders order){
		return orRepo.save(order);
	}
	
	@GetMapping("/getOrders")
	public List<Orders> getOrders()
	{
		return orRepo.findAll();
	}
	@DeleteMapping("/removeOrder/{id}")
	public String removeOrder(@PathVariable Long id) {
		orRepo.deleteById(id);
		return "remove";
	}
	@GetMapping("/getBook")
	public List<Book> getBook(){
		return bookRepo.findAll();
	}
	
	@PostMapping("/addBook")
	public Book addBook(@RequestBody Book book){
		String val="";
		String stoc="";
		String n=format.format(today);
		book.setDate_of_order(n);
		
		String i=book.getProduct();
		String qun=book.getQuantity();
		
		int mul=Integer.parseInt(qun);
		
		
		List<Stocks> st=stockRepo.findAll();
		
		for(Stocks s:st) {
			if((s.getStockName()).equals(i)) {
				int mul2=Integer.parseInt(s.getMRP());
				int c=mul*mul2;
				String s2=String.valueOf(c);
				val=val.concat(s2);
				
				int less=Integer.parseInt(s.getQuantity());
				int bal=less-mul;
				String bal2=String.valueOf(bal);
				stoc=stoc.concat(bal2);
				s.setQuantity(stoc);
			}
			
		}
	book.setPrice(val);
	
		return bookRepo.save(book);
	}
	@DeleteMapping("/removeBook/{id}")
	public String removeBook(@PathVariable Long id) {
		bookRepo.deleteById(id);
		return"removed";
	}
	
	@DeleteMapping("/removeBookAll")
	public String removeBookAll() {
		bookRepo.deleteAll();
		return "removed";
	}
	
	@GetMapping("/getLows")
	public List<Stocks> getLows() {
		
		List<Stocks> listock=stockRepo.findAll();
		
		ArrayList<Stocks> arstock=new ArrayList<Stocks>();
		
		for(Stocks news:listock) {
			if(20 > Integer.parseInt(news.getQuantity())){
				arstock.add(news);
				
			}
		}
		
		return arstock;
		
				
	}
}
