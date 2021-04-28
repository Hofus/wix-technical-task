import {NgModule} from '@angular/core';

import {IterativeNodesRoutingModule} from './iterative-nodes-routing.module';
import {IterativeNodesComponent} from './components/iterative-nodes/iterative-nodes.component';
import {SharedModule} from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IterativeNodesComponent
  ],
  imports: [
    SharedModule,
    IterativeNodesRoutingModule
  ]
})
export class IterativeNodesModule {
}
