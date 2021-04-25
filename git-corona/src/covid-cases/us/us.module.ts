import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { State1Component } from "./state/state1.component";
import { State2Component } from "./state/state2.component";
import { State3Component } from "./state/state3.component";
import { UsComponent } from "./us.component";

export const ROUTES: Routes = [
    {path: '', component: UsComponent},
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
        UsComponent,
        State1Component,
        State2Component,
        State3Component
    ],
    exports: [
        UsComponent
    ]
})

export class UsModule {}