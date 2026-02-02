import React, { Component } from "react";

class Coursecard extends Component {
  render() {
    const { data } = this.props;
    const BASEURL = import.meta.env.BASE_URL;

    return (
      <div className="coursecard">
        <img src={BASEURL + data.img} alt={data.name} />
        <h3>{data.name}</h3>

        <p>
          <span>duration</span>
          <span>{data.duration}</span>
        </p>

        <p>
          <span>rate</span>
          <span>₹{data.price}</span>
        </p>
      </div>
    );
  }
}

export default Coursecard;