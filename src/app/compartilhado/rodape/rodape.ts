import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Logo } from '../logo/logo';

@Component({
  selector: 'app-rodape',
  imports: [RouterLink, Logo],
  templateUrl: './rodape.html',
  styleUrl: './rodape.css',
})
export class Rodape {}
