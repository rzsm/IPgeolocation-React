import React, { Component } from "react";
import InfoCard from "./InfoCard";
import getInfo from "../Services/getInfo";
import Loader from "react-loader-spinner";

export default function IpInfo() {
  const [appState, setAppState] = React.useState({
    info: null,
    isLoading: true,
  });

  React.useEffect(() => {
    getInfo().then((data) => {
      setAppState({
        info: data,
        isLoading: false,
      });
    });
  }, []);

  return (
    <>
      {appState.isLoading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <InfoCard info={appState.info} />
      )}
    </>
  );
}
