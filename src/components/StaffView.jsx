import OrdersList from "./OrdersList.jsx";

function StaffView({ orders }) {
  return (
    <div className="container mt-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4"> Vista del Personal</h1>
      <OrdersList orders={orders} />
    </div>
  );
}

export default StaffView;