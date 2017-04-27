import {Component} from "@angular/core";


/*
 <app-modal>
 <div class="app-modal-header">
 header00
 </div>
 <div class="app-modal-body">
 Whatever content you like, form fields, anything
 </div>
 <div class="app-modal-footer">
 <button type="button" class="btn btn-default" (click)="mymodal.hide()">Close</button>
 <button type="button" class="btn btn-primary">Save changes</button>
 </div>
 </app-modal>
 */

@Component({
    selector: 'app-modal',
    templateUrl: './modal.html',
    styleUrls:['./modal.css'],
})
export class ModalComponent {

    public visible = false;
    private visibleAnimate = false;

    public show(): void {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);
    }

    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
}