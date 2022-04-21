import React from "react";

const NetworkInfoTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Connection Property</th>
          <th>Connection Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value?.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default NetworkInfoTable;
