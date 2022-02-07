import { FC, Fragment } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as TitleChart,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TitleChart,
  Tooltip,
  Legend
);

const { Title } = Typography;

interface ChartProps {
  coinHistory: any;
  currentPrice: string;
  coinName: string;
}

const LineChart: FC<ChartProps> = ({ coinHistory, currentPrice, coinName }) => {
  console.log(coinHistory, currentPrice, coinName);

  const coinPrice: any[] = [];
  const coinTimestamp: any[] = [];

  coinHistory?.data?.history.forEach((element: any) => {
    coinPrice.push(element.price);
    coinTimestamp.push(new Date(element.timestamp * 1000).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Crypto Value",
      },
    },
  };

  return (
    <Fragment>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </Fragment>
  );
};

export default LineChart;
