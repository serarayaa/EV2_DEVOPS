// src/components/PriceList.jsx
export default function PriceList({ items }) {
  return (
    <div className="price-list">
      {items.map(({ name, price }) => (
        <div className="price-row" key={name}>
          <span className="pill">{name}</span>
          <span className="amount">${price.toLocaleString("es-CL")}</span>
        </div>
      ))}
      <p className="note">* Valores referenciales. Confirmar al reservar.</p>
    </div>
  );
}
