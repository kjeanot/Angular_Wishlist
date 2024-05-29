import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { WishItem } from '../../shared/models/wishItem';
import { WishListItemComponent } from '../../app/wish-list-item/wish-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [AppComponent, CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() items : WishItem[] = [];



}
