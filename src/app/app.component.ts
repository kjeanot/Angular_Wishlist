import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffe', true),
    new WishItem('être embauché')
  ]
  title = 'my wishlist';
  toggleItem = (item : WishItem) => {
    item.isComplete = !item.isComplete;
    console.log(item);
  };
}
