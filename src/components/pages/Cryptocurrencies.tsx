import { FC, useState, Fragment, useEffect } from "react";
import millify from "millify";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col, Input, Image } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";

interface currencieProps {
  simplified: boolean;
}

const Cryptocurrencies: FC<currencieProps> = ({ simplified }) => {
  let params = useParams();
  return <div>Cryptocurrencies</div>;
};

export default Cryptocurrencies;
