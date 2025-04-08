import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-odeljenje',
  templateUrl: './show-odeljenje.component.html',
  styleUrls: ['./show-odeljenje.component.css']
})
export class ShowOdeljenjeComponent implements OnInit{

  constructor(private service: SharedService) {}

  ListaOdeljenja:any = [];
  ModalTitle:string = "";
  ActivateAddEdit:boolean = false;
  dep:any;

  ngOnInit(): void {
    this.uzmiListuOdeljenja();
  }

  addClick(){
    console.log(123);
    this.dep={
      OdeljenjeId:0,
      OdeljenjeIme:""
    }
    this.ModalTitle = "Dodaj Odeljenje";
    this.ActivateAddEdit = true;
  }

  closeClick(){
    this.ActivateAddEdit = false;
    this.uzmiListuOdeljenja();
  }

  uzmiListuOdeljenja(){
    this.service.getOdeljenja().subscribe(data=>{
      this.ListaOdeljenja = data;
    });
  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle = "Edit Odeljenje";
    this.ActivateAddEdit = true;
  }

  deleteClick(item:any){
    if(confirm('Da li ste sigurni da zelite da obrisete ovo odeljenje?')){
      this.service.deleteOdeljenje(item.OdeljenjeId).subscribe(data=>{
        alert(data.toString());
        this.uzmiListuOdeljenja();
      })
    }
  }

}
