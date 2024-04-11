import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const Central = () => {
    const [somaValoresVendaA, setSomaValoresVendaA] = useState([]);
    const [somaValoresVendaB, setSomaValoresVendaB] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
             
                const responseA = await fetch("http://vpsw1950.publiccloud.com.br:19941/api/Consulta/1");
                const dataA = await responseA.json();
                const somaPorMesA = calcularSomaPorMesA(dataA);
                setSomaValoresVendaA([
                    somaPorMesA.Janeiro,
                    somaPorMesA.Fevereiro,
                    somaPorMesA.Março,
             
                ]);

              
                const responseB = await fetch("http://vpsw1950.publiccloud.com.br:19941/api/Consulta/5");
                const dataB = await responseB.json();
                const somaPorMesB = calcularSomaPorMes(dataB);
                setSomaValoresVendaB([
                    somaPorMesB.Janeiro,
                    somaPorMesB.Fevereiro,
                    somaPorMesB.Março,
              
                ]);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    const calcularSomaPorMes = (data) => {
        const somaPorMes = {
            Janeiro: 0,
            Fevereiro: 0,
            Março: 0,
  
        };

        data.forEach(item => {
            const dataVenda = new Date(item['DATA DA VENDA']);
            const mes = dataVenda.toLocaleString('default', { month: 'long' });
            const mesFormatado = mes.charAt(0).toUpperCase() + mes.slice(1).toLowerCase();
            somaPorMes[mesFormatado] += parseInt(item['VALOR DA VENDA']);
        });

        return somaPorMes;
    };

    const calcularSomaPorMesA = (data) => {
        const somaPorMes = {
            Janeiro: 0,
            Fevereiro: 0,
            Março: 0,
    
        };

        data.forEach(item => {
            const dataVenda = new Date(item['DATA DA VENDA']);
            const mes = dataVenda.toLocaleString('default', { month: 'long' });
            console.log(mes);
            const mesFormatado = mes.charAt(0).toUpperCase() + mes.slice(1).toLowerCase();
            somaPorMes[mesFormatado] += parseInt(item['VALOR DA VENDA']);
        });

        return somaPorMes;
    };

    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março'],
        datasets: [
            {
                label: 'Vendas internacionais ',
                backgroundColor: '#f1d1fc',
                data: somaValoresVendaA
            },
            {
                label: 'Vendas nacionais',
                backgroundColor: '#c1f5c2',
                data: somaValoresVendaB
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Bar Chart Example',
            fontSize: 29
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    return (
        <div>
            <div style={{width: 698, height: 370, left: 687, top: 358, position: 'absolute', background: 'black', borderRadius: 30, border: '4px black solid'}} />
            <div style={{width: 696, height: 366, left: 680, top: 354, position: 'absolute', background: 'white', borderRadius: 30, border: '4px black solid'}} >
                <Chart type="bar" data={data} options={options} />
            </div>
        </div>
    );
};

export default Central;
