import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { getCharacthers } from "./services/getCharacthers";
import Form from "./components/Form"
export default class App extends Component {
  INITIAL_PAGE = 1;
  state = {
    page: this.INITIAL_PAGE,
    data: { characters: [] },
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
    this.setState({ page: this.state.page + 1 }, function () {
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
    });
  };

  handelOnChange = (e) => {
    this.setState(
      {
        keyword: e.target.value,
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate", nextProps, nextState);
  //   return true
  // }


  render() {
    const CardList = lazy(() => import("./components/CardList"));
    return (
      <div className="App">
      <Form page={this.state.page}/>
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
          <div>
            <Suspense fallback={<h1>Loading...</h1>}>
              <CardList
                className="cardlist"
                characters={this.state.data.characters}
              />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
