import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productName = 'A Book'
  isDisabled = true;
  products = ['A Book', 'A Tree']

  constructor() {
    setTimeout(() => {
      this.isDisabled = false
    }, 3000);
  }

  onAddProduct () {
    this.products.push(this.productName);
  }

  onRemoveProduct (productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

  // ngOnInit(): void {
  // }

}