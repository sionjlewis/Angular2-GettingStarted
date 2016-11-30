import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {IProduct } from './product';
import { ProductService } from './product.service'

@Component({
    // Don't need the 'selector' property as the component is not going to be nested within another component.
    //templateUrl: 'app/products/product-detail.component.html'//,
    // Specify the 'modile id' so that you can use the "component relative path"... 
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    errorMessage: string;
    product: IProduct;

    constructor(private _route: ActivatedRoute, 
    private _router: Router,
    private _productService: ProductService) {
        // Use 'snapshot' if you only need the initial value of the param.
        // Or use the observable if you exspect the value to change without leaving the page (e.g. for a Next button)...
        console.log(this._route.snapshot.params['id']);
    }

    ngOnInit(): void {
        // 'let' defines a block scoped variable (new to ES 2015).
        // '+' is a JS short cut to convert a string a number.
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

        this._productService.getProduct(id)
                .subscribe(product => this.product = product,
                    error => this.errorMessage = <any>error);

    }

    onBack():void {
        this._router.navigate(['/products']);
    }
}