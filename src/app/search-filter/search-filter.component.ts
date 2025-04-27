import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Input() selectedFilter: string = 'Todos os pacientes';
  @Output() searchTermChanged = new EventEmitter<string>();
  @Output() filterChanged = new EventEmitter<string>();

  dropdownOpen: boolean = false;

  onSearchTermChange(event: any) {
    const term = event.target.value;
    this.searchTermChanged.emit(term);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectFilter(filter: string) {
    this.filterChanged.emit(filter);
    this.dropdownOpen = false;
  }
}
