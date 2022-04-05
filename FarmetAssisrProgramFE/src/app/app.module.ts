import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import { CreateSupplierComponent } from './components/create-supplier/create-supplier.component';
import { FormsModule } from '@angular/forms';
import { UpdateSupplierComponent } from './components/update-supplier/update-supplier.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';
import { FilterPipe } from './customPipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SupplierListComponent,
    CreateSupplierComponent,
    UpdateSupplierComponent,
    SupplierDetailsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
