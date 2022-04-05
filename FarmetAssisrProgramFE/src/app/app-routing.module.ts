import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSupplierComponent } from './components/create-supplier/create-supplier.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import { UpdateSupplierComponent } from './components/update-supplier/update-supplier.component';

const routes: Routes = [
  { path: 'suppliers', component: SupplierListComponent },
  { path: 'create-supplier', component: CreateSupplierComponent },
  { path: 'update-supplier/:supplierId', component: UpdateSupplierComponent },
  { path: 'supplier-details/:supplierId', component: SupplierDetailsComponent },
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
