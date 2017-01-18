import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LibModuleModule} from '../src';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, LibModuleModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}