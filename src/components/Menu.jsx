import { useState } from "react";

function Menu({ items, onAddOrder, confirmationMessage }) {
  const [cart, setCart] = useState([]);
  const [horaProgramada, setHoraProgramada] = useState("");

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...item, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const confirmOrder = () => {
    if (cart.length === 0) return;

    const productosSeleccionados = cart.map((p) => ({
      platoId: p.id,
      plato: p.nombre,
      cantidad: p.cantidad,
    }));

    onAddOrder({
      productos: productosSeleccionados,
      horaProgramada: horaProgramada || new Date().toISOString(),
    });

    setCart([]);
    setHoraProgramada("");
  };

  // Calcular total
  const total = cart.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  return (
    <div className="row">
      {/* Menú de productos */}
      <div className="col-md-8">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">₡{item.precio}</p>
                  {item.disponible ? (
                    <button
                      className="btn btn-success mt-2"
                      onClick={() => addToCart(item)}
                    >
                      <i className="bi bi-plus-lg"></i> Agregar
                    </button>
                  ) : (
                    <span className="text-danger">No disponible</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrito */}
      <div className="col-md-4">
        <h4>Tu pedido</h4>

        {/* Mensaje de confirmación*/}
        {confirmationMessage && (
          <div className="alert alert-success mb-3" role="alert">
            {confirmationMessage}
          </div>
        )}

        {cart.length === 0 ? (
          <p>No has agregado productos.</p>
        ) : (
          <ul className="list-group mb-3">
            {cart.map((p) => (
              <li
                key={p.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {p.nombre} x{p.cantidad}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(p.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Total */}
        <h5>Total: ₡{total}</h5>

        <div className="mb-3">
          <label className="form-label">Hora programada</label>
          <input
            type="time"
            className="form-control"
            value={horaProgramada}
            onChange={(e) => setHoraProgramada(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={confirmOrder}
          disabled={cart.length === 0}
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
}

export default Menu;