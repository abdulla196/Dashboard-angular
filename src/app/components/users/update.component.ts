import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './users.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './form.html',
  styleUrls: ['./users.component.css']
})
export class UsersUpdateComponent implements OnInit {
    public userForm!: FormGroup;
    userId: any;
    users!: User;
    submitted:boolean = false;
    action: string ='edit';

  constructor(private UsersService: UsersService,private route: ActivatedRoute,
    private router: Router,private fb: FormBuilder,) { 
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params;
    this.getUser(this.userId.userId);
  }

  getUser(id: number) {
    this.UsersService.getUser(id).subscribe(res => {
        this.users = res.data; 
        const data = res.data;
        
        this.userForm = this.fb.group({
          birthday: [
            data.birthday, [Validators.required]
          ],
          details: [
            data.details, [Validators.required]
          ],
          email: [
            data.email, [Validators.required]
          ],
          phone: [
            data.phone, [Validators.required]
          ],
          type: [
            data.type, [Validators.required]
          ],
          userName: [
            data.userName, [Validators.required]
          ]
        });
        // this.frm = this.fb.group({
        //     birthday: new FormControl(data.birthday , [Validators.required]),
        //     details: new FormControl(data.details , Validators.required),
        //     email: new FormControl(data.email, Validators.required),
        //     phone: new FormControl(data.phone, Validators.required),
        //     type: new FormControl(data.type , Validators.required),
        //     userName: new FormControl(data.userName , Validators.required)
        // }); 
      }) 
  }

  onSubmit() {
    console.log('submit');
    if (this.userForm.dirty && this.userForm.valid) {
      console.log('userForm is valid >>', this.userForm.value);
    } else {
      this.userForm.markAsTouched();
      this.userForm.markAsDirty();
    }

    // stop here if form is invalid
    // if (this.form.invalid) {
    //     return;
    // }
  }

  get birthday() {
    return this.userForm.get('birthday');
  }

  get details() {
    return this.userForm.get('details');
  }

  get email() {
    return this.userForm.get('email');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get type() {
    return this.userForm.get('type');
  }

  get userName() {
    return this.userForm.get('userName');
  }
  
}
