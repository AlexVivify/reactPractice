import React, { Component } from "react";

export default class Counter extends Component {
  //kod kreiranja single source if truth moramo imati samo jedan state
  //sva deca naseg glavnog elementa ce preuzimati podatke od roditelja
  // state = {
  //   count: this.props.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag} </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  //ovo je jedan nacin da se poveze standalone funckija sa objektom
  //drugi nacin je arrow function

  //////////////////////////////////////////////

  //ne treba nam ni handle increment
  // handleIncrement = product => {
  // this.state.count + 1; ovo nece raditi jer je this undefined
  //razlog je funckcija u kojoj se nalazi
  //ako je funkcija vezana za objekat, npr obj.function onda se this odnosi bas na taj objekat
  //ako je standalone funkcija this je undefined
  //u reactu ne radi direktno menjanje elemenata
  //this.state.count++; nece raditi!!
  //moramo naglasiti reactu sta se desava odnosno sta menjamo

  //   this.setState({ count: this.state.count + 1 });
  // };

  handleDelete = () => {
    console.log("dasas");
  };

  render() {
    console.log("Counter ", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          //kada hocemo da prosledjujemo parametre u funkciju, onda mozemo napisati ovako
          //arrow funkcija koja ce pozivati nasu funkciju i onda samo prosledimo parametar
          onClick={() => this.props.onIncrement(this.props.id)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.count === 0 ? "warning" : "primary";
    classes += " m-2";
    return classes;
  }

  formatCount() {
    const { count } = this.props.id;
    return count === 0 ? "Zero" : count;
  }
}
