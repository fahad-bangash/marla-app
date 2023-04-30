import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Card } from "antd";
const Marla = () => {
  // this is states
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [result, setResult] = useState(0);

  // This is form submit handler
  const formHandler = (e) => {
    e.preventDefault();

    const left1 = parseFloat(left);
    const right1 = parseFloat(right);
    const front1 = parseFloat(front);
    const back1 = parseFloat(back);

    const bothSum1 = (left1 + right1) / 2;
    const bothSum2 = (front1 + back1) / 2;
    let marlaTotalSquareFeet = (bothSum1 * bothSum2).toFixed(2); // round to 2 decimal places
    marlaTotalSquareFeet = parseFloat(marlaTotalSquareFeet); // convert back to float
    const totaldiv = parseFloat(marlaTotalSquareFeet / 272.25).toFixed(2);
    setResult(totaldiv); // store result as string
  };

  // This is resetHandler for reset button
  const resetHandler = () => {
    setLeft("");
    setRight("");
    setFront("");
    setBack("");
    setResult(0);
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <Row>
          <Col span={12} offset={6}>
            <Form.Item>
              <Input
                placeholder="Enter Left value"
                onChange={(e) => setLeft(e.target.value)}
                value={left}
                required
              />
            </Form.Item>
          </Col>
          <Col span={12} offset={6}>
            <Form.Item>
              <Input
                placeholder="Enter Right value"
                onChange={(e) => setRight(e.target.value)}
                value={right}
                required
              />
            </Form.Item>
          </Col>
          <Col span={12} offset={6}>
            <Form.Item>
              <Input
                placeholder="Enter Front value"
                onChange={(e) => setFront(e.target.value)}
                value={front}
                required
              />
            </Form.Item>
          </Col>
          <Col span={12} offset={6}>
            <Form.Item>
              <Input
                placeholder="Enter Back value"
                onChange={(e) => setBack(e.target.value)}
                value={back}
                required
              />
            </Form.Item>
          </Col>
          <Col span={12} offset={6}>
            <Button htmlType="submit" type="primary" block>
              Calculate
            </Button>
            <Button
              danger
              htmlType="button"
              type="primary"
              onClick={resetHandler}
              block
              style={{ marginTop: "10px" }}
            >
              Reset
            </Button>
          </Col>
          <Col span={12} offset={6}></Col>
        </Row>
      </form>

      <br />
      <Row>
        <Col span={12} offset={6}>
          <Card
            style={{
              textAlign: "center",
              border: "1px solid #ddd",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            }}
            title="Result of Marla"
            bordered={true}
          >
            <h2>{result} Marla</h2>
            {/* Display the result and add "Marla" after the result */}
            <p>{(result * 272.25).toFixed(0)} Square Feet</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Marla;
