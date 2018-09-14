import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {
    let headerName = new Typed('#headerName', {
      strings: ['NIKHIL MALEWAR'],
      typeSpeed: 40,
      cursorChar: '',
      backSpeed: 0
    });
    let headerDesc = new Typed('#headerDesc', {
      strings: ['Web Designer, Developer and Game Addict...'],
      typeSpeed: 40,
      backSpeed: 0,
      loop: true
    });
  }

  ngAfterViewInit() {

  }


}
