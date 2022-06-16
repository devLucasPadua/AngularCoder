import { Component, OnInit } from '@angular/core';
import {Colaborador} from "../colaboraores.module";
import {ColaboradoresService} from "../colaboradores.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-colaboradores-create',
  templateUrl: './colaboradores-create.component.html',
  styleUrls: ['./colaboradores-create.component.scss']
})
export class ColaboradoresCreateComponent implements OnInit {

  colaborador: Colaborador = {
    cpf: null,
    matricula: null,
    nome: "",
    sobrenome: "",
    email: "",
    telefone: null,
    cargo: "",
    empresa: "",
    supervisor: "",
    perfil: "",
    permissao: ""
  }

  constructor(private colaboradorService: ColaboradoresService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createColaborador(): void{
    this.colaboradorService.create(this.colaborador).subscribe(() => {
      this.colaboradorService.showMessage('Colaborador cadastrado com sucesso!')})
    this.router.navigate(['/colaboradores']);
  }

  cancelColaborador(): void{
    this.router.navigate(['/colaboradores']);
  }

}
