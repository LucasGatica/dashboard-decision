import React, { useState, useEffect } from 'react';

const CalcularDescontoConcedido = () => {
    const [somaValorVenda, setSomaValorVenda] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://vpsw1950.publiccloud.com.br:19941/api/Consulta/3');
                const data = await response.json();
                const soma = data.reduce((acc, curr) => acc + curr['VALOR DESCONTO'], 0);
                setSomaValorVenda(soma);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    return somaValorVenda;
}

export default CalcularDescontoConcedido;
