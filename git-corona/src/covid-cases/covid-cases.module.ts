import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GermanyModule } from "./germany/germany.module";
import { HomeComponent } from "./home.component";
import { IndiaModule } from "./india/india.module";
import { UsModule } from "./us/us.module";


export const ROUTES: Routes = [
    {
        path: 'home',
        children: [
            {path: '', component:HomeComponent},
            {path: 'india',loadChildren: './india/india.module#IndiaModule'},
            {path: 'germany',loadChildren: './germany/germany.module#GermanyModule'},
            {path: 'us',loadChildren: './us/us.module#UsModule'}
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        GermanyModule,
        IndiaModule,
        UsModule
    ],
    declarations: [
        HomeComponent
    ]
})

export class CovidCasesModule{ }