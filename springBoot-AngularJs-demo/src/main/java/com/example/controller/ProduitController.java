package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.IProduitDao;
import com.example.entity.Produit;

@RestController
public class ProduitController {
	@Autowired
	private IProduitDao produitDao;

	@RequestMapping("/save")
	public Produit ajouterProduit(Produit p) {
		produitDao.save(p);
		return p;
	}

	@RequestMapping("all")
	public List<Produit> toutProuit() {
		return produitDao.findAll();
	}

	@RequestMapping("/find")
	public Produit findProduit(Integer id) {
		return produitDao.findOne(id);
	}

	@RequestMapping("/delete")
	public void deleteProduit(Integer id) {
		produitDao.delete(id);
	}

	@RequestMapping("/deleteAll")
	public void deleteAll() {
		produitDao.deleteAll();
	}
	@RequestMapping("/byRef")
	public List<Produit> byRefProduit(String ref) {
		return produitDao.findByreference(ref);
	}

	public IProduitDao getProduitDao() {
		return produitDao;
	}

	public void setProduitDao(IProduitDao produitDao) {
		this.produitDao = produitDao;
	}

}
