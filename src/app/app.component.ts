import {Component} from '@angular/core';
import {NodesService} from 'src/app/core/services/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'wix-technical-task';

  constructor(private nodesService: NodesService) {
  }

  clearNodes(): void {
    this.nodesService.nodes.next([]);
  }

}
