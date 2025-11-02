export default function ServiceCard({ name, price }){
  return (
    <article className="card">
      <div className="card-title">{name}</div>
      <div className="card-price">${price.toLocaleString("es-CL")}</div>
    </article>
  );
}
