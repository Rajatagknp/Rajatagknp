import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndiaComponent } from "./india.component";

export const ROUTES: Routes = [
    {path: '', component: IndiaComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        IndiaComponent
    ],
    exports: [
        IndiaComponent
    ]
})

export class IndiaModule {}