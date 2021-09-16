import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Book'
  isDisabled = true;
  products = []
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService) {

    setTimeout(() => {
      this.isDisabled = false
    }, 3000);
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe( () => {
      this.products = this.productsService.getProducts();
    })

  }

  onAddProduct (form) {
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName)
    }
    // this.products.push(this.productName);
    console.log(form)
  }

  onRemoveProduct (productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

  ngOnDestroy () {
    this.productsSubscription.unsubscribe();
  }


}
