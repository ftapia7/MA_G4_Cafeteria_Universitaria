import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

function OrdersList({ orders = [] }) {
  const updateOrderStatus = async (id, newStatus) => {
    const orderRef = doc(db, "orders", id);
    await updateDoc(orderRef, { estado: newStatus });
  };

  return (
    <div className="mt-5">
      <h2 className="mb-3">Tabla de Pedidos</h2>
      <table className="table table-coffee">
        <thead>
          <tr>
            <th>#</th>
            <th>Productos</th>
            <th>Hora Programada</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No hay pedidos todavía
              </td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>
                  {order.productos?.map((p, idx) => (
                    <div key={idx}>
                      {p.plato} x{p.cantidad}
                    </div>
                  ))}
                </td>
                <td>{order.horaProgramada || "No definida"}</td>
                <td>
                  <span
                    className={`badge ${
                      order.estado === "pendiente"
                        ? "bg-warning text-dark"
                        : order.estado === "preparado"
                        ? "bg-info text-dark"
                        : "bg-success"
                    }`}
                  >
                    {order.estado}
                  </span>
                </td>
                <td>
                  {order.estado === "pendiente" && (
                    <button
                      className="btn btn-sm btn-coffee me-2"
                      onClick={() => updateOrderStatus(order.id, "preparado")}
                    >
                      Marcar como preparado
                    </button>
                  )}
                  {order.estado === "preparado" && (
                    <button
                      className="btn btn-sm btn-coffee-dark"
                      onClick={() => updateOrderStatus(order.id, "entregado")}
                    >
                      Marcar como entregado
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;