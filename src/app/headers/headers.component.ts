import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }
}
