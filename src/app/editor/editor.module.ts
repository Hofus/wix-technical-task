import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {EditorComponent} from './components/editor/editor.component';


@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule {
}
