import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from '../../modules/users/state/users.model';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listData;
  @Output() edit: EventEmitter<ID> = new EventEmitter<ID>();

  constructor() { }

  ngOnInit() {
  }

}
