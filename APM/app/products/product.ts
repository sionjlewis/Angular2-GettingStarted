export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    //calculateDiscount(percent: number): number;
}

/*  
    business object class implements interface
    ------------------------------------------
    You can define a class for the Product Business Object as well, 
    see the example below.
    In general we onlye create a class business object if that class provides
    some functionality that may be used throught the application.
    This is main reason for adding the "I" to the interface name...
 */
// export class Product implements IProduct {
//     constructor(public productId: number,
//                 public productName: string,
//                 public productCode: string,
//                 public releaseDate: string,
//                 public description: string,
//                 public price: number,
//                 public starRating: number,
//                 public imageUrl: string) {
//     }
//     calculateDiscount(percent: number): number {
//         return this.price - (this.price * percent / 100);
//     }
// }