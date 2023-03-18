import React, { useState } from 'react';
import { format } from 'date-fns';

function Negociacoes() {
  const [negociacoes, setNegociacoes] = useState([]);

  function handleNegociacaoSubmit(event) {
    event.preventDefault();
    const [data, quantidade, valor] = event.target.elements;


    if (!data.value || !quantidade.value || !valor.value) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const negociacao = {
      data: new Date( data.value),
      quantidade: quantidade.value,
      valor: valor.value,
    };
    setNegociacoes([...negociacoes, negociacao]);
  }

  return (
    <div>
      <form onSubmit={handleNegociacaoSubmit}>
        <label>
          Data:
          <input name="data" type="date" />
        </label>
        <label>
          Quantidade:
          <input name="quantidade" type="number" />
        </label>
        <label>
          Valor:
          <input name="valor" type="number" />
        </label>
        <button type="submit">Adicionar Negociação</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {negociacoes.map((negociacao) => (
            <tr  key={negociacao.data}>
              <td>{ format(negociacao.data, 'dd/MM/yyyy')}</td>
              <td>{negociacao.quantidade}</td>
              <td>{negociacao.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Negociacoes;


      {/* <ul>
        {negociacoes.map((negociacao) => (
          <li>
            Data: {negociacao.data}, Quantidade: {negociacao.quantidade}, Valor:{' '}
            {negociacao.valor}
          </li>
        ))}
      </ul> */}