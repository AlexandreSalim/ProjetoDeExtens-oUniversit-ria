import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonBadge,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonButton,
    IonBadge,
    IonText,
  ],
})
export class HomePage {
  q1 = false;
  q2 = false;
  q3 = false;

  mensagem = '';
  subtitulo = '';
  pontos = 0;

  calcularResultado() {
    this.pontos = 0;

    if (this.q1) this.pontos++;
    if (this.q2) this.pontos++;
    if (this.q3) this.pontos++;

    if (this.pontos === 3) {
      this.mensagem = 'Parabéns! Você já pratica hábitos sustentáveis.';
      this.subtitulo = 'Continue assim e incentive outras pessoas.';
    } else if (this.pontos === 2) {
      this.mensagem = 'Muito bom! Você já tem bons hábitos sustentáveis.';
      this.subtitulo = 'Com pequenas mudanças, você pode melhorar ainda mais.';
    } else if (this.pontos === 1) {
      this.mensagem = 'Você está no caminho certo.';
      this.subtitulo = 'Tente adotar mais atitudes sustentáveis no dia a dia.';
    } else {
      this.mensagem = 'Você pode começar com pequenas mudanças.';
      this.subtitulo = 'Separar lixo, economizar água e energia já faz diferença.';
    }
  }

  limparResultado() {
    this.q1 = false;
    this.q2 = false;
    this.q3 = false;
    this.mensagem = '';
    this.subtitulo = '';
    this.pontos = 0;
  }
}