import { Component, OnChanges, Input, 
    Output, EventEmitter } from '@angular/core';

@Component({
    // Prefixed with the company initials (sjl) and not the product initials (pm)
    // as we may want to re-use the component else where...
    selector: 'sjl-star',
    //templateUrl: 'app/shared/star.component.html',
    //styleUrls: ['app/shared/star.component.css']
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        // Note: to get the ${} token to work you must use backticks `` around the string.
        this.ratingClicked.emit(`This rating ${this.rating} was clicked!`);
    }
}