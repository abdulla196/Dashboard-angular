import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any ;
  user_id:any ;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private UsersService: UsersService,private route: ActivatedRoute) { 
    
    this.user_id = this.route.snapshot.params
  }

  getUsers() {
    this.UsersService.getUsers().subscribe(res => {
      this.users = res;
      console.log('Post deleted successfully!');
    })
  }
  
  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }
  ngOnInit(): void {
      this.getUsers();
    
  }

}
