import { FC } from "react";

import { Spin } from "antd";

const Loader: FC = () => {
  return (
    <div className="loader">
      <Spin />;
    </div>
  );
};

export default Loader;
