import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'valencia-contacts-landing',
  templateUrl: './contacts-landing.component.html',
  styleUrls: ['./contacts-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsLandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
