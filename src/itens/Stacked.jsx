import React from 'react';
import { Chart } from 'primereact/chart';

const StackedBarChart = ({itens}) => {
    const data = {
        labels: ['Total'],
        datasets: [
            {
                label: 'Recebidos',
                data: [itens[0]],
                backgroundColor: '#f4fe9a'
            },
            {
                label: 'Concedidos',
                data: [itens[1]],
                backgroundColor: '#fedbcf'
            }
        ]
    };

    let stackedOptions = {
        maintainAspectRatio: false,
        aspectRatio: 1.2,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
    return (
        <div>
            <Chart type="bar" data={data} options={stackedOptions} />
            
        </div>
    );
};

export default StackedBarChart;
