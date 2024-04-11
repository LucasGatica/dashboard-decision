import React from 'react';
import { Chart } from 'primereact/chart';

const Pizza = ({itens}) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                data: itens,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#8A2BE2',
                    '#3CB371',
                    '#BA55D3',
                    '#FF4500'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#8A2BE2',
                    '#3CB371',
                    '#BA55D3',
                    '#FF4500'
                ]
            }
        ]
    };

    return (
        <div className="p-grid p-nogutter">
            <div className="p-col-12">
                <div className="card">
                    <h1>Total Sales</h1>
                    <Chart type="pie" data={data} />
                </div>
            </div>
        </div>
    );
};

export default Pizza;
