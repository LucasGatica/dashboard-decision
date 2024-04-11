

import React, { useState, useEffect } from 'react';

const Entrada = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://vpsw1950.publiccloud.com.br:19941/api/Consulta/1');
                const data = await response.json();
                setDados(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
                        <div style={{left: 247, top: 776, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Entradas recentes </div>

            {dados.map((item, index) => (
                <div key={index}>
                    <div style={{ left: 247, top: 776+57 + 57 * index, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>{`Valor liquido: R$ ${item['VALOR TOTAL DA OPERAÇÃO']}`}</div>
                    <div style={{ left: 501, top: 776+57 + 57 * index, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Valor da venda: {item['VALOR DA VENDA']}</div>
                    <div style={{ left: 761, top: 776+57 + 57 * index, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Valor do desconto: {item['VALOR DESCONTO']}</div>
                    <div style={{ left: 1040, top: 776+57 + 57 * index, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>{item['DATA DA VENDA']}</div>
                </div>
            ))}
        </section>
    );
}

export default Entrada;
