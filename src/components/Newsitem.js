import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl ,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl? imageUrl : "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/07/astroid-reuters-1720336613.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsitem;
