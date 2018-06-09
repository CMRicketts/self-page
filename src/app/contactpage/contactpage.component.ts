import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  constructor() {
    /*router.events.subscribe((destination) => {
      if (destination instanceof NavigationEnd) {
        if (destination.url === '/email') {
          document.getElementById('email').classList.add('is-active');
          document.getElementById('mail').classList.remove('is-active');
          document.getElementById('online').classList.remove('is-active');
        } else if (destination.url === '/mail') {
          document.getElementById('email').classList.remove('is-active');
          document.getElementById('mail').classList.add('is-active');
          document.getElementById('online').classList.remove('is-active');
        } else if (destination.url === '/online') {
          document.getElementById('email').classList.remove('is-active');
          document.getElementById('mail').classList.remove('is-active');
          document.getElementById('online').classList.add('is-active');
        }
      }
    });
  }*/
  }

  ngOnInit() {
  }

}
