import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { environment } from "../../environments/environment";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Product } from '../model/product';
import {Quote} from '../model/quote';

import { AuthService } from '../core/auth.service';

import 'rxjs/add/operator/first';

firebase.initializeApp(environment.firebase);

@Injectable()



export class ProductService {

  private basePath: string = '/products';
  products: FirebaseListObservable<Product[]>; //  list of objects
  product: FirebaseObjectObservable<Product>; //   single object
  
  
  constructor(private db: AngularFireDatabase) { }

  public getProducts(): FirebaseListObservable<Product[]>{
    const itemPath = '${this.basePath}';
    this.products = this.db.list(itemPath);
    this.products.subscribe(snapshot=>{
      console.log('Snapshot type result: ' + snapshot);
    })
    return this.products;
  }

  public getProduct(uid: string): FirebaseObjectObservable<Product> {
  	const itemPath =  `${this.basePath}/${uid}`;
  	this.product = this.db.object(itemPath);
  	this.product.subscribe(snapshot =>{
  		console.log('Snapshot type result: ' + snapshot);
  	})
  	return this.product;
	}

  public retrieveAllProductsList():FirebaseListObservable<Product[]>{
    this.products = this.db.list(this.basePath);
    this.products.subscribe(snapshot=>{
      console.log("snap");
    })
    return this.products;
  }

  public retrieveProductsList(propertyValue: string, userUid: string): FirebaseListObservable<Product[]> {
      this.products = this.db.list(this.basePath, {
        query: {
          orderByChild:propertyValue,
          equalTo:userUid
        }
      });
      this.products.subscribe(snapshot=> {
        console.log("snapshot type result:" + snapshot);
      });
      return this.products;
  }

  public updateProduct(productObject: object):any{
    const itemPath = '${this.basePath}/${uid}';
    this.product.update(productObject).catch(error=>this.handleError(error));
    return true;
  }

  public addProduct(productObject: object):any{
    const items = this.db.list(`${this.basePath}`);
    items.push(productObject);
  }

//handle images upload to firebase

  public saveImgFileToStorage(productObject: Product, progress: {percentage: number}){
    console.log(productObject);    
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`assets/images/products/${productObject.name}`).put(productObject.image);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot)=>{
          //track percentage uploaded
          const snap = snapshot as firebase.storage.UploadTaskSnapshot
          progress.percentage = Math.round((snap.bytesTransferred/snap.totalBytes)*100)
        },
        (error)=>{
          console.log(error);
        },
        ()=>{
          //attached the url of image to the object
          productObject.imageUrl = uploadTask.snapshot.downloadURL;
          //save the product object
          this.addProduct(productObject);
        }
      )
  }

//handle images upload to firebase END

//buy/offer price of the product to the seller


 public submitQuote(quote: Quote){
   var quotes = this.db.list('/quotes');
   quotes.push(quote);
 }


public retrieveQuote(productUid: string): any{
    
    var quote = this.db.list('/quotes', {
      query:{
        orderByChild: 'productKey',
        equalTo: productUid,
        limitToFirst: 1
      }
    }).first();

    return quote;
}


//buy/iffer price to the product to the seller
//from here on, it is for internal circulation of user data

  private productObject = new BehaviorSubject<object>(this.product);
  currentUser = this.productObject.asObservable();


  // public getCurrentUserObject(){
  //   const itemPath =  `${this.basePath}/${uid}`;
  //   var userObject;
  //   this.user = this.db.object(itemPath);
  //   this.user.subscribe(snap =>{
  //     userObject = snap;
  //   })
  //   return userObject;
  // }

  private handleError(error:any){
    if(error){console.log("there is an error! ", error)}
  }


}