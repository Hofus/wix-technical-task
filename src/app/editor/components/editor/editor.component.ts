import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NodesService} from 'src/app/core/services/nodes.service';
import {FormNode} from 'src/app/shared/model/form-node';
import Sortable from 'sortablejs';
import {generate} from 'shortid';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styles: []
})
export class EditorComponent implements OnInit, AfterViewInit {

  nodes: FormNode[];
  selectedNode: FormNode;

  dragging = false;

  constructor(private nodesService: NodesService) {
  }

  ngOnInit(): void {
    this.nodesService.nodes.subscribe(nodes => this.nodes = nodes);
  }

  ngAfterViewInit(): void {
    Sortable.create(document.getElementById('componentList'), {
      group: {
        name: 'group',
        pull: 'clone',
        put: false,
      },
      handle: '.grid-component',
      sort: false,
      fallbackOnBody: true,
      forceFallback: true,
      animation: 150,
      swapThreshold: 0.40,
      onEnd: event => this.addNode(event)
    });

    this.initSortable();
  }

  initSortable(): void {
    Object.values(document.getElementsByClassName('drag-container')).forEach(item => {
      Sortable.create(item, {
        group: 'group', handle: '.grid-component',
        animation: 150,
        fallbackOnBody: true,
        forceFallback: true,
        swapThreshold: 0.40,
        onChoose: event => this.selectNode(event),
        onEnd: event => this.moveNode(event)
      });
    });
  }

  selectNode(event: any): void {
    if (this.selectedNode) {
      document.getElementById(this.selectedNode.id).classList.remove('selected');
    }
    event.item.classList.add('selected');
    this.selectedNode = this.findNodeById(event.item.id, this.nodes);
  }

  moveNode(event: any): void {
    const fromId = event.from.id || event.from?.parentElement.id;
    const toId = event.to.id || event.to?.parentElement.id;

    if (fromId === toId && event.oldIndex === event.newIndex) {
      this.dragging = false;
      return;
    }

    const fromList = fromId === 'formParent' ? this.nodes : (this.findNodeById(fromId, this.nodes).children);
    let toList;
    if (toId === 'formParent') {
      toList = this.nodes;
    } else {
      const targetComponent = this.findNodeById(toId, this.nodes);
      if (!targetComponent.children) {
        targetComponent.children = [];
      }
      toList = targetComponent.children;
    }
    const component = fromList.splice(event.oldIndex, 1)[0];
    toList.splice(event.newIndex, 0, component);
    this.dragging = false;
    this.nodesService.nodes.next(this.nodes);
    setTimeout(() => this.initSortable(), 100);

  }

  addNode(event: any): void {
    const toId = event.to.id || event.to?.parentElement.id;
    if (toId === 'nodeList') {
      return;
    }

    let toList;
    if (toId === 'formParent') {
      toList = this.nodes;
    } else {
      const targetNode = this.findNodeById(toId, this.nodes);
      if (!targetNode.children) {
        targetNode.children = [];
      }
      toList = targetNode.children;
    }

    const id = generate();
    const node = {id, component: 'text', data: {name: 'New component with id: ' + id}};
    event.item.parentNode.removeChild(event.item);

    toList.splice(event.newIndex, 0, node);
    setTimeout(() => this.initSortable(), 100);
    this.nodesService.nodes.next(this.nodes);
    this.dragging = false;
  }

  findNodeById(nodeId: string, nodesList: FormNode[]): FormNode {
    let node;
    for (let i = 0; i < nodesList.length; i++) {
      if (nodesList[i].id === nodeId) {
        node = nodesList[i];
      } else if (nodesList[i].children) {
        node = this.findNodeById(nodeId, nodesList[i].children);
      }

      if (node) {
        return node;
      }
    }
  }

}
