import * as React from "react";
import Done from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import { useUpdate } from "react-admin";

const StatusButton = ({ record }) => {
  console.log(record);
  const [approve, { loading }] = useUpdate(
    "students",
    record.id,
    { isStatus: true },
    record
  );
  return record && record.isStatus ? (
    <p style={{ textAlign: "center", color: "#16a085" }}>Active</p>
  ) : (
    <Button onClick={approve} color="primary" disabled={loading}>
      <Done color="primary" />
      <span style={{ marginLeft: "0.3rem" }}>inActive</span>
    </Button>
  );
};

export default StatusButton;
