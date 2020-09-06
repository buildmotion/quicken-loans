import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'valencia-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
