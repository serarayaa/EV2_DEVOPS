export default function Reserva(){
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    alert(`Solicitud enviada: ${data.get("nombre")} — ${data.get("servicio")}`);
    e.currentTarget.reset();
  };
  return (
    <section className="section container">
      <h2>Reserva tu hora</h2>
      <form onSubmit={submit} className="grid" style={{gridTemplateColumns:"1fr 1fr", gap:"1rem"}}>
        <label>Nombre<input name="nombre" required/></label>
        <label>Teléfono<input name="telefono" required/></label>
        <label style={{gridColumn:"1 / -1"}}>Servicio
          <select name="servicio" required>
            <option value="">Selecciona…</option>
            <option>Rostro completo</option><option>Axilas</option><option>Brazos</option>
            <option>Piernas completas</option><option>Full rebaje</option>
            <option>Abdomen</option><option>Glúteos</option>
          </select>
        </label>
        <label style={{gridColumn:"1 / -1"}}>Mensaje
          <textarea name="mensaje" rows="4"/>
        </label>
        <button className="btn btn-primary" type="submit">Enviar</button>
      </form>
      <p className="note">Te contactaremos para confirmar fecha y hora.</p>
    </section>
  );
}
