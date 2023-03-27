import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {

  customerId = 0;
  param$!: Subscription;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.param$ = this.activatedRoute.params.subscribe(
      p => {
        console.info("P value: ", p);
        this.customerId = p["id"];
      }
    );
  }

  ngOnDestroy(): void {
      this.param$.unsubscribe();
  }
}
