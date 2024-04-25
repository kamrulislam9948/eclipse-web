import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../../../../services/script-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
