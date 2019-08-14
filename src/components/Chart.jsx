import React from 'react';
import { LineChart, Line } from 'recharts';

const data = 
[
  { date: '2019-08-14', price: '285.4500' },
  { date: '2019-08-13', price: '292.5500' },
  { date: '2019-08-12', price: '288.0700' },
  { date: '2019-08-09', price: '291.6200' },
  { date: '2019-08-08', price: '293.6200' },
  { date: '2019-08-07', price: '287.9700' },
  { date: '2019-08-06', price: '287.8000' },
  { date: '2019-08-05', price: '283.8200' },
  { date: '2019-08-02', price: '292.6200' },
  { date: '2019-08-01', price: '294.8400' },
  { date: '2019-07-31', price: '297.4300' },
  { date: '2019-07-30', price: '300.7200' },
  { date: '2019-07-29', price: '301.4600' },
  { date: '2019-07-26', price: '302.0100' },
  { date: '2019-07-25', price: '300.0000' },
  { date: '2019-07-24', price: '301.4400' },
  { date: '2019-07-23', price: '300.0300' },
  { date: '2019-07-22', price: '297.9000' },
  { date: '2019-07-19', price: '297.1700' },
  { date: '2019-07-18', price: '298.8300' },
  { date: '2019-07-17', price: '297.7400' },
  { date: '2019-07-16', price: '299.7100' },
  { date: '2019-07-15', price: '300.7500' },
  { date: '2019-07-12', price: '300.6500' },
  { date: '2019-07-11', price: '299.3100' },
  { date: '2019-07-10', price: '298.6100' },
  { date: '2019-07-09', price: '297.1900' },
  { date: '2019-07-08', price: '296.8200' },
  { date: '2019-07-05', price: '298.4600' },
  { date: '2019-07-03', price: '298.8000' },
  { date: '2019-07-02', price: '296.4300' },
  { date: '2019-07-01', price: '295.6600' },
  { date: '2019-06-28', price: '293.0000' },
  { date: '2019-06-27', price: '291.5000' },
  { date: '2019-06-26', price: '290.4700' },
  { date: '2019-06-25', price: '290.7600' },
  { date: '2019-06-24', price: '293.6400' },
  { date: '2019-06-21', price: '294.0000' },
  { date: '2019-06-20', price: '295.8600' },
  { date: '2019-06-19', price: '293.0600' },
  { date: '2019-06-18', price: '292.4000' },
  { date: '2019-06-17', price: '289.3700' },
  { date: '2019-06-14', price: '289.2600' },
  { date: '2019-06-13', price: '289.5800' },
  { date: '2019-06-12', price: '288.3900' },
  { date: '2019-06-11', price: '288.9000' },
  { date: '2019-06-10', price: '288.9700' },
  { date: '2019-06-07', price: '287.6500' },
  { date: '2019-06-06', price: '284.8000' },
  { date: '2019-06-05', price: '282.9600' },
  { date: '2019-06-04', price: '280.5300' },
  { date: '2019-06-03', price: '274.5700' },
  { date: '2019-05-31', price: '275.2700' },
  { date: '2019-05-30', price: '279.0300' },
  { date: '2019-05-29', price: '278.2700' },
  { date: '2019-05-28', price: '280.1500' },
  { date: '2019-05-24', price: '282.7800' },
  { date: '2019-05-23', price: '282.1400' },
  { date: '2019-05-22', price: '285.6300' },
  { date: '2019-05-21', price: '286.5100' },
  { date: '2019-05-20', price: '283.9500' },
  { date: '2019-05-17', price: '285.8400' },
  { date: '2019-05-16', price: '287.7000' },
  { date: '2019-05-15', price: '285.0600' },
  { date: '2019-05-14', price: '283.4000' },
  { date: '2019-05-13', price: '280.8600' },
  { date: '2019-05-10', price: '288.1000' },
  { date: '2019-05-09', price: '286.6600' },
  { date: '2019-05-08', price: '287.5300' },
  { date: '2019-05-07', price: '287.9300' },
  { date: '2019-05-06', price: '292.8200' },
  { date: '2019-05-03', price: '294.0300' },
  { date: '2019-05-02', price: '291.1800' },
  { date: '2019-05-01', price: '291.8100' },
  { date: '2019-04-30', price: '294.0200' },
  { date: '2019-04-29', price: '293.8700' },
  { date: '2019-04-26', price: '293.4100' },
  { date: '2019-04-25', price: '292.0500' },
  { date: '2019-04-24', price: '292.2300' },
  { date: '2019-04-23', price: '292.8800' },
  { date: '2019-04-22', price: '290.2700' },
  { date: '2019-04-18', price: '290.0200' },
  { date: '2019-04-17', price: '289.4500' },
  { date: '2019-04-16', price: '290.1600' },
  { date: '2019-04-15', price: '289.9700' },
  { date: '2019-04-12', price: '290.1600' },
  { date: '2019-04-11', price: '288.2100' },
  { date: '2019-04-10', price: '288.2900' },
  { date: '2019-04-09', price: '287.3100' },
  { date: '2019-04-08', price: '288.7900' },
  { date: '2019-04-05', price: '288.5700' },
  { date: '2019-04-04', price: '287.1800' },
  { date: '2019-04-03', price: '286.4200' },
  { date: '2019-04-02', price: '285.9700' },
  { date: '2019-04-01', price: '285.8300' },
  { date: '2019-03-29', price: '282.4800' },
  { date: '2019-03-28', price: '280.7100' },
  { date: '2019-03-27', price: '279.6500' },
  { date: '2019-03-26', price: '281.1200' },
  { date: '2019-03-25', price: '279.0400' }
]


const renderLineChart = props => {
  
  // const data = props.data
return(
  <div>
  <LineChart width={1000} height={1000} data={data}>
    <Line type="monotone" dataKey="price" stroke="#8884d8" />
  </LineChart>
  {console.log(data)}
  </div>
)
};

export default renderLineChart;