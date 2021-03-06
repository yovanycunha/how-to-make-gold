import { Bar } from 'react-chartjs-2';
import base from '../../../base.json';



const Chart = (props) => {
    const data = {
        labels: [base.labels.silk, base.labels.elethium, base.labels.hide],
        datasets: [{
            label: 'Ratio dos itens',
            data: props.ratios,
            backgroundColor: [
                'rgba(139, 52, 96, 1)',
                'rgba(101, 177, 193, 1)',
                'rgba(84, 60, 58, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(141, 202, 214, 1)',
                'rgba(163, 146, 101, 1)',
            ],
            borderWidth: 1
        }]
    }

    const options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        }
    }

    return (
            <Bar
                data={data}
                options={options}
            />
    );
}

export default Chart;