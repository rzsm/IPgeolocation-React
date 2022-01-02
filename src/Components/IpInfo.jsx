import React, { Component } from "react";
import InfoCard from "./InfoCard";
import getInfo from "../Services/getInfo";
import Loader from "react-loader-spinner";

export default class IpInfo extends Component {
  constructor() {
    super();
    this.state = {
      info: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        info: data,
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
        ) : (
          <InfoCard info={this.state.info} />
        )}
      </>
    );
  }
}
