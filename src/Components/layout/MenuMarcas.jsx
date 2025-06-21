import "./MenuMarcas.css";

export default function MenuMarcas({ onSelecionarMarca }) {
  const marcas = [
    "Pampers",
    "BabySec",
    "Personalidade",
    "PomPom",
    "Personal",
    "Cremer",
    "Huggies",
  ];

  return (
    <nav className="menu-marcas">
      {marcas.map((marca, index) => (
        <span
          key={index}
          className="menu-item"
          onClick={() => onSelecionarMarca(marca)}
        >
          {marca}
        </span>
      ))}
    </nav>
  );
}
