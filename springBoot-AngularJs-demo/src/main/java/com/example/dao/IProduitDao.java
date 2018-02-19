package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Produit;

public interface IProduitDao extends JpaRepository<Produit, Integer> {
	public List<Produit> findByreference(String ref);
}
