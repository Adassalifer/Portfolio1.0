import React, { useState } from 'react';
import './App.css';
import Slider from 'react-slick';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <nav>
          <ul>
            <li><a href="#about"><p>Quem sou eu</p></a></li>
            <li><a href="#projects"><p>Projetos</p></a></li>
            <li><a href="#education"><p>Formações</p></a></li>
            <li><button id="darkModeBtn" onClick={toggleDarkMode}><img src="5261864.png" alt="Ícone modo escuro" /></button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <div className="container">
          <img src="1676344143432.jpg" alt="Minha Foto" />
            <h1>Olá, Eu sou a Adassa!</h1>
            <p>Sejam bem-vindos a minha página.</p>
             <p>Sou estudante de Análise e Desenvolvimento de Sistemas.</p>
<p>Sou formada em Design de Moda pela Faculdade Senac Pernambuco e atualmente estou aprimorando meus conhecimentos em programação web, fazendo um curso de fullstack.</p>
<p>Minha paixão por criar soluções inovadoras me levou para a área de tecnologia, onde busco aplicar minha criatividade e senso estético para desenvolver projetos de qualidade e impacto.</p>
<p>Estou animada para continuar a aprender e explorar novas possibilidades em minha jornada como desenvolvedora.</p>
<p>Sou uma profissional dedicada, comunicativa e competente. </p>
<p>Sair da zona de conforto na busca por desafios me incentivou a obter novos aprendizados a fim de desempenhar um bom trabalho.</p>
            <div className="social-media">
              <a href="https://github.com/Adassalifer" target="_blank" rel="noopener noreferrer"><img src="main-qimg-729a22aba98d1235fdce4883accaf81e.webp" alt="Ícone do GitHub" /></a>
              <a href="https://www.linkedin.com/in/adassa-jeanneffer/" target="_blank" rel="noopener noreferrer"><img src="icons8-linkedin-30.png" alt="Ícone do LinkedIn" /></a>
              <a href="https://contate.me/adassa" target="_blank" rel="noopener noreferrer"><img src="icons8-whatsapp-30.png" alt="Ícone do WhatsApp" /></a>
            </div>
          </div>
        </section>

        <section id="projects">
        <h3>Projetos</h3>
          <div className="container">
            <img src="listreact.jpg" alt="App para fazer listas" />
            <div className="project-info">
              <h2>Aplicação para criar listas</h2>
              <p>Aplicação realizada para o desafio do mentor João Louzada do bootcamp Desenvolve do grupo O Boticário, como treinamento para utilizar o framework React.</p>
              <ul className="technologies-used">
                <li><img src="888859.png" alt="Ícone HTML" /></li>
                <li><img src="5968242.png" alt="Ícone CSS" /></li>
                <li><img src="file_type_light_js_icon_130458.png" alt="Ícone JavaScript" /></li>
              </ul>
              <a href="https://projectlistreact-ada-h92p.vercel.app/" button="_blank" rel="noopener noreferrer">Ver projeto</a>
              <a href="https://github.com/Adassalifer/projetoada.list.react" button="_blank" rel="noopener noreferrer">Ver Repositório</a>
           </div>
           
          </div>
<p></p>
          <div className="container">
            <img src="1683084581665.jpg" alt="Aplicação para reproduzir sons" />
            <div className="project-info">
              <h2>App Dj</h2>
              <p>O projeto teve como objetivo a criação de uma aplicação com sons de instrumentos musicais, 
                realizado durante o curso de Javascript no bootcamp do Grupo O Boticário.</p>
              <ul className="technologies-used">
                <li><img src="888859.png" alt="Ícone HTML" /></li>
                <li><img src="5968242.png" alt="Ícone CSS" /></li>
                <li><img src="file_type_light_js_icon_130458.png" alt="Ícone JavaScript" /></li>
              </ul>
              <a href="https://djada.vercel.app/" button="_blank" rel="noopener noreferrer">Ver projeto</a>
              <a href="https://github.com/Adassalifer/Djada" button="_blank" rel="noopener noreferrer">Ver Repositório</a>
           </div>
           
          </div>
          <p></p>
          <div className="container">
            <img src="1_1ypM6tRc580C_1bht2XNrQ.png" alt="Poc CRUD" />
            <div className="project-info">
              <h2>Testando o ORM Prisma com o NestJs</h2>
              <p> Projeto simples onde a tarefa é ler, cadastrar,
                 alterar e deletar um registro no banco de dados. tarefa passada pelo mentor João
                 durante no bootcamp do Grupo O Boticário.</p>
              <ul className="technologies-used">
                <li><img src="nestjs-icon-512x510-9nvpcyc3.png" alt="Ícone nest" /></li>
                <li><img src="prisma_icon_132076.png" alt="Ícone Prisma" /></li>
                <li><img src="file_type_typescript_icon_130108.png" alt="Ícone Typescrypt" /></li>
              </ul>
              <a href="1_1ypM6tRc580C_1bht2XNrQ.png" button="_blank" rel="noopener noreferrer">Ver projeto</a>
              <a href="https://github.com/Adassalifer/NestJS.e.Prisma" button="_blank" rel="noopener noreferrer">Ver Repositório</a>
           </div>
           
          </div>
          <p></p>
          <div className="container">
            <img src="1683084581487.jpg" alt="Pokédex" />
            <div className="project-info">
              <h2>Site de Hogwarts</h2>
              <p> Projeto solicitado pela faculdade SENAC. Etapas: formulários de 
                inscrição com MySql e protótipo e front-end do site desenvolvidos no Figma.</p>
              <ul className="technologies-used">
              <li><img src="figma_logo_icon_147289.png" alt="Ícone Fígma" /></li>

              </ul>
              <a href="https://www.figma.com/proto/ebAuR5dPm7yiYhsQBfxFuT/Hogwarts-P.i?page-id=0%3A1&type=design&node-id=1-
              7&viewport=519%2C354%2C0.04&scaling=scale-down&starting-point-node-id=1%3A7" button="_blank" rel="noopener noreferrer">Ver protótipo</a>
              <a href="https://www.figma.com/file/ebAuR5dPm7yiYhsQBfxFuT/Hogwarts-P.i?node-id=0%3A1&t=rqkMcRuZB9Ub0TQz-1" button="_blank" rel="noopener noreferrer">Ver Repositório</a>
           </div>
           
          </div>
          <p></p>
          <div className="container">
            <img src="IMG_20230522_122137.jpg" alt="Pokédex" />
            <div className="project-info">
              <h2>Pokédex</h2>
              <p> Pokedex estilizado com a biblioteca Javascript React 
                para a criação de componentes reutilizáveis.</p>
              <ul className="technologies-used">
                <li><img src="logo192.png" alt="Ícone React" /></li>
                <li><img src="logo.png" alt="Ícone material ui" /></li>
                <li><img src="file_type_typescript_icon_130108.png" alt="Ícone Typescrypt" /></li>
              </ul>
              <a href="https://github.com/Adassalifer/Pokedex" button="_blank" rel="noopener noreferrer">Ver projeto</a>
              <a href="https://pokedex-roan-tau.vercel.app/" button="_blank" rel="noopener noreferrer">Ver Repositório</a>
           </div>
           
          </div>
          
          
        </section>

   <section id="education">
  <h2>Minha formação</h2>
  <div className="certificates">
    <Slider dots={true} infinite={true} slidesToShow={4} slidesToScroll={4}>
      <div>
      <img src="design.jpg" alt="Designer de Moda" />
      </div>
      <div>
        <img src="programação.jpg" alt="Programação- Phyton" />
      </div>
      <div>
        <img src="newPO.jpg" alt="New PO" />
      </div>
      <div>
        <img src="htmal css.jpg" alt="Html e CSS" />
      </div>
      <div>
        <img src="msqlcert.jpg" alt="MySQL" />
      </div>
      <div>
        <img src="ingles.jpg" alt="Inglês Intermediário" />
      </div>
      <div>
        <img src="javascript.jpg" alt="JavaScript Web" />
      </div>
      <div>
        <img src="figma cert.jpg" alt="Figma" />
      </div>
    </Slider>
  </div>
</section>

      </main>

      <footer>
      <p>Adassa Jeanneffer</p>
      <p>adassamoda@gmail.com</p>
      <p>(81) 99683-8963</p>
      </footer>
    </div>
  );
}

export default App;
