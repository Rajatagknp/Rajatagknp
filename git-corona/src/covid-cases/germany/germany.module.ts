import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GermanyComponent } from "./germany.component";

export const ROUTES: Routes = [
    {path: '', component: GermanyComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        GermanyComponent
    ],
    exports: [
        GermanyComponent
    ]
})

export class GermanyModule {}