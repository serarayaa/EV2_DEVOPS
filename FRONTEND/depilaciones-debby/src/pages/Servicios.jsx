import { services } from "../data/services";
import PriceList from "../components/PriceList";

export default function Servicios() {
  return (
    <section className="section container">
      <h2>Servicios y precios</h2>
      <p className="lead">
        Depilación con cera y láser. Atención cálida, protocolos de higiene y resultados duraderos.
      </p>
      <PriceList items={services} />
      <div style={{marginTop:"1rem"}}>
        <a href="/reserva" className="btn btn-primary">Reservar hora</a>
      </div>
    </section>
  );
}
