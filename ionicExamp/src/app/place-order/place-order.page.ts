import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

id
category 
milk
sugar
quantity
totprice

  constructor(public orderService: OrderService, public route: ActivatedRoute) {
    // this.coffeee = this.orderService.getOrders()
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
      this.category = this.orderService.getCategories(this.id);
      console.log(this.category);
      
    })
  }
  placeOrder(){
  this.orderService.placeOrder(this.sugar,this.milk,this.quantity,this.totprice)
  }

milks(event){
  this.milk = event.detail.value;
  console.log(this.milk);
}

sugars(event){
  this.sugar = event.detail.value
  console.log(this.sugar);
}

quant(event){
  this.quantity = event.detail.value;
  console.log(this.quantity);
}



}
