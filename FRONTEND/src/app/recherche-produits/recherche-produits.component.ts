import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recherche-produits',
  templateUrl: './recherche-produits.component.html',
  styleUrls: ['./recherche-produits.component.css']
})
export class RechercheProduitsComponent {
  searchTerms = {
    id: '',
    name: '',
    description: '',
    price: ''
  };
  
  @Output() searchEvent = new EventEmitter<any>();

  search() {
    this.searchEvent.emit(this.searchTerms);
  }

  resetFilters() {
    this.searchTerms = { id: '', name: '', description: '', price: '' };
    this.searchEvent.emit(this.searchTerms);
  }

}
