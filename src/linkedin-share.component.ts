import { Component, ElementRef, AfterViewInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'linkedin-share',
    template: `<div #element></div>`
})

export class LinkedInShareComponent implements AfterViewInit {
    @Input() url = location.href;
    @ViewChild('element') element: ElementRef;

    constructor() {
        // load twitter sdk if required
        const url = 'https://platform.linkedin.com/in.js';
        if (!document.querySelector(`script[src='${url}']`)) {
            let script = document.createElement('script');
            script.src = url;
            script.innerHTML = ' lang: en_US';
            document.body.appendChild(script);
        }
    }

    ngAfterViewInit(): void {
        // add linkedin share button script tag to element
        this.element.nativeElement.innerHTML = `<script type="IN/Share" data-url="${this.url}"></script>`;

        // render share button
        window['IN'] && window['IN'].parse();
    }
}