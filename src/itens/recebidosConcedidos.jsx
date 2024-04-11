import React from 'react';
import StackedBarChart from './Stacked';

const RecebidosxConcedidos = ({itens}) => {

    return (
        <section>
                      
    
    <div style={{width: 260, height: 255, left: 1125, top: 77, position: 'absolute', background: 'black', borderRadius: 30, border: '4px black solid'}} />
    <div style={{width: 260, height: 255, left: 1119, top: 71, position: 'absolute', background: 'white', borderRadius: 30, border: '4px black solid'}} />
    <div style={{width: 258, height: 52, left: 1131, top: 19, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Descontos Recebidos e Concedidos</div>
    <div style={{width: 100, height: 10, left: 1200, top: 80, position: 'absolute', color: 'black', fontSize: 10, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>  <StackedBarChart itens={[itens[0],itens[1]]}></StackedBarChart><br/></div>



                  
        </section>
    );
}

export default RecebidosxConcedidos;
