import { FC, useState, Fragment, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Image } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";

interface currencieProps {
  simplified: boolean;
}

const Cryptocurrencies: FC<currencieProps> = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = cryptosList?.data.coins.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptosList, searchTerm]);

  return (
    <Fragment>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto Currency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency: any) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <Image
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt="icon crypto"
                    preview={false}
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}&#37;</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Cryptocurrencies;
