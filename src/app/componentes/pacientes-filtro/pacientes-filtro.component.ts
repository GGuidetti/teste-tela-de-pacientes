import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacientes-filtro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pacientes-filtro.component.html',
  styleUrl: './pacientes-filtro.component.css'
})
export class PacientesFiltroComponent {
  @Input() searchTerm: string = "";
  @Input() selectedFilter: string = 'Todos os pacientes';
  @Output() filterChanged = new EventEmitter<{ term: string, filter: string }>();
  @Output() searchTermChanged = new EventEmitter<string>();

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterChanged.emit({ term: this.searchTerm, filter: this.selectedFilter });
    this.dropdownOpen = false;
  }

  applyFilter(term: string) {
    this.searchTermChanged.emit(term);
    this.filterChanged.emit({ term: this.searchTerm, filter: this.selectedFilter });
  }
}