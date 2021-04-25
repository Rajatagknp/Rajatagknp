import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndiaComponent } from "./india.component";
import { State1Component } from "./state/state1.component";
import { State2Component } from "./state/state2.component";
import { State3Component } from "./state/state3.component";

export const ROUTES: Routes = [
    {path: '', component: IndiaComponent},
    {path:'state1', component:State1Component},
    {path:'state2', component:State2Component},
    {path:'state3', component:State3Component}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        IndiaComponent,
        State1Component,
        State2Component,
        State3Component
    ],
    exports: [
        IndiaComponent
    ]
})

export class IndiaModule {}