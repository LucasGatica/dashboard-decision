import React, { useState, useEffect } from 'react';

const CalculaInternacional = () => {
    const [somaValorVenda, setSomaValorVenda] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://vpsw1950.publiccloud.com.br:19941/api/Consulta/1');
                const data = await response.json();
                const soma = data.reduce((acc, curr) => acc + curr['VALOR TOTAL DA OPERA\u00C7\u00C3O'], 0);
                setSomaValorVenda(soma);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    return somaValorVenda;
}

export default CalculaInternacional;
