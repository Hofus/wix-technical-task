import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IterativeNodesComponent} from 'src/app/iterative-nodes/components/iterative-nodes/iterative-nodes.component';

const routes: Routes = [
  {path: '', component: IterativeNodesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IterativeNodesRoutingModule {
}
