import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-me',
  templateUrl: './update-me.component.html',
  styleUrls: ['./update-me.component.css']
})
export class UpdateMeComponent implements OnInit {

  urls:string[] = [""];
  constructor() { }

  ngOnInit() {

  }

}
