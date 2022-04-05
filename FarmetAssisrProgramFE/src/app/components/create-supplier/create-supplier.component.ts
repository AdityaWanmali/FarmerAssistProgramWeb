import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/service/supplier.service';
import { Supplier } from 'src/app/supplier';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css'],
})
export class CreateSupplierComponent implements OnInit {
  supplier: Supplier = new Supplier(0, '', '', '');
  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveSupplier() {
    this.supplierService.createSupplier(this.supplier).subscribe(
      (data) => {
        console.log(data);
        this.goToSupplierList();
      },
      (error) => console.log(error)
    );
  }

  goToSupplierList(): void {
    this.router.navigate(['/suppliers']);
  }

  onSubmit() {
    console.log(this.supplier);
    alert('Employee created successfully');
    this.saveSupplier();
  }
}
