import {  Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './users.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './form.html',
  styleUrls: ['./users.component.css']
})
export class UsersUpdateComponent implements OnInit {
    public frm: FormGroup | undefined;
    id: any;
    users: any ;
    form!: FormGroup;
    submitted = false;
    action ='edit'
  constructor(private UsersService: UsersService,private route: ActivatedRoute,
    private router: Router,private fb: FormBuilder,) { 
    
  }

  getUser(id: number) {
    
    this.UsersService.getUser(id).subscribe(res => {
        this.users = res.data; 
        const data = res.data;
        this.frm = this.fb.group({
            birthday: new FormControl(data.birthday , [Validators.required]),
            details: new FormControl(data.details , Validators.required),
            email: new FormControl(data.email, Validators.required),
            phone: new FormControl(data.phone, Validators.required),
            type: new FormControl(data.type , Validators.required),
            userName: new FormControl(data.userName , Validators.required)
        }); 
      }) 
  }
  onSubmit(ev:any) {
    console.log(ev);
    return false;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
}
  ngOnInit(): void {
    this.id = this.route.snapshot.params;
    this.getUser(this.id.userId);   
    
  }
  
}
