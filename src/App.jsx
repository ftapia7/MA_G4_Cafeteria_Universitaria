import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import UserView from "./components/UserView.jsx";
import StaffView from "./components/StaffView.jsx";

function App() {
  const [menuItems] = useState([
    //Menú de la cafetería
    { id: 1, nombre: "Café Latte", precio: 1500, disponible: true, imagen: "/img/latte.jfif" },
    { id: 2, nombre: "Café Negro", precio: 1600, disponible: true, imagen: "/img/coffee.jpg" },
    { id: 3, nombre: "Matcha", precio: 1200, disponible: true, imagen: "/img/matcha.jfif" },
    { id: 4, nombre: "Jugo de Naranja", precio: 1300, disponible: true, imagen: "/img/naranja.jpg" },
    { id: 5, nombre: "Coca Cola", precio: 800, disponible: true, imagen: "/img/coca.jpg" },

    { id: 6, nombre: "Croissant de Jamón", precio: 1200, disponible: true, imagen: "/img/jamon.jpg" },
    { id: 7, nombre: "Pancakes con Miel", precio: 1800, disponible: true, imagen: "/img/pancakes.jpg" },
    { id: 8, nombre: "Tostadas Francesas", precio: 1700, disponible: true, imagen: "/img/tostadas.jfif" },

    { id: 9, nombre: "Pasta Alfredo", precio: 2500, disponible: true, imagen: "/img/pasta.jfif" },
    { id: 10, nombre: "Sándwich de Pollo", precio: 2000, disponible: true, imagen: "/img/pollo.jfif" },
    { id: 11, nombre: "Hamburguesa Clásica", precio: 2800, disponible: true, imagen: "/img/ham.jfif" },
    { id: 12, nombre: "Pizza Margarita", precio: 3000, disponible: true, imagen: "/img/pizza.jfif" },
    
    { id: 13, nombre: "Ensalada César", precio: 2500, disponible: true, imagen: "/img/salad.jfif" },
    { id: 14, nombre: "Ensalada Mediterránea", precio: 2700, disponible: true, imagen: "/img/ensalada.jfif" },
    
    { id: 15, nombre: "Papas Fritas", precio: 1100, disponible: true, imagen: "/img/papas.jfif" },
    { id: 16, nombre: "Aros de Cebolla", precio: 1000, disponible: true, imagen: "/img/aros.jfif" },
    
    { id: 17, nombre: "Cheesecake de Fresa", precio: 2200, disponible: true, imagen: "/img/fresa.jfif" },
    { id: 18, nombre: "Brownie con Helado", precio: 2400, disponible: true, imagen: "/img/brownie.jfif" },
  ]);

  const [orders, setOrders] = useState([]);
  const [isStaffView, setIsStaffView] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setOrders(data);
    });
    return () => unsub();
  }, []);

  const addOrder = async ({ productos, horaProgramada }) => {
    if (!productos || productos.length === 0) return;

    await addDoc(collection(db, "orders"), {
      productos,
      horaProgramada,
      creadoEn: new Date().toISOString(),
      estado: "pendiente",
    });

    // Mensaje de confirmación
    setConfirmationMessage("Tu pedido fue registrado con éxito.");
    setTimeout(() => setConfirmationMessage(""), 3000);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <span className="navbar-brand">Cafetería Universitaria</span>
        <div className="ms-auto">
          <button
            className="btn btn-outline-primary"
            onClick={() => setIsStaffView(!isStaffView)}
          >
            Cambiar a {isStaffView ? "Vista Usuario" : "Vista Personal"}
          </button>
        </div>
      </nav>

      {isStaffView ? (
        <StaffView orders={orders} />
      ) : (
        <UserView
          menuItems={menuItems}
          onAddOrder={addOrder}
          confirmationMessage={confirmationMessage}
        />
      )}
    </div>
  );
}

export default App;