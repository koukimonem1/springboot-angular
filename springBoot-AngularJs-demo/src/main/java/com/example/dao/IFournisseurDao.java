package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Fournisseur;

public interface IFournisseurDao extends JpaRepository<Fournisseur, Integer> {

}
