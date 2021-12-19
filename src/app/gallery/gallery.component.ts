import { Component } from "@angular/core";

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
    imgSource : string = './Pisaasu.jfif';
    isDisabled: boolean = false;

}