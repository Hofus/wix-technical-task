import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormNode} from 'src/app/shared/model/form-node';
import {generate} from 'shortid';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  nodes: BehaviorSubject<FormNode[]> = new BehaviorSubject<FormNode[]>([]);

  constructor() {
    const newNodes = [];

    const formNode = new FormNode();
    formNode.id = generate();
    formNode.data = {name: 'Lorem'};
    formNode.component = 'text';
    formNode.children = [];

    const nodeChild = new FormNode();
    nodeChild.id = generate();
    nodeChild.data = {name: 'Ipsum'};
    nodeChild.component = 'text';
    formNode.children.push(nodeChild);

    const formNode2 = new FormNode();
    formNode2.id = generate();
    formNode2.data = {name: 'Dolor'};
    formNode2.component = 'text';

    newNodes.push(formNode);
    newNodes.push(formNode2);

    this.nodes.next(newNodes);
  }
}
