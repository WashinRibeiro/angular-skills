import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let skills = [
      { id: 1, name: 'HTML5', description: 'Experiência sólida em aplicação de boas práticas e uso semântico para estruturar conteúdo web de forma eficiente e acessível.', pic: 'https://files.tecnoblog.net/wp-content/uploads/2014/10/html5.jpg', likes: 1 },
      { id: 2, name: 'CSS3', description: 'Proficiência em CSS3, destacando-se na criação de layouts responsivos para sistemas web, traduzindo designs do Figma e Adobe de maneira fluida e precisa. Habilidade comprovada na implementação de estilos avançados para uma experiência visualmente atraente e funcional.', pic: 'https://img-c.udemycdn.com/course/750x422/4272376_e8f2_2.jpg', likes: 1 },
      { id: 3, name: 'JavaScript', description: 'Domínio em JavaScript, destacando-se na criação de aplicações web interativas e dinâmicas. Habilidade comprovada em utilizar conceitos fundamentais da linguagem, como funções de ordem superior, manipulação de DOM e assincronia, para desenvolver soluções eficientes e escaláveis que atendam às demandas dos projetos web modernos.', pic: 'https://i.pinimg.com/originals/f9/81/9b/f9819bde416ba4e12513ff713e6c930c.jpg', likes: 1 },
      { id: 4, name: 'TypeScript', description: 'Expertise em TypeScript, enfatizando sua utilização para desenvolvimento web robusto e escalável. Capacidade de aproveitar os principais recursos da tecnologia, como tipagem estática, interfaces, e suporte avançado a POO (Programação Orientada a Objetos), para garantir código mais seguro, legível e de fácil manutenção.', pic: 'https://wallpapercave.com/wp/wp8882813.png', likes: 1 },
      { id: 5, name: 'SCSS', description: "Experiência técnica sólida em SCSS, com habilidade na criação de estilos eficientes e modulares para projetos web. Domínio de recursos como variáveis e mixins para garantir uma estilização consistente e fácil de manter."      , pic: 'https://i0.wp.com/techprimelab.com/wp-content/uploads/2020/06/SCSS-or-CSS.jpg?fit=1024%2C576&ssl=1', likes: 1 },
      { id: 6, name: 'Angular', description: "Com sólida experiência em Angular, utilizo ferramentas como Angular Material e RxJs, entre outras, para desenvolver projetos desde a concepção até a integração com API's REST. Abordo temas variados, como leilões, dashboards e sistemas de saúde, garantindo soluções robustas e funcionais.", pic: 'https://i.ytimg.com/vi/mVjYG9TSN88/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEyhWMA8=&rs=AOn4CLAd8M7O1rK30HRH-9RXrVAjhjqCOA', likes: 1 },    
    ];

    return { skills };
  }
}
