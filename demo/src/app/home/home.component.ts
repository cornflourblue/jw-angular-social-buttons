import { Component } from '@angular/core';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    url = 'http://jasonwatmore.com';
    text = `Jason Watmore's Blog | A Web Developer in Sydney`;
    imageUrl = 'http://jasonwatmore.com/_content/images/jason.jpg';
}