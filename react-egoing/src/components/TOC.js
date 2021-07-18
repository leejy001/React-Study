import React, { Component } from "react";

class TOC extends Component {
  render() {
    console.log("TOC render");
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            // data 속성 주기
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              // data-id 값
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
          {/* 
          data 속성 주지 않고 하기
          <a
            href={"/content/" + data[i].id}
            onClick={function (id, e) {
              e.preventDefault();
              // data-id 값
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this, data[i].id)}
          >
            {data[i].title}
          </a> */}
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
