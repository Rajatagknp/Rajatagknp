import { Component } from "@angular/core";

@Component({
    selector: "india",
    styleUrls: ['india.component.scss'],
    template: `
        <div>
            <a routerLink="/home">Home</a>
            <table>
                <tr>
                    <td> State Name</td>
                    <td> Active cases</td>
                    <td> Total death</td>
                    <td> Total cases</td>
                </tr>
                <tr>
                    <td> State 1</td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td> State 2</td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td> State 3</td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
            </table>
        </div>
    `
})

export class IndiaComponent {}