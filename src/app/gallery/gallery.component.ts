import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component } from "@angular/core";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

@Component ({
    selector: 'my-gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})
export class GalleryComponent{
    firstName : string = 'Nivas';
    lastName : string = 'Donthireddy';
    getFullName():string {
        return this.firstName + this.lastName;
    }
    getTitle():string {
        return "Hell-Bound Poster";
    }
    isDisabled: boolean = false;
    OnClick() : void {
        console.log("Button Clicked");
    }
}