import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  
  // Função de rolagem suave
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  }

  // NOVA FUNÇÃO: Abrir WhatsApp
  abrirWhatsapp(): void {
    // Coloque o DDD e o número (somente números). Ex: 55 = Brasil, 11 = DDD, 999999999 = Número
    const numero = '5516994250396'; 
    
    // Escreva a mensagem padrão que o cliente já vai enviar
    const mensagem = 'Olá! Acessei o site e gostaria de saber mais sobre os serviços de contabilidade.';
    
    // Monta a URL oficial da API do WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre em uma nova aba
    window.open(url, '_blank');
  }
}