import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
coffee
id
  constructor(public orderService: OrderService ) {
    this.coffee = this.orderService.getall()
   }

  ngOnInit() {
  }

}
