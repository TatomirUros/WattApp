import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-zaposleni',
  templateUrl: './show-zaposleni.component.html',
  styleUrls: ['./show-zaposleni.component.css']
})
export class ShowZaposleniComponent implements OnInit{

  constructor(private service: SharedService) {}

  ListaZaposlenih:any = [];
  ModalTitle:string = "";
  ActivateAddEdit:boolean = false;
  emp:any;

  ngOnInit(): void {
    this.uzmiListuZaposlenih();
  }

  addClick(){
    console.log(123);
    this.emp={
      ZaposleniId:0,
      ZaposleniIme:"",
      Odeljenje:"",
      DatumZaposljavanja:"",
      Slika:"anonymous.png"
    }
    this.ModalTitle = "Dodaj zaposlenog";
    this.ActivateAddEdit = true;
  }

  closeClick(){
    this.ActivateAddEdit = false;
    this.uzmiListuZaposlenih();
  }

  uzmiListuZaposlenih(){
    this.service.getZaposlene().subscribe(data=>{
      this.ListaZaposlenih = data;
    });
  }

  editClick(item:any){
    console.log(item);
    this.emp=item;
    this.ModalTitle = "Edit Zaposlenog";
    this.ActivateAddEdit = true;
  }

  deleteClick(item:any){
    if(confirm('Da li ste sigurni da zelite da obrisete ovo odeljenje?')){
      this.service.deleteZaposlenog(item.ZaposleniId).subscribe(data=>{
        alert(data.toString());
        this.uzmiListuZaposlenih();
      })
    }
  }


}
