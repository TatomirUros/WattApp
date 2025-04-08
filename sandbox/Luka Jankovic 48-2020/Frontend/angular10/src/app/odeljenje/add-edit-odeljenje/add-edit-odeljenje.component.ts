import { Component ,Input,OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-odeljenje',
  templateUrl: './add-edit-odeljenje.component.html',
  styleUrls: ['./add-edit-odeljenje.component.css']
})
export class AddEditOdeljenjeComponent implements OnInit{

  constructor(private service:SharedService) {}

   @Input() dep:any;
   OdeljenjeId:string = "";
   OdeljenjeIme:string = "";

  ngOnInit(): void {
    this.OdeljenjeId =this.dep.OdeljenjeId;
    this.OdeljenjeIme = this.dep.OdeljenjeIme;
  }

  dodajOdeljenje(){
    var val = {OdeljenjeId:this.OdeljenjeId,
              OdeljenjeIme:this.OdeljenjeIme};

    this.service.addOdeljenje(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateOdeljenje(){
    var val = {OdeljenjeId:this.OdeljenjeId,
      OdeljenjeIme:this.OdeljenjeIme};

    this.service.updateOdeljenje(val).subscribe(res=>{
    alert(res.toString());
    })
  }

}
