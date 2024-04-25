import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../../../../services/script-loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private scriptLoader: ScriptLoaderService) { }

  ngOnInit(): void {
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
