import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'NeKonverter';
  activeView: 'main' | 'url' | 'connect' = 'main';

  setActiveView(view: 'main' | 'url' | 'connect') {
    this.activeView = view;
  }

  ngOnInit(): void {
  }
}
