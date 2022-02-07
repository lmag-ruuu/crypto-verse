import { FC } from "react";
import { Col, Typography } from "antd";

const { Text } = Typography;

interface statProps {
  value: string;
  icon: any;
  title: string;
}

const Stats: FC<statProps> = ({ value, icon, title }) => {
  return (
    <Col className="coin-stats">
      <Col className="coin-stats-name">
        <Text>{icon}</Text>
        <Text>{title}</Text>
      </Col>
      <Text className="stats">{value}</Text>
    </Col>
  );
};

export default Stats;
