import { Component, OnInit } from '@angular/core';
import {FerramentaCreate} from "../ferramentas.module";
import {FerramentasService} from "../ferramentas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ferramentas-create',
  templateUrl: './ferramentas-create.component.html',
  styleUrls: ['./ferramentas-create.component.scss']
})
export class FerramentasCreateComponent implements OnInit {

  ferramenta: FerramentaCreate = {
    id: undefined,
    codigo: "",
    descricao: "",
    quantidadeTotal: 0,
    valorCompra: 0,
    localizacao: "",
    numeroPatrimonial: "",
    fabricante: "",
    categoriaID: "5138f09b-7dc6-4e06-a983-c182e6d7d173"
  }

  constructor(private ferramentaService: FerramentasService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createFerramenta(): void{
    this.ferramentaService.create(this.ferramenta).subscribe( () => {
      this.ferramentaService.showMessage('Ferramenta cadastrada com sucesso!')})
    this.router.navigate(['/ferramentas']);
  }

  cancelFerramenta(): void{
    this.router.navigate(['/ferramentas']);
  }
}
