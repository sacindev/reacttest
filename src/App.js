import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { getCharacthers } from "./services/getCharacthers";
import CardList from "./components/CardList";

export default class App extends Component {
  INITIAL_PAGE = 1;
  state = {
    page: this.INITIAL_PAGE,
    data: { loading: true, characters: [] },
    keyword: "",
  };

  componentDidMount() {
    console.log("componentDidMount");
    let { page, keyword } = this.state;
    // let { nextPage } = this.state;
    let promises = getCharacthers(page, keyword);
    promises.then((res) => {
      this.setState({
        data: {
          loading: false,
          characters: res,
        },
      });
    });
  }

  handleNextPagination = () => {
    this.setState(
      { page: this.state.page + 1, data: { loading: true } },
      function () {
        let { page, keyword } = this.state;
        let promises = getCharacthers(page, keyword);
        promises.then((res) => {
          this.setState({
            data: {
              loading: false,
              characters: res,
            },
          });
        });
      }
    );
  };

  handelOnChange = (e) => {
    this.setState(
      {
        keyword: e.target.value,
        data: {
          loading: true,
        },
      },
      function () {
        let { page, keyword } = this.state;
        let promises = getCharacthers(page, keyword);
        promises.then((res) =>
          this.setState({
            data: {
              loading: false,
              characters: res,
            },
          })
        );
      }
    );
  };

  conditionalRender = () => {
    let { loading, characters } = this.state.data;
    if (loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <CardList characters={characters} />
        </div>
      );
    }
  };

  render() {
    // console.log("render");
    let msg = this.conditionalRender();
    return (
      <div className="App">
        <div>
          <button
            style={{ width: "100%", marginBottom: "5em", height: "3em" }}
            type="button"
            onClick={this.handleNextPagination}
          >
            Next
          </button>
          <div>
            <input
              onChange={this.handelOnChange}
              placeholder="Search"
              style={{ width: "80%", marginBottom: "5em", height: "3em" }}
              type="text"
              value={this.state.keyword}
            />
          </div>
          {msg}
        </div>
      </div>
    );
  }
}
