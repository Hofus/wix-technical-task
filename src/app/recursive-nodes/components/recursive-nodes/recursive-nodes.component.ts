import {Component, OnInit} from '@angular/core';
import {NodesService} from 'src/app/core/services/nodes.service';
import {FormNode} from 'src/app/shared/model/form-node';

@Component({
  selector: 'app-recursive-nodes',
  templateUrl: './recursive-nodes.component.html',
  styles: []
})
export class RecursiveNodesComponent implements OnInit {

  flatNodes: FormNode[] = [];

  constructor(private nodesService: NodesService) {
  }

  ngOnInit(): void {
    this.nodesService.nodes.subscribe(nodes => {
      this.flatNodes = [];
      this.extractNodes(nodes);
    });
  }

  extractNodes(nodes: FormNode[], depth = 1): void {
    if (!nodes) {
      return;
    }

    nodes.forEach(node => {
      const clonedNode = JSON.parse(JSON.stringify(node));
      clonedNode.data.name = '- '.repeat(depth) + clonedNode.data.name;
      clonedNode.children = null;
      this.flatNodes.push(clonedNode);

      this.extractNodes(node?.children, depth + 1);
    });
  }

}
