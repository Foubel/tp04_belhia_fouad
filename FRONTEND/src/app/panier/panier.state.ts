// panier.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartStateModel {
  items: Product[];
}

export class AddToCart {
  static readonly type = '[Cart] Add';
  constructor(public payload: Product) {}
}

export class RemoveFromCart {
  static readonly type = '[Cart] Remove';
  constructor(public payload: number) {} 
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    items: []
  }
})
export class CartState {
  @Selector()
  static itemCount(state: CartStateModel): number {
    return state.items.length;
  }

  @Selector()
  static cartItems(state: CartStateModel): Product[] {
    return state.items;
  }

  @Action(AddToCart)
  add({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddToCart): void {
    const state = getState();
    patchState({ items: [...state.items, payload] });
  }

  @Action(RemoveFromCart)
  remove({ getState, patchState }: StateContext<CartStateModel>, { payload }: RemoveFromCart): void {
    patchState({
      items: getState().items.filter(item => item.id !== payload)
    });
  }
}

