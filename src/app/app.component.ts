import { Component, OnInit } from '@angular/core';
import { HitsService } from './services/hits.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchTitle: string;
  public modalRef: BsModalRef;
  public hits = [];
  private timer = Observable.timer(0, 10000);

  constructor(private service: HitsService,
              private modalService: BsModalService) {
    this.timer.subscribe(() => {
      this.service
        .getHits()
        .subscribe(
          response => this.hits = response['hits'],
          errors => console.log(errors)
        );
    });
  }

  ngOnInit() { }

  public openModal(hit): void {
    const initialState = {
      data: hit
    };
    this.modalRef = this.modalService.show(ModalComponent, {initialState});
  }
}
