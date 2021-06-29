import React from "react";
import { Line } from "react-chartjs-2";
// import { Container } from './styles';
type lineChartProps = {
  clientData: any[];
};
function LineChart(props: lineChartProps) {
  if(props.clientData){
    console.log(props.clientData);
    return (
      <Line
        data={{
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          datasets: [
            {
              label: "Acesso à Rede Wi-fi",
              data: props.clientData,
              fill: { target: "origin", below: "rgba(213, 213, 214, 0.541)" },
              borderColor: "rgb(253, 127, 9)",
              tension: 0.1,
            },
          ], 
        }}
        responsive='true'
        heigth={400}
        width={600}
        options={{
          maintainAspectRatio:true,
          scales:{
            yAxes:[
              {
                ticks:{
                  beginAtZero:true,
                }
              }
            ]
          }
        }}
      ></Line>
    );
  }else{
    return <h1>Loading...</h1>
  }
 
}

export default LineChart;
