import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Maths', 'English', 'Hindi', 'Science', 'Sports'],
      datasets: [
          {
              label: 'Attended Lectures',
              data: [4, 5, 6, 3, 8],
              borderColor: 'rgb(255,255,255,0)',//transparent
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(53, 138, 237)',
                'rgb(255, 105, 86)',
                'rgb(25,21, 86)',


              ],     
              borderJoinStyle:'bevel',
              hoverOffset: 24,
              spacing:6
              
            }, 
          ]
        })
        setChartOptions({
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Attendance',
              color:'#111'
            },
            
          },
          maintainAspectRatio: false,
          responsive: true,
          color:'#111'
  })
}, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-2 border rounded-lg bg-gradient-to-r from-[#4568dc]/40 to-[#b06ab3]/30'>
      <Doughnut data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
