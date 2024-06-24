import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DailyOrdersChart = () => {
  const [dailyOrders, setDailyOrders] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/pesananHarian')
      .then(res => {
        if (res.data.Status === "Success") {
          setDailyOrders(res.data.Result);
        } else {
          alert("Error fetching daily orders data");
        }
      })
      .catch(err => console.log(err));
  }, []);

  const chartData = {
    labels: ['Pesanan Hari Ini'],
    datasets: [
      {
        label: 'Total Pesanan',
        data: [dailyOrders],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Pesanan Harian',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default DailyOrdersChart;