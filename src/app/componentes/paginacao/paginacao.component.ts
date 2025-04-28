import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginacao.component.html',
  styleUrl: './paginacao.component.css'
})
export class PaginacaoComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalRecords: number = 0;
  @Output() pageChanged = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  dropdownSizeOpen = false;

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  setPageSize(size: number): void {
    this.pageSizeChanged.emit(size);
    this.dropdownSizeOpen = false;
  }

  toggleDropdownSize() {
    this.dropdownSizeOpen = !this.dropdownSizeOpen;
  }
}