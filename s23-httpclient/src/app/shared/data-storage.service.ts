import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import "rxjs/Rx";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();

    // return this.httpClient.put(
    //   "https://recipe-book-project-angular.firebaseio.com/recipes.json",
    //   this.recipeService.getRecipes(),
    //   { params: new HttpParams().set("auth", token) }
    // );

    const req = new HttpRequest(
      "PUT",
      "https://recipe-book-project-angular.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
        params: new HttpParams().set("auth", token)
      }
    );

    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient
      .get<Recipe[]>(
        "https://recipe-book-project-angular.firebaseio.com/recipes.json",
        { params: new HttpParams().set("auth", token) }
      )
      .map(recipes => {
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
