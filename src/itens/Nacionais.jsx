import React from 'react';

const Nacional = ({qtd}) => {

    return (
        <section>
                    
            <div style={{width: 260, height: 255, left: 246, top: 77, position: 'absolute', background: 'black', borderRadius: 30, border: '4px black solid'}} />
            <div style={{width: 260, height: 255, left: 240, top: 71, position: 'absolute', background: '#f1d1fc', borderRadius: 30, border: '4px black solid'}} />
            <div style={{width: 200, height: 52, left: 280, top: 129, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Vendas Nacionais</div>
            <div style={{width: 150, height: 238, left: 300, top: 228, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>R$ {qtd}<br/></div>
    
        </section>
    );
}

export default Nacional;
