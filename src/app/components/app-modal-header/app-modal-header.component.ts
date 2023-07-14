import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-modal-header',
    templateUrl: './app-modal-header.component.html',
    styleUrls: ['./app-modal-header.component.scss']
})
export class AppModalHeaderComponent {
    @Input()
    showLeftIcon = true;

    @Input()
header: any;


    @Output()
    closePopup = new EventEmitter<any>();

    constructor() {
        console.log(this.header);
    }

    uiClosePopup() {
        this.closePopup.emit();
    }
}