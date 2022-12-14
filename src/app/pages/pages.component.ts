import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../auth/settings.service';

declare function customInitFunctions():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    customInitFunctions()
  }

}
