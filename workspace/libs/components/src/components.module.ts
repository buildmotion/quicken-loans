import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumKeysPipe } from './pipes/enum-keys.pipe';
import { TrustedHtmlPipe } from './pipes/trusted-html.pipe';
// import { LoginComponent } from '../../../security/src/lib/components/login/login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EnumKeysPipe, TrustedHtmlPipe],
  exports: [EnumKeysPipe],
})
export class ComponentsModule {}
