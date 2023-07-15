import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'app-accordian-list',
  templateUrl: './app-accordian-list.component.html',
  styleUrls: ['./app-accordian-list.component.scss']
})
export class AppAccordianListComponent {
  @Input('expanded') uiExpanded = false;
}
