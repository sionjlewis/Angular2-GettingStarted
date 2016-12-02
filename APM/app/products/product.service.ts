import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// This syntax loads the library but does not import any of its features. When loaded the JS is executed.
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

// @Injectable() is optional, however is good practice to add to all services.
@Injectable()
export class ProductService {
    //private _productUrl = 'http://localhost:3000/api/products/products.json';
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        // Translate the array of Response to an array of IProducts using the map operator.
        // Note: the json result may be wrapped in property e.g. data.
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        // Translate the array of Response to an array of IProducts using the map operator.
        // Note: the json result may be wrapped in property e.g. data.
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response) {
        // A real world app  may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    // ----

    // getProducts(): IProduct[] {
    //     return [
    //         {
    //             "productId": 1,
    //             "productName": "Leaf Rake",
    //             "productCode": "GDN-0011",
    //             "releaseDate": "March 19, 2016",
    //             "description": "Leaf rake with 48-inch wooden handle.",
    //             "price": 19.95,
    //             "starRating": 3.2,
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    //         },
    //         {
    //             "productId": 2,
    //             "productName": "Garden Cart",
    //             "productCode": "GDN-0023",
    //             "releaseDate": "March 18, 2016",
    //             "description": "15 gallon capacity rolling garden cart",
    //             "price": 32.99,
    //             "starRating": 4.2,
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //         },
    //         {
    //             "productId": 8,
    //             "productName": "Saw",
    //             "productCode": "TBX-0022",
    //             "releaseDate": "May 15, 2016",
    //             "description": "15-inch steel blade hand saw",
    //             "price": 11.55,
    //             "starRating": 3.7,
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    //         },
    //         {
    //             "productId": 5,
    //             "productName": "Hammer",
    //             "productCode": "TBX-0048",
    //             "releaseDate": "May 21, 2016",
    //             "description": "Curved claw steel hammer",
    //             "price": 8.9,
    //             "starRating": 4.8,
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    //         }
    //         ];
    // }
}