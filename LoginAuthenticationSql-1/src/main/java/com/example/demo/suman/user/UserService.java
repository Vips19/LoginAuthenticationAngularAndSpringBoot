package com.example.demo.suman.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserService {
	
	@Autowired
	public UserRepository userRepo;

	public List<User> getAllUsers()
	{
		//return topics;
		List<User> users=new ArrayList<User>();
		userRepo.findAll()
		.forEach(users::add);
		return users;
	}
	public Optional<User> getUser(String id) {
		//return topics.stream().filter(t->t.getId()==id).findFirst().get();
		return userRepo.findById(id);
	}
	public void addUser(User u) {
		userRepo.save(u);
	}
	

}