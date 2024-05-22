import { Component, Output, EventEmitter} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/models/wishItem';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {

  ngOnInit(): void {
    this.filter.emit(this.filters[0])
  }

  @Output() filter = new EventEmitter<any>();

  wishFilter : any = '0';

  filters = [
    (item : WishItem) => item,
    (item : WishItem) => item.isComplete,
    (item : WishItem) => !item.isComplete
  ]

  changeFilter(value : any) {
    this.filter.emit(this.filters[value])
  }

}
