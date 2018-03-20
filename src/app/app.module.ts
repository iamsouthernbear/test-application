import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HitsService } from './services/hits.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { SearchByTitlePipe } from './pipes/search-by-title.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    SearchByTitlePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  entryComponents: [ModalComponent],
  providers: [HitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
