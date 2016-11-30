import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // This URL is made up of 2 secgments 'product/10': [product, id].
        // The '+' converts the string to a number.
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            // Note: in a real App we would redirect to an error page and not display an alert like this...
            alert('Invalid product Id');
            // Start a new navigation to redirect to list page.
            this._router.navigate(['/products']);
            // About current navigation.
            return false;
        }
        return true;
    }
}