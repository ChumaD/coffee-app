import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
orderss
  constructor(public orderService: OrderService) { 
    this.orderss = this.orderService.getOrders()
  }

  ngOnInit() {
  }

}
