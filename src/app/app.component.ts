import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Apprendre Angular'),
    new WishItem('Avoir le profil pour les offres d\'emploi', true),
    new WishItem('Etre embauché')
  ];
  visibleItems : WishItem[] = this.items;
  title = 'My Angular wishlist';
  newWishText : string = '';
  wishFilter : String = '0';
  handleFilterChange = (event: any) => {
    this.wishFilter = event;
    this.filterItems(this.wishFilter);
  }
  toggleItem = (item : WishItem) => {
    item.isComplete = !item.isComplete;
    console.log(item);
  };
  addNewWish = () => {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
  filterItems = (selectedFilter : String) => {
    switch(selectedFilter) {
      case '0' :
        this.visibleItems = this.items;
        break;
      case '1' :
        this.visibleItems = this.items.filter(item => item.isComplete);
        break;
      case '2' :
        this.visibleItems = this.items.filter(item => !item.isComplete)
    }
  }
}
