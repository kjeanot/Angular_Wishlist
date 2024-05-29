import { Component, Output, EventEmitter, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/models/wishItem';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter('0');
  }

  wishFilter : any = '0';

  filters = [
    (item : WishItem) => item,
    (item : WishItem) => item.isComplete,
    (item : WishItem) => !item.isComplete
  ]

  updateFilter(value : any) {
    this.filter = this.filters[value];
    this.filterChange.emit(this.filters[value])
  }

}
