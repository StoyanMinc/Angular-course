import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from 'src/types/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themes: Theme[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
