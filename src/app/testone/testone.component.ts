import { Component } from '@angular/core';
import { BmserviceService} from "../sysgen/bmservice.service";

@Component({
  selector: 'bm-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.css']
})
export class TestoneComponent {
  data: string [] = [];

  constructor(private bm:BmserviceService) {

  }

  ngOnInit() {
    this.data = this.bm.getData();
  }

  addData(data: string) {
    this.bm.addData(data);
  }

}
