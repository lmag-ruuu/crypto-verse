import { FC, Fragment } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../../services/cryptoApi";

import Loader from "../Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges: FC = () => {
  const { data, isFetching } = useGetExchangesQuery({});
  const exchangesList = data?.data?.exchanges;
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        <Col span={24}>
          <Collapse>
            <Panel
              key={1}
              showArrow={false}
              header={
                <Row>
                  <Col span={24}>
                    <Text>Click</Text>
                  </Col>
                </Row>
              }
            >
              <Text>
                This section can no longer be displayed, the API used to obtain
                the exchanges is now paid, and this app is only a demo.
              </Text>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
