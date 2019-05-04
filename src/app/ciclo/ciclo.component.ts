import { Component, 
  OnInit,
  OnChanges,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges,
DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy {

  @Input() valorIncicial: number = 10;

  constructor() {
    this.log('construtor');
   }

   ngOnChanges(): void {
     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     //Add '${implements OnChanges}' to the class.
     this.log('ngOnChanges');
   }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }
}
