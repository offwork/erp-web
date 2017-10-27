import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UICardComponent } from './card.component';
import { UICardContentComponent } from './card-content.component';
import { UICardFooterComponent } from './card-footer.component';
import { UICardHeaderComponent } from './card-header.component';


const cards = [
    UICardComponent,
    UICardContentComponent,
    UICardFooterComponent,
    UICardHeaderComponent,
];

@NgModule({
    declarations: [
        ...cards,
    ],
    exports: [
        ...cards,
    ],
    imports: [ CommonModule ]
})

export class UICardModule {}
