package com.example.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Fournisseur implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nomFournisseur;
	private String adresseFournsseur;
	private Long numPhone;
	 
	public String getNomFournisseur() {
		return nomFournisseur;
	}

	public void setNomFournisseur(String nomFournisseur) {
		this.nomFournisseur = nomFournisseur;
	}

	public String getAdresseFournsseur() {
		return adresseFournsseur;
	}

	public void setAdresseFournsseur(String adresseFournsseur) {
		this.adresseFournsseur = adresseFournsseur;
	}

	public Long getNumPhone() {
		return numPhone;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setNumPhone(Long numPhone) {
		this.numPhone = numPhone;
	}

}
