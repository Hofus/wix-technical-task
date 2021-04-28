import {NgModule} from '@angular/core';

import {RecursiveNodesRoutingModule} from './recursive-nodes-routing.module';
import {RecursiveNodesComponent} from './components/recursive-nodes/recursive-nodes.component';
import {SharedModule} from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RecursiveNodesComponent
  ],
  imports: [
    SharedModule,
    RecursiveNodesRoutingModule
  ]
})
export class RecursiveNodesModule { }
