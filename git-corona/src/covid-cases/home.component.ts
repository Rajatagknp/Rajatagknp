import { Component } from "@angular/core";

@Component({
    selector: 'home',
    styleUrls: ['home.component.scss'],
    template: `
        <div>
            <table>
                <tr>
                    <td> Contry Name</td>
                    <td> Active cases</td>
                    <td> Total death</td>
                    <td> Total cases</td>
                </tr>
                <tr>
                    <td>
                        <a routerLink="/home/germany">Germany</a>
                    </td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td>
                        <a routerLink="/home/india">India</a>
                    </td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
                <tr>
                    <td>
                        <a routerLink="/home/us">Us</a>
                    </td>
                    <td> 10</td>
                    <td> 1</td>
                    <td> 100</td>
                </tr>
            </table>
        </div>
    `
})

export class HomeComponent {}