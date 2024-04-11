

import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

const DonutGraph = () => {
 
  const [compraNacional, setSomaValorVenda] = useState(0);
  const [compraInternacional, setSomaValorVenda2] = useState(0);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://vpsw1950.publiccloud.com.br:19941/api/Consulta/6');
              const data = await response.json();
              const soma = data.reduce((acc, curr) => acc + curr['VALOR TOTAL DA OPERA\u00C7\u00C3O'], 0);
              setSomaValorVenda(soma);
          } catch (error) {
              console.error('Erro ao buscar dados da API:', error);
          }
      };

      fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://vpsw1950.publiccloud.com.br:19941/api/Consulta/2');
            const data = await response.json();
            const soma = data.reduce((acc, curr) => acc + curr['VALOR TOTAL DA OPERA\u00C7\u00C3O'], 0);
            setSomaValorVenda2(soma);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    };

    fetchData();
}, []);


  const data = {
    labels: ['Compra nacional', 'Compra Internacional'],
    datasets: [
      {
        data: [compraNacional, compraInternacional],
        backgroundColor: ['#7DF9FF', '#36A2EB'],
        hoverBackgroundColor: ['#7DF9FF', '#36A2EB']
      }
    ]
  };

  return (
    <div>
      <div style={{ width: 409, height: 169, left: 246, top: 358, position: 'absolute', background: 'black', borderRadius: 30, border: '4px black solid' }} />
      <div style={{ width: 409, height: 164, left: 240, top: 354, position: 'absolute', background: 'white', borderRadius: 30, border: '4px black solid' }} />
      <div style={{ left: 326, top: 390, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Compras</div>
      <div style={{ left: 318, top: 420, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Nacionais e</div>
      <div style={{ left: 310, top: 450, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Internacionais</div>

      <div style={{ width: 140, height: 174, left: 490, top: 364, position: 'absolute' }}>
        <Chart type="doughnut" data={data} />
      </div>

    </div>
  );
};

export default DonutGraph;


