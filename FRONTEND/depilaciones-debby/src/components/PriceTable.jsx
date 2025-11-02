export default function PriceTable({ items }){
  return (
    <table className="table">
      <thead><tr><th>Tratamiento</th><th>Precio</th></tr></thead>
      <tbody>
        {items.map(s => (
          <tr key={s.name}>
            <td>{s.name}</td>
            <td>${s.price.toLocaleString("es-CL")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
