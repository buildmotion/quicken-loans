import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'valencia-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
