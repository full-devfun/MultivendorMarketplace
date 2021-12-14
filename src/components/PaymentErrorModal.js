import React from "react";
import { Modal, Button } from "antd";

const PaymentErrorModal = ({ error, setClearError }) => {
  const handleCancel = () => {
    setClearError(false, "");
  };

  return (
    <>
      <Modal
        title={<h1 style={{ color: "red" }}>Payment Error</h1>}
        visible={error.isError}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <h4>Uh Oh...</h4>
        <p>{error.message}</p>
      </Modal>
    </>
  );
};

export default PaymentErrorModal;
