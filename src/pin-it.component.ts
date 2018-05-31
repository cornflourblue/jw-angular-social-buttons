import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'pin-it',
    template: `<a href="//www.pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}" data-pin-do="buttonPin" data-pin-config="beside"></a>`
})

export class PinItComponent implements AfterViewInit {
    @Input() url = location.href;
    @Input() media = '';
    @Input() description = '';

    constructor() {
        // load pinterest sdk if required
        const url = 'https://assets.pinterest.com/js/pinit.js';
        if (!document.querySelector(`script[src='${url}']`)) {
            let script = document.createElement('script');
            script.src = url;
            script['data-pin-build'] = 'parsePins';
            document.body.appendChild(script);
        }
    }

    ngAfterViewInit(): void {
        // render pin it button
        window['parsePins'] && window['parsePins']();
    }
}