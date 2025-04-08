import { Component ,Input,OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-zaposleni',
  templateUrl: './add-edit-zaposleni.component.html',
  styleUrls: ['./add-edit-zaposleni.component.css']
})
export class AddEditZaposleniComponent implements OnInit{

  constructor(private service:SharedService) {}

  @Input() emp:any;
  ZaposleniId:string = "";
  ZaposleniIme:string = "";
  Odeljenje:string = "";
  DatumZaposljavanja:string = "";
  Slika:string = "";
  slikaPath:string = "";

  ListaOdeljenja:any = [];

 ngOnInit(): void {
   this.ucitajListuOdeljenja();
 }

ucitajListuOdeljenja(){
  this.service.getAllOdeljenjaImena().subscribe((data:any)=>{
    this.ListaOdeljenja = data;

    this.ZaposleniId = this.emp.ZaposleniId;
    this.ZaposleniIme = this.emp.ZaposleniIme;
    this.Odeljenje = this.emp.Odeljenje;
    this.DatumZaposljavanja = this.emp.DatumZaposljavanja;
    this.Slika = this.emp.Slika;
    this.slikaPath = this.service.PhotoUrl+this.Slika;
  })
}

 dodajZaposlenog(){
   var val = {ZaposleniId:this.ZaposleniId,
             ZaposleniIme:this.ZaposleniIme,
             Odeljenje:this.Odeljenje,
             DatumZaposljavanja:this.DatumZaposljavanja,
             Slika:this.Slika};

   this.service.addZaposlenog(val).subscribe(res=>{
     alert(res.toString());
   })
 }

 updateZaposlenog(){
  var val = {ZaposleniId:this.ZaposleniId,
            ZaposleniIme:this.ZaposleniIme,
            Odeljenje:this.Odeljenje,
            DatumZaposljavanja:this.DatumZaposljavanja,
            Slika:this.Slika};

   this.service.updateZaposlenog(val).subscribe(res=>{
   alert(res.toString());
   })
 }

 uploadPhoto(event:any){
      var file = event.target.files[0];
      const formData:FormData = new FormData();
      formData.append('uploadedFile',file,file.name);

      this.service.UploadPhoto(formData).subscribe((data:any)=>{
        this.Slika = data.toString();
        this.slikaPath = this.service.PhotoUrl+this.Slika;
      })
 }

}
