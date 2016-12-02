import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// SUB#1: WE need to use the Subscription to interact with an Observable object.
import { Subscription } from 'rxjs/Subscription';

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
    product: IProduct;
    errorMessage: string;
    // SUB#2: Declare a private Subscription variable.
    private sub: Subscription;

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
        //let id = +this._route.snapshot.params['id'];
        //this.pageTitle += `: ${id}`;

        // SUB#4: Instantiate the Subscription variable.
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        );
    }

    // SUB#5: Add the OnDestroy hock (after importing above) to unsubscribe the Subscription
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // SUB#3: Create a wrapper method to call the method within the service.
    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product  => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack():void {
        this._router.navigate(['/products']);
    }
}