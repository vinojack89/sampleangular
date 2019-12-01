import { Component, OnInit } from '@angular/core';
//import {} from '/src/app/hero.ts';
@Component({
  selector: "app-heroes",
  styleUrls: ["./heroes.component.css"],
  templateUrl: "./heroes.component.html"
})
export class HeroesComponent implements OnInit {
  heroTitle:string = "Heroes";
  constructor() {

  }

  ngOnInit() {

  }
}
