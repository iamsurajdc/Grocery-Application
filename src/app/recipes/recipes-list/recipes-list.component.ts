import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test Recipe', 'https://bit.ly/2BwRBOE'),
    new Recipe('A Test-2 Recipe', 'This is a Second Recipe', 'https://bit.ly/2S9sF56')

  ];

  constructor() { }

  ngOnInit() {
  }

}
