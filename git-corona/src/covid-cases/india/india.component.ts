import { Component } from "@angular/core";

@Component({
    selector: "india",
    styleUrls: ['india.component.scss'],
    template: `
        <div>
            <h3 class="heading">Number of Covid cases in India</h3>
            <a routerLink="/home">Home</a>
            <table>
                <tr>
                    <td> State Name</td>
                    <td> Active cases</td>
                    <td> Total death</td>
                    <td> Total cases</td>
                </tr>
                <tr>
                    <td>
                        <a routerLink="/home/india/state1">State 1</a> 
                    </td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td>
                        <a routerLink="/home/india/state2">State 2</a> 
                    </td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td>
                        <a routerLink="/home/india/state3">State 3</a> 
                    </td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
            </table>
        </div>
    `
})

export class IndiaComponent {}