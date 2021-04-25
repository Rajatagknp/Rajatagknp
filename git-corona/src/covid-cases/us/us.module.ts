import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsComponent } from "./us.component";

export const ROUTES: Routes = [
    {path: '', component: UsComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        UsComponent
    ],
    exports: [
        UsComponent
    ]
})

export class UsModule {}