// panier.component.ts
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState, RemoveFromCart, Product } from '../panier.state'; // Ajustez le chemin d'accès


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  @Select(CartState.cartItems) cart$!: Observable<Product[]>;

  constructor(private store: Store) {}

  removeFromCart(id: number) {
    this.store.dispatch(new RemoveFromCart(id));
  }
}

