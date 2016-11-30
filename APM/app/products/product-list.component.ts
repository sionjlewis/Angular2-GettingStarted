import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'

@Component({
    // I've comment out the 'selector' as this component is nolonger nested in this demo. 
    //selector: 'pm-products',
    //templateUrl: 'app/products/product-list.component.html',
    //styleUrls: ['app/products/product-list.component.css']
    // Specify the 'modile id' so that you can use the "component relative path"... 
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    products: IProduct[] = [];

    // An explicit constructor, long-hand.
    //private _productService: ProductService;
    //constructor(productService: ProductService) {
    //    this._productService = productService;
    //}
    // An explicit constructor TypeScript short-cut.
    constructor(private _productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        //console.log('In OnInit');
        
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                    error => this.errorMessage = <any>error);

        // ----
        //this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}