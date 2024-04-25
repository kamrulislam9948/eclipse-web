import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from './services/script-loader.service';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    private scriptLoader: ScriptLoaderService
  
  ) 
  { }

  ngOnInit(): void {
    this.dynamicallyLoadsSripts();
  }

  dynamicallyLoadsSripts(){
    // Dynamically load scripts
    this.scriptLoader.loadScripts()
      .then(() => {
        console.log('All scripts loaded successfully');
        // Call any initialization functions here
      })
      .catch(error => {
        console.error('Error loading scripts:', error);
      });
  }
}
