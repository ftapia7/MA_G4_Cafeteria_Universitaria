import Menu from "./Menu.jsx";

function UserView({ menuItems, onAddOrder, confirmationMessage }) {
  return (
    <div className="container mt-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Menú de la Cafetería</h1>
      <Menu items={menuItems} onAddOrder={onAddOrder} confirmationMessage={confirmationMessage} />
    </div>
  );
}

export default UserView;