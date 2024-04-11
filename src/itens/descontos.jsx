import React from 'react';

const DescontosTotal = ({qtd}) => {

    return (
        <section>
                    
            
    <div style={{left: 328, top: 599, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Total </div>
    <div style={{left: 328, top: 639, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>de descontos<br/></div>
    <div style={{left: 528, top: 639, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>{qtd}<br/></div>
 
        </section>
    );
}

export default DescontosTotal;
