import React from "react";

import useNetwork from "../hooks/useNetwork";
import NetworkInfoTable from "./NetworkInfoTable";

const UseNetworkExample = () => {
  const networkState = useNetwork();
  const {
    online,
    since,
    downLink,
    downLinkMax,
    effectiveType,
    rtt,
    saveData,
    type,
  } = networkState;
  return (
    <div maxWidth="md">
      <div>
        {online ? <span /> : <h1 />}
        <div>
          <h1>Network Stats:</h1>
          <NetworkInfoTable data={networkState} />
        </div>
      </div>
    </div>
  );
};
export default UseNetworkExample;
