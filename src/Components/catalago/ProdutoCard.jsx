import React from "react";
import "./ProdutoCard.css";

export default function ProdutoCard({ imagem, nome, descricao, preco }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} className="produto-imagem" />
      <div className="produto-info">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>R$ {preco.toFixed(2)}</strong>
      </div>
    </div>
  );
}
