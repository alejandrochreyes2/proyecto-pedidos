import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];
  loading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 10);
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}