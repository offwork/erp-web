import { Component, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'kl-ui-card',
    template: `
        <div class="card {{classNames}}">
            <div *ngIf="hasHeader" #cardHeader class="card-header">
                <ng-content select="kl-ui-card-header"></ng-content>
            </div>
            <div *ngIf="hasContent" #cardContent class="card-block">
                <ng-content select="kl-ui-card-content"></ng-content>
            </div>
            <div *ngIf="!hasContent">
                <ng-content></ng-content>
            </div>
            <div *ngIf="hasFooter" #cardFooter class="card-footer">
                <ng-content select="kl-ui-card-footer?"></ng-content>
            </div>
        </div>
    `
})

export class UICardComponent implements AfterViewInit {
    // Get a reference to the different sections
    @ViewChild('cardContent') cardContent;
    @ViewChild('cardFooter') cardFooter;
    @ViewChild('cardHeader') cardHeader;
    // Add additional classNames to a card
    @Input() classNames = '';
    // By default display all the parts of the card
    hasContent = true;
    hasFooter = true;
    hasHeader = true;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {}

    // Determine visibility based on existence of child sections
    ngAfterViewInit() {
        this.hasContent = this.cardContent.nativeElement.querySelector('kl-ui-card-content');
        this.hasHeader = this.cardHeader.nativeElement.querySelector('kl-ui-card-header');
        this.hasFooter = this.cardFooter.nativeElement.querySelector('kl-ui-card-footer');
        this._changeDetectorRef.detectChanges();
    }
}
