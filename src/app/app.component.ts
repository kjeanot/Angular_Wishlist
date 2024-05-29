import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from '../app/wish-list/wish-list.component';
import { AddWishFormComponent } from '../app/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from '../app/wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'My Angular wishlist';

  items : WishItem[] = [
    new WishItem('Apprendre Angular'),
    new WishItem('Avoir le profil pour les offres d\'emploi', true),
    new WishItem('Etre embauché')
  ];

  filter: any;

  get visibleItems() : WishItem[] {
    return this.items.filter(this.filter)
  };


}
