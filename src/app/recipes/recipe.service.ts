import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model'


@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Apple Pie", 
      "Classic apple pie like mama used to make.", 
      "https://natashaskitchen.com/wp-content/uploads/2019/10/Apple-Pie-2.jpg",
      [
        new Ingredient('Green Apples', 3),
        new Ingredient('Pastry', 1),
      ]),
    new Recipe(
      "Spaghetti and Meatballs", 
      "Only in Italy can you find deliciousness such as this.", 
      "https://i1.wp.com/smittenkitchen.com/wp-content/uploads//2019/03/perfect-spaghetti-and-meatballs.jpg?fit=1200%2C800&ssl=1",
      [
        new Ingredient('Noodles', 1),
        new Ingredient('Meatballs', 12),
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
