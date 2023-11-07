import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {
constructor(private formBuild:FormBuilder){

}
@Input()count = 0 ;
@Output() newItemEvent = new EventEmitter<string>();
familyMemberDetails = this.formBuild.group({
  name:''
});

  addNewMember(){
    let nameOfFamilyMember:any = this.familyMemberDetails.controls.name.value;
    this.newItemEvent.emit(nameOfFamilyMember);
    this.familyMemberDetails.controls.name.setValue('');
  }
}
