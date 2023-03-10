import { Component } from "react";

class Card extends Component {
  render() {
    const { el } = this.props;
    return (
      <div>
        {" "}
        <div className="card-container" key={el.id}>
          <img
            alt="monster"
            src={`https://robohash.org/${el.id}?set=set2&size=180x180`}
          />
          <h2 key={el.id}>{el.name}</h2>
          <p>{el.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
