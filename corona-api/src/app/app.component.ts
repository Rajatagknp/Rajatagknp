import { Component, Input } from '@angular/core';
 
import { GitHubService } from '../corona_api/github.service';
import { repos } from '../corona_api/repos';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:["app.component.css"]
})
export class AppComponent {

  countryName: string = "india"
  countrydate: string = "2021-01-14T00:00:00Z"

  repos!: repos[];
  errorMessage!: string;
 
  loading: boolean = false;
  Countryloading: number = 1;
  errordata: number = 1;
  gettable: number = 1;
 
  constructor(private githubService: GitHubService) {
  }

  public getCountry() {
    this.loading = true;
    this.Countryloading = 1;
    this.errordata = 1;
    this.gettable = 0;
    this.errorMessage = "";
    this.githubService.getData()
      .subscribe(
        (response) => {
          this.repos = response.Countries;
        })
  }
  
  public getSingleCountry(){
    this.loading = true;
    this.Countryloading = 0;
    this.errordata = 1;
    this.gettable = 0;
    this.errorMessage = "";
    this.githubService.getCountryData(this.countryName)
      .subscribe(
        (response) => {
          this.repos = [];
          for(let i=0;i<response.length;i++){
            if(response[i].Date==this.countrydate){
              this.repos.push(response[i]);
            }
          }
          if(this.repos.length==0){
            this.errordata = 0;
            this.gettable = 1;
            this.loading = false;
          }
        }
      )
  }

  public getCountryData(data:String){
    this.loading = true;
    this.Countryloading = 0;
    this.errorMessage = "";
    this.githubService.getCountryData(data)
      .subscribe(
        (response) => {
          console.log(data)
          this.repos = response
        }
      )
  }
}