import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import {Product} from "../model/product";
import {Quote} from "../model/quote";
import {ProductService} from "../services/product.service";
import {UserService} from "../services/user.service"
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'app-merchan-x',
  templateUrl: './merchan-x.component.html',
  styleUrls: ['./merchan-x.component.css']
})
export class MerchanXComponent implements OnInit {

	public productsList;

	public allProductsList

	public productObject;
	
	public userKey;

	public productForm;

  public selectedFiles

  progress: {percentage: number} = {percentage: 0}

  constructor(public db: ProductService, public userService: UserService, public auth: AuthService) { }

  ngOnInit() {
  	this.userKey = this.auth.authState.uid;
  	//just to initialise the reportForm for dual binding 
  	this.productObject = {
  		"merchantId" : this.userKey,
  		"description": null,
  		"name": null,
  		"price" : null,
  		"quantity":null,
  		"phoneNumber":null,
  		"date":null

  	}

  	// get all products 

  	this.db.retrieveAllProductsList().subscribe(snapshot=>{
  		console.log("getting all the products");
  		this.allProductsList = snapshot;
  	})

    // get only my products

    this.db.retrieveProductsList("merchantId",this.userKey).subscribe(snapshot=>{
      console.log('let this wrok' + snapshot);
      this.productsList=snapshot;
    });
  }


  selectFile(event){
    //check the format of the image, make sure it is the right format
    let imgFile = event.target.files.item(0);

    if(imgFile.type.match('image.*')){
      this.productObject.image = imgFile;
    } else {
      alert('invalid format!');
    }
  }

  submitProduct(formData: FormData){
  	console.log(formData);
  	//formData.uid = this.auth.authState.uid;
  	//this.db.addProduct(formData);

    //const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    //this.productObject = formData;
    this.db.saveImgFileToStorage(this.productObject, this.progress);
  	//this.ngOnInit();
  }

  buyProduct(product:any, price: number, quantity:number){
    console.log(product);

    var quote = new Quote();
    quote.quote = price;
    quote.merchantKey = product.merchantId;
    quote.customerKey = this.userKey;
    quote.quantity = quantity;
    quote.description = product.description;
    quote.productKey = product.uid;

    this.db.submitQuote(quote);
  }

  upload(){
    console.log("test only");
  }

}
