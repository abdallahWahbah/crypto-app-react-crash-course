import React from 'react';
import { Line  } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

  
  const coinPrice = [];
  const coinTimestamp = [];
  console.log(coinHistory);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">{coinName} Price Chart </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Typography.Title>
          <Typography.Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Typography.Title>
        </Col>
      </Row>
      <Line data={data}/>
    </>
  );
};

export default LineChart;