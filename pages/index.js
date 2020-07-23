import { useState, useEffect } from "react";
import Head from "next/head";

import globalStyles from "../styles/globalStyles";
import appContainerStyles from "../styles/appContainerStyles";

import Map from "../components/Map";
import SliderForm from "../components/SliderForm";
import Loading from "../components/Loading";

import { SPLYT_COORDINATES } from "../constants/constants";

export default function Home() {
  const [count, setCount] = useState(1);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (driversCount) => {
    setCount(driversCount);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `api/drivers?latitude=${SPLYT_COORDINATES.lat}&longitude=${SPLYT_COORDINATES.long}&count=${count}`
        );
        const json = await res.json();
        setResult(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [count]);

  return (
    <>
      <div className="container">
        <Head>
          <title>Splyt challenge</title>
        </Head>
        <h1>Splyt challenge</h1>
        <SliderForm onFormSubmit={handleSubmit} defaultCount={count} />

        {/*
          Enhance/Improvement: create proper Error handling component
        */}
        {error && <div>There is an error fetching drivers</div>}

        {/*
              Enhance/Improvement: use 'isLoading' variable to handle Loading state
        */}
        {!result ? <Loading /> : <Map driversList={result.drivers} />}
      </div>

      <style jsx>{appContainerStyles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
