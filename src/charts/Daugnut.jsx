import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

function DogChart({chartData}){
    return <Doughnut data={chartData} /> 
}

export default DogChart;