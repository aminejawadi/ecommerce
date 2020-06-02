import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {CartModelServer} from '../../models/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartTotal: number;
  cartData: CartModelServer;


  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.cartService.cartData$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);


  }

  onCheckout() {
    if (this.cartTotal > 0) {
      this.spinner.show().then(p => {
        this.cartService.CheckoutFromCart(1);
        this.cartService.CheckoutFromCart(2);
        this.cartService.CheckoutFromCart(3);
        this.cartService.CheckoutFromCart(4);
        this.cartService.CheckoutFromCart(5);
        this.cartService.CheckoutFromCart(6);
        this.cartService.CheckoutFromCart(7);
        this.cartService.CheckoutFromCart(8);
        this.cartService.CheckoutFromCart(9);
        this.cartService.CheckoutFromCart(10);
        this.cartService.CheckoutFromCart(11);
        this.cartService.CheckoutFromCart(12);
        this.cartService.CheckoutFromCart(13);
        this.cartService.CheckoutFromCart(14);
        this.cartService.CheckoutFromCart(15);
        this.cartService.CheckoutFromCart(16);
        this.cartService.CheckoutFromCart(17);
        this.cartService.CheckoutFromCart(18);
        this.cartService.CheckoutFromCart(19);
        this.cartService.CheckoutFromCart(20);
        this.cartService.CheckoutFromCart(21);
        this.cartService.CheckoutFromCart(22);
        this.cartService.CheckoutFromCart(23);
        this.cartService.CheckoutFromCart(24);
        this.cartService.CheckoutFromCart(25);
        this.cartService.CheckoutFromCart(26);
        this.cartService.CheckoutFromCart(27);
        this.cartService.CheckoutFromCart(28);
        this.cartService.CheckoutFromCart(29);
        this.cartService.CheckoutFromCart(30);
        this.cartService.CheckoutFromCart(31);
        this.cartService.CheckoutFromCart(32);
        this.cartService.CheckoutFromCart(33);
        this.cartService.CheckoutFromCart(34);
        this.cartService.CheckoutFromCart(35);
        this.cartService.CheckoutFromCart(36);
        this.cartService.CheckoutFromCart(37);
        this.cartService.CheckoutFromCart(38);
        this.cartService.CheckoutFromCart(39);
        this.cartService.CheckoutFromCart(40);
        this.cartService.CheckoutFromCart(41);
        this.cartService.CheckoutFromCart(42);
        this.cartService.CheckoutFromCart(43);
        this.cartService.CheckoutFromCart(44);
        this.cartService.CheckoutFromCart(45);
        this.cartService.CheckoutFromCart(46);
        this.cartService.CheckoutFromCart(47);
        this.cartService.CheckoutFromCart(48);
        this.cartService.CheckoutFromCart(49);
        this.cartService.CheckoutFromCart(50);
        this.cartService.CheckoutFromCart(51);
        this.cartService.CheckoutFromCart(52);
        this.cartService.CheckoutFromCart(53);
        this.cartService.CheckoutFromCart(54);
        this.cartService.CheckoutFromCart(55);
        this.cartService.CheckoutFromCart(56);
        this.cartService.CheckoutFromCart(57);
        this.cartService.CheckoutFromCart(58);
        this.cartService.CheckoutFromCart(59);
        this.cartService.CheckoutFromCart(60);
        this.cartService.CheckoutFromCart(70);



      });
    } else {
      return;
    }


  }


}
