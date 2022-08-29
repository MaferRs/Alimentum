import './style.css';

import coracao from '../../assets/home/coracao.png';
import arrowUp from '../../assets/home/arrow-up.png';
import imgPage from '../../assets/home/imgPage.png';
import ilustracao from '../../assets/home/ilustration.png';
import logoPage from '../../assets/home/logoPage.png';
import equipe from '../../assets/home/Fotos-Equipe.png';
import elipse from '../../assets/home/elipse.png';
import bolinhas from '../../assets/home/bolinhas.png';
import rectangle from '../../assets/home/Rectangle.png';
import line1 from '../../assets/home/line-1.png';
import line2 from '../../assets/home/line-2.png';

function Home(){
   return(
      <div className="container-home">
  <header className="header-home">
    <a href="#" className="link-default header__logo">
     <img src={logoPage} alt="logo" />
    </a>
    <nav className="header__menu">
      <a className="link-default menu__item menu__item-active" href="#">
        Quem somos
      </a>
      <a className="link-default menu__item" href="#">
        Benefícios
      </a>
      <a className="link-default menu__item" href="#">
        Contato
      </a>
      <button className="menu__item btn-signin">Login</button>
    </nav>
  </header>
  <main>
    <div className="page1">
      <div className="page-main">
        <div className="page1-text-center">
          <p className="page1-tex1"> Conectando empresas com ONG's </p>
          <p className="page1-tex2">Queremos colaborar com <br></br>zero desperdício </p>
        </div>
        <div className="image">
          <img className='img-page' src={imgPage} alt="Imagem-Frutas" />
        </div>
      </div>
      <div className="container-emp-ong">
        <div className="container-emp">
          <img className="icon-heart1"src={coracao}alt="Coração com uma mão"/>
          <p className="item-title">Sou empresa </p>
          <p className="item-description"> Quero ser parceiro! </p>
          <button className="btn-registration">Cadastre-se!</button>
          <div className="item__arrow-up">
            <img src={arrowUp} alt="seta para cima" />
          </div>
        </div>
        <div className="container-ong">
          <img className="icon-heart1"  src={coracao} alt="Coração com uma mão"
          />
          <p className="item-title">Sou ong </p>
          <p className="item-description"> Quero ser parceiro! </p>
          <button className="btn-registration">Cadastre-se!</button>
          <div className="item__arrow-up">
            <img src={arrowUp} alt="seta para cima" />
          </div>
        </div>
      </div>
    </div>
    <div className="page2">
      <div className="header-page2">
        <p className="numberedList"> Números do desperdício </p>
        <p className="listedUp"> e continua crescendo, tá?</p>
      </div>
      <div className="container-qlt">
        <div className="container-item">
          <p className="container-item__title">+33 milhões</p>
          <p className="container-item__description">
            de pessoas atingidas pela forme no Brasil hoje, quase o dobro em
            relação a 2020.
          </p>
        </div>
        <div className="container-item">
          <p className="container-item__title">1,3 bilhão</p>
          <p className="container-item__description">
            de alimentos que são desperdiçados no mundo todo
          </p>
        </div>
        <div className="container-item">
          <p className="container-item__title">58%</p>
          <p className="container-item__description">
            da população brasileira convive com a insegurança alimentar em grau
            leve, moderado ou grave(fome)
          </p>
        </div>
        <div className="container-item">
          <p className="container-item__title">13,6 milhões</p>
          <p className="container-item__description">
            de brasileiro poderiam ser alimentados apenas com a quantidade de
            alimentos desperdiçados
          </p>
        </div>
      </div>
      <div className="main__page2">
        <img
          className="img_equipe"src={equipe} alt="foto da esquipe desenvolvedora"
        />
        <div className="main__page2_right">
          <p className="main__page2__item__1"> Vamos mudar esses números? </p>
          <p className="main__page2__item__2">
            {" "}
            Somos indignados com o desperdício de alimentos e focados em
            combatê-lo, criamos assim a Alimentum, uma foodtech sem fins
            lucrativos.
          </p>
          <p className="main__page2__item__3">
            {" "}
            Através da nossa plataforma, conectamos Produtos FIFO de Indústrias
            Alimentícias com o Ong's que poderão usá-los como matéria-prima em
            sua produção. Assim, todos que estão envolvidos ajudam a combater o
            desperdício de alimentos perecíveis de uma forma inteligente,
            colocando comida no prato de pessoas que mais precisam e passam por
            insegurança alimentar no brasil.
          </p>
        </div>
      </div>
    </div>
    <div className='page3'>
      <div className='main-page3'>
        <div className='text-page3'>
            <p className='description-page3'>Conheça o nosso selo de empresa participante!</p>
            <p className='description2-page3'>Ao ajudar nossas ONG`s você empresa ganha um 
           selo de empresa comprometida com o zero desperdício</p>
            <p className='description3-page3'>ajudando na sua reputação e criando um movimento, assim, 
            levando mais clientes preocupados com sustentabilidade ambiental.</p>
        </div>
        <div className='ilustracao-page3'>
          <img className='ilustracao-smarthphone' src={ilustracao} alt="smarthphone" />
        </div>
     </div>
    </div>
    <div className='carrossel'>
      <p className='text-carrossel'>Alimento é o que nos move e desperdiçá-lo não é uma opção​.</p>
      <div className='group-carrossel'>
        <div className='card-carrossel'>
          <div className='elipse-card'>
            <img  src={elipse} alt=" elipse" />
            </div>
          <div className='group-text-card'>
            <p className='text1-card'>”Essa parceria esta mudando a forma que destinamos alimentos!”</p>
            <p className='text2-card'>João Reis.<br>
            </br>CEO Supermercados</p>
          </div>
        </div>
        <div className='card-carrossel'>
          <div className='elipse-card'>
            <img  src={elipse} alt=" elipse" />
            </div>
          <div className='group-text-card'>
            <p className='text1-card'>”Essa parceria esta mudando a forma que destinamos alimentos!”</p>
            <p className='text2-card'>João Reis.<br>
            </br>CEO Supermercados</p>
          </div>
        </div>
      </div>
      <img className='bolinhas' src={bolinhas} alt="bolinhas do carrossel" />
    </div>
    <div className='page4'>
      <div className='main-page4'>
        <div className='group-text-page4'>
          <p className='text1-page4'>Faça seu cadastro</p>
          <p className='text2-page4'>Passo 1</p>
          <p className='description-page3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!v</p>
            <button className='button-page4'>Cadastre-se!</button>
        </div>
        <div className='image-page4'>
        <img src={rectangle} alt="retangulo-verde" />
       </div>
      </div>
      <div className='line1-page4'>
        <img  src={line1} alt="linha de conexão" />
      </div>

      <div className='main-page4'>
      <div className='image-page4'>
        <img src={rectangle} alt="retangulo-verde" />
       </div>
        <div className='group-text-page4'>
          <p className='text2-page4'>Passo 2</p>
          <p className='description-page3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!v</p>
            <button className='button-page4'>Cadastre-se!</button>
        </div>
      </div>
      <div className='line1-page4'>
        <img  src={line2} alt="linha de conexão" />
      </div>


      <div className='main-page4'>
        <div className='group-text-page4'>
          <p className='text2-page4'>Passo 3</p>
          <p className='description-page3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!v</p>
            <button className='button-page4'>Cadastre-se!</button>
        </div>
        <div className='image-page4'>
        <img src={rectangle} alt="retangulo-verde" />
       </div>
      </div>
      <div className='line1-page4'>
        <img  src={line1} alt="linha de conexão" />
      </div>

      
      <div className='main-page4'>
      <div className='image-page4'>
        <img src={rectangle} alt="retangulo-verde" />
       </div>
        <div className='group-text-page4'>
          <p className='text2-page4'>Passo 4</p>
          <p className='description-page3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!v</p>
            <button className='button-page4'>Cadastre-se!</button>
        </div>
      </div>
      
    </div>
  </main>
</div>

   )
}
export default Home;