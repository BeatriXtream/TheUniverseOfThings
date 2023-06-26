import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: any;
  constructor(private http: HttpClient) {}

  personajes: any[] = [];

  ngOnInit() {
    this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json').subscribe((data: any) => {
      this.personajes = data;
    });

   console.log(this.personajes)
}
}
