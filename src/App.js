import React, { Component } from 'react';
import iconBook from './images/book.svg';
import iconChart from './images/chart.svg';
import iconGear from './images/gear.svg';
import iconPlay from './images/play.svg';
import iconPlus from './images/plus.svg';
import iconStack from './images/stack.svg';
import iconHappy from './images/emoji-happy.png';
import './css/App.css';
import './css/responsive-ipad.css';
import './css/responsive-smartphones.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      dataRoute: 'http://rodrigofelipe.com.br/testes/wp-headless/wp-json/wp/v2/posts/'
    };

    this.showAllItems = this.showAllItems.bind(this);
    this.showEbooks   = this.showEbooks.bind(this);
    this.showChart    = this.showChart.bind(this);
    this.showWebinar  = this.showWebinar.bind(this);
    this.showGear     = this.showGear.bind(this);
  }


  showAllItems() {
    var a = document.querySelectorAll(".items li");
    var j;
    for (j = 0; j < a.length; j++) {
      a[j].style.display = "block";
    }

    // add | remove class in menu
    var elems = document.querySelectorAll(".nav-primary li");
    [].forEach.call(elems, function(el) {
      el.classList.remove("nav-active");
    });

    document.getElementById('nav-all-items').className = 'nav-active';
  }


  showEbooks() {
    // hide list items
    var a = document.querySelectorAll(".items li");
    var j;
    for (j = 0; j < a.length; j++) {
      a[j].style.display = "none";
    }

    // show list items
    var x = document.getElementsByClassName("e-books");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }

    // add | remove class in menu
    var elems = document.querySelectorAll(".nav-primary li");
    [].forEach.call(elems, function(el) {
      el.classList.remove("nav-active");
    });

    document.getElementById('nav-books').className = 'nav-active';
  }


  showChart() {
    // hide list items
    var a = document.querySelectorAll(".items li");
    var j;
    for (j = 0; j < a.length; j++) {
      a[j].style.display = "none";
    }

    // show list items
    var x = document.getElementsByClassName("infográficos");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }

    // add | remove class in menu
    var elems = document.querySelectorAll(".nav-primary li");
    [].forEach.call(elems, function(el) {
      el.classList.remove("nav-active");
    });

    document.getElementById('nav-chart').className = 'nav-active';
  }


  showWebinar() {
    // hide list items
    var a = document.querySelectorAll(".items li");
    var j;
    for (j = 0; j < a.length; j++) {
      a[j].style.display = "none";
    }

    // show list items
    var x = document.getElementsByClassName("webinar");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }

    // add | remove class in menu
    var elems = document.querySelectorAll(".nav-primary li");
    [].forEach.call(elems, function(el) {
      el.classList.remove("nav-active");
    });

    document.getElementById('nav-webinar').className = 'nav-active';
  }


  showGear() {
    // hide list items
    var a = document.querySelectorAll(".items li");
    var j;
    for (j = 0; j < a.length; j++) {
      a[j].style.display = "none";
    }

    // show list items
    var x = document.getElementsByClassName("ferramentas");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }

    // add | remove class in menu
    var elems = document.querySelectorAll(".nav-primary li");
    [].forEach.call(elems, function(el) {
      el.classList.remove("nav-active");
    });

    document.getElementById('nav-gear').className = 'nav-active';
  }



  render() {

    return (

      <div className="app">

        <nav className="nav-primary animated bounceInDown delay-2s">
          <div className="aux center w-90">
            <ul>
              <li className="nav-active" onClick={this.showAllItems} id="nav-all-items">
                <img src={iconStack} alt="icon-stack" /> todos
              </li>
              <li onClick={this.showEbooks} id="nav-books">
                <img src={iconBook} alt="icon-book" /> e-books
              </li>
              <li onClick={this.showChart} id="nav-chart">
                <img src={iconChart} alt="icon-chart" /> infográficos
              </li>
              <li onClick={this.showWebinar} id="nav-webinar">
                <img src={iconPlay} alt="icon-play" /> webinar
              </li>
              <li onClick={this.showGear} id="nav-gear">
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
