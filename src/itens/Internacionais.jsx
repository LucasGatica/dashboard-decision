import React from 'react';

const Internacional = ({qtd}) => {

    return (
        <section>
                        
            <div style={{width: 260, height: 255, left: 539, top: 77, position: 'absolute', background: 'black', borderRadius: 30, border: '4px black solid'}} />
            <div style={{width: 260, height: 255, left: 533, top: 71, position: 'absolute', background: '#c1f5c2', borderRadius: 30, border: '4px black solid'}} />
            <div style={{width: 250, height: 52, left: 545, top: 129, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Vendas Internacionais</div>
            <div style={{width: 150, height: 238, left: 600, top: 228, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>R$ {qtd}<br/></div>

        </section>
    );
}

export default Internacional;
