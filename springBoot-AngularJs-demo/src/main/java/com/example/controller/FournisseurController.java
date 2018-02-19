package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.IFournisseurDao;
import com.example.entity.Fournisseur;

@RestController
public class FournisseurController {
	@Autowired
	private IFournisseurDao fournDao;

	@RequestMapping("/addFour")
	public Fournisseur addFour(Fournisseur f) {
		fournDao.save(f);
		return f;
	}

	@RequestMapping("/allFour")
	public List<Fournisseur> getAllFour() {
		return fournDao.findAll();
	}

	@RequestMapping("/deleteFour")
	public void deleteFour(Integer id) {
		fournDao.delete(id);
	}

	@RequestMapping("/getFour")
	public Fournisseur getFour(Integer id) {
		return fournDao.findOne(id);
	}

	public IFournisseurDao getFournDao() {
		return fournDao;
	}

	public void setFournDao(IFournisseurDao fournDao) {
		this.fournDao = fournDao;
	}

}
