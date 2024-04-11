import React from 'react';
import { Chart } from 'primereact/chart';

const NacionalxInternacional = ({itens}) => {
    const data = {
        datasets: [
            {
                data: itens,
                backgroundColor: [
                    '#f1d1fc',
                    '#c1f5c2'
                ],
                hoverBackgroundColor: [
                    '#f1d1fc',
                    '#c1f5c2'
                
                ]
            }
        ]
    };

    return (
        <div className="p-grid p-nogutter">
            <div className="p-col-12">
                <div className="card">
                  
                    <div style={{width: 260, height: 255, left: 832, top: 77, position: 'absolute', background: 'black', borderRadius: 30, border: '4px black solid'}} />
                    <div style={{width: 260, height: 255, left: 826, top: 71, position: 'absolute', background: 'white', borderRadius: 30, border: '4px black solid'}} />

                    <div style={{width: 258, height: 52, left: 831, top: 39, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Vendas Nacional e Internacional</div>

                    <div style={{width: 180, height: 208, left: 870, top: 110, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '900', wordWrap: 'break-word'}}>                  
                        <Chart type="pie" data={data}></Chart> <br/></div>
    
                </div>
            </div>
        </div>
    );
};

export default NacionalxInternacional;
