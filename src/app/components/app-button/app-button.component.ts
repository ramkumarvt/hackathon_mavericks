import {
  Attribute,
  Component, Input
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})

export class AppButtonComponent {
  @Input() class = '';

  @Input() id: any;

  @Input() disabled = false;

  constructor(
    @Attribute('is-primary') public isPrimary: any,
    @Attribute('is-secondary') public isSecondary: any,
    @Attribute('is-small') public isSmall: any,
    @Attribute('is-medium') public isMedium: any,
    @Attribute('is-large') public isLarge: any,
    @Attribute('is-border-less') public isBorderLess: any,
    @Attribute('expand') public expand: any
  ) {
    // button type
    this.isPrimary = this.isPrimary != null;
    this.isSecondary = this.isSecondary != null;

    // button size
    this.isSmall = this.isSmall != null;
    this.isMedium = this.isMedium != null;
    this.isLarge = this.isLarge != null;
    // this.expand Possible values ['block', 'full'] https://ionicframework.com/docs/api/button#expand

    // button style
    this.isBorderLess = this.isBorderLess != null;

    if (!this.isBorderLess) {
      this.class += 'button';
    }
  }
}
