import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message: any;

  constructor(private apiService: ApiService) { };

  ngOnInit(): void {
    this.apiService.get().subscribe(data => {
      this.message = data;
  });
  }
}
