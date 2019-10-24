import React, { Component } from 'react';
import iconBook from './images/book.svg';
import iconChart from './images/chart.svg';
import iconGear from './images/gear.svg';
import iconPlay from './images/play.svg';
import iconPlus from './images/plus.svg';
import iconStack from './images/stack.svg';
import iconHappy from './images/emoji-happy.png';
import './css/App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      dataRoute: 'http://rodrigofelipe.com.br/testes/wp-headless/wp-json/wp/v2/posts/'
    };
  }



  render() {

    return (

      <div className="app">

        <nav className="nav-primary animated bounceInDown delay-2s">
          <div className="aux center w-90">
            <ul>
              <li className="nav-active" id="nav-all-items">
                <img src={iconStack} alt="icon-stack" /> todos
              </li>
              <li id="nav-books">
                <img src={iconBook} alt="icon-book" /> e-books
              </li>
              <li id="nav-chart">
                <img src={iconChart} alt="icon-chart" /> infográficos
              </li>
              <li id="nav-webinar">
                <img src={iconPlay} alt="icon-play" /> webinar
              </li>
              <li id="nav-gear">
                <img src={iconGear} alt="icon-gear" /> ferramentas
              </li>
            </ul>

            <h1>
              Materiais gratuitos <img src={ iconHappy } alt="icon-happy" />
            </h1>
          </div>
        </nav>


        <ul className="items animated fadeInLeft delay-3s">

          {this.state.items.map((item) =>

            <li className={item.category} key={`item-${item.id}}`}>

              <figure>
                <img src={ item.image } alt={ item.name } className="item-image"/>
              </figure>


              <div className="item-content center-v-h">
                <div className="aux">
                  <h2>{ item.name }</h2>

                  <p className="txt">{ item.description }</p>

                  <a
                    className="item-link"
                    href={ item.link }
                  >
                    <img src={ iconPlus } alt="icon-plus" /> Saiba mais sobre o { item.category }
                  </a>
                </div>
              </div>
            </li>
          )}

        </ul>

      </div>
    );
  }


  componentDidMount(){
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(items => this.setState((prevState, props) => {
        return { items: items.map(this.mapitem)};
      }));
  }


  mapitem(item){
    return {
      id: item.id,
      image: item.acf_fields.image,
      name: item.title.rendered,
      link: item.link,
      description: item.acf_fields.description,
      category: item.acf_fields.type
    }
  }
}

export default App;
