import {Component, OnInit} from '@angular/core';
import {NodesService} from 'src/app/core/services/nodes.service';

@Component({
  selector: 'app-iterative-nodes',
  templateUrl: './iterative-nodes.component.html',
  styles: []
})
export class IterativeNodesComponent implements OnInit {

  constructor(public nodesService: NodesService) {
  }

  ngOnInit(): void {
  }

  getDepthPrefix(depth: number): string {
    return '- '.repeat(depth);
  }

}
