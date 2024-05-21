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
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffe', true),
    new WishItem('être embauché')
  ];
  title = 'My Angular wishlist';
  newWishText = '';
  toggleItem = (item : WishItem) => {
    item.isComplete = !item.isComplete;
    console.log(item);
  };
  addNewWish = () => {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
