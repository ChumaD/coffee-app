import { Injectable } from '@angular/core';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
orders = []
sugar:number
milk:boolean
quantity:number
totprice:number
empty=true

Categories=[
  {id:1,pic:'cappuchino.jpg',name:'Cappuccino', price:37},
  {id:2,pic:'caffelatte.jpg',name:'Caffe Latte', price:35},
  {id:3,pic:'expresso.png',name:'Espresso', price:34},
  {id:4,pic:'plainCoffee.jpg',name:'Plain coffee', price:29}]

  constructor() {
   }


  getCategories(id) {

    let selectedCategory 
    for (let x = 0; x => this.Categories.length; x++){
      if (this.Categories[x].id == id){
       return this.Categories[x]
        
      } 
    }
    console.log(selectedCategory);
    return selectedCategory
  }

  getall(){
    return this.Categories
  }

  placeOrder(sugar,milk,quantity,totprice){
    this.orders.push({ordsugar:sugar,
      ordmilk:milk,
      ordquant:quantity,
      ordprice:totprice})
      console.log(this.orders);
  }

  getOrders(){
    return this.orders
  }

  Total(quant){
    this.totprice = this.totprice * quant
  }
}