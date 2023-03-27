# RoutingPractice

## RouterLinks setup
1. create angular project with router links
2. update routes in app-routing.module.ts

## routerLink 
1. route HTML attribute to components
```
<a [routerLink]="['/home']">Home</a>
```
2. route using HTML actions (routing in TS)
HTML
```
<button (click)=>"getHome()"</button>
```
TS
```
constructor(private router:Router)
getHome() {
    this.router.navigate(['/home']);
}
```

## Retrieve param from URL
1. app-routing.module.ts (update routes)
```
const routes: Routes = [
  {path: "customer/:id", component: CustomerComponent },
];
```
2. Component.ts
```
customerId!: number;
param$!: Subscription;

constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
    this.param$ = this.activatedRoute.params.subscribe(
        p => {
            this.customerId = p["id"];
        }
    )
}

ngOnDestroy(): void {
    this.param$.unsubscribe();
}

```
