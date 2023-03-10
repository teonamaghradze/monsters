import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;

    return (
      <div className="card-list">
        {filteredMonsters.map((el, i) => (
          <Card key={i} el={el} />
        ))}
      </div>
    );
  }
}

export default CardList;
