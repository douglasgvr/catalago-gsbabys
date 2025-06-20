import "./MenuMarcas.css";

export default function MenuMarcas() {
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
        <span key={index} className="menu-item">
          {marca}
        </span>
      ))}
    </nav>
  );
}
