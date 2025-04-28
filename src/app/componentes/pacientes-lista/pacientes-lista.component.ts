import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PacientesFiltroComponent } from '../pacientes-filtro/pacientes-filtro.component';
import { PaginacaoComponent } from '../paginacao/paginacao.component';
import { PacientesService } from '../../services/pacientes.service';

interface Paciente {
  [key: string]: any;
  initials: string
  name: string
  status: "Ativo" | "Inativo"
  diagnosis: string
  medication: string
  healthProvider: string
  lastRequest: string
  color: string
  showStatusDropdown: boolean
}

@Component({
  selector: 'app-pacientes-lista',
  standalone: true,
  imports: [FormsModule, CommonModule, PacientesFiltroComponent, PaginacaoComponent],
  templateUrl: './pacientes-lista.component.html',
  styleUrl: './pacientes-lista.component.css'
})
export class PacientesListaComponent implements OnInit {
  searchTerm = "";
  pacientes: Paciente[] = [];
  pacientesFiltrados: Paciente[] = [];
  selectedFilter = 'Todos os pacientes';
  currentPage: number = 1;
  pageSize: number = 10;
  totalRecords: number = 0;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data;
      this.updateFilteredPatients();
    });
   
    this.updateFilteredPatients();
  }

  toggleStatusDropdown(paciente: Paciente) {
    this.pacientes.forEach(p => {
      if (p !== paciente) {
        p.showStatusDropdown = false;
      }
    });
    paciente.showStatusDropdown = !paciente.showStatusDropdown;
  }

  changeStatus(paciente: any, newStatus: string) {
    paciente.status = newStatus;
    paciente.showStatusDropdown = false;
  }

  sortPatients(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.pacientesFiltrados.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      const sortFactor = this.sortDirection === 'asc' ? 1 : -1;
    
      let comparison = (aValue > bValue) ? 1 : ((aValue < bValue) ? -1 : 0);
    
      return comparison * sortFactor;
    });
  }

  updateFilteredPatients(): void {
    let filteredPacientes = this.pacientes;
    if (this.selectedFilter && this.selectedFilter !== 'Todos os pacientes') {
      filteredPacientes = filteredPacientes.filter(paciente => paciente.status === this.selectedFilter);
    }

    if (this.searchTerm) {
      const searchNormalized = this.searchTerm.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      filteredPacientes = filteredPacientes.filter(
        (paciente) =>
          paciente.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchNormalized) ||
          (paciente.diagnosis && paciente.diagnosis.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchNormalized)) ||
          paciente.medication.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchNormalized) ||
          paciente.healthProvider.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchNormalized)||
          paciente.lastRequest.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchNormalized)||
          paciente.status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchNormalized),
      );
    }

    this.totalRecords = filteredPacientes.length;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pacientesFiltrados = filteredPacientes.slice(startIndex, endIndex);
  }

  handleFilterChanged(filterData: { term: string, filter: string }) {
    this.searchTerm = filterData.term;
    this.selectedFilter = filterData.filter;
    this.currentPage = 1;
    this.updateFilteredPatients();
  }

  handleSearchTermChanged(term: string) {
    this.searchTerm = term;
    this.currentPage = 1;
    this.updateFilteredPatients();
  }

  handlePageChanged(page: number) {
    this.currentPage = page;
    this.updateFilteredPatients();
  }

  handlePageSizeChanged(pageSize: number) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.updateFilteredPatients();
  }
}