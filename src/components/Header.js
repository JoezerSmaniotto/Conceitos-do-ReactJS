import React from 'react';

export default function Header({title}){ // Children é todo o conteudo que o componente recebeu
    return(
      <header>
        <h1>{title}</h1>
      </header>
    );
}
