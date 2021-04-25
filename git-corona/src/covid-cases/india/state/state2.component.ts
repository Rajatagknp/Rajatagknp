import { Component } from "@angular/core";

@Component({
    selector: 'state2',
    styleUrls: ['state.component.scss'],
    template: `
        <div>
            <h3 class="heading">Number of Covid cases in State 2 of India</h3>
            <a routerLink="/home">Home</a>
            <div>
                <a routerLink="/home/india">India</a>
            </div>
            <table>
                <tr>
                    <td> Dist Name</td>
                    <td> Active cases</td>
                    <td> Total death</td>
                    <td> Total cases</td>
                </tr>
                <tr>
                    <td> Dist 1</td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td> Dist 2</td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td> Dist 3</td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
            </table>
        </div>
    `
})

export class State2Component {}