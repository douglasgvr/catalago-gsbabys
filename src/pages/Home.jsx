import React, { useState } from "react";
import MenuMarcas from "../Components/layout/MenuMarcas";
import ProdutoCard from "../Components/catalago/ProdutoCard";
import { produtos } from "../data/produtos";
import "./Home.css";

export default function Home() {
  const [marcaSelecionada, setMarcaSelecionada] = useState("");

  const produtosFiltrados = marcaSelecionada
    ? produtos.filter((produto) => produto.marca === marcaSelecionada)
    : [];

  return (
    <div className="produtos-grid">
      <MenuMarcas onSelecionarMarca={setMarcaSelecionada} />
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
        {marcaSelecionada
          ? `Produtos da marca ${marcaSelecionada}`
          : "Selecione uma marca acima"}
      </h2>
      <div className="produto-grid">
        {produtosFiltrados.map((produto) => (
          <ProdutoCard
            key={produto.id}
            imagem={`/assets/${produto.imagem}`}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
          />
        ))}
      </div>
    </div>
  );
}
