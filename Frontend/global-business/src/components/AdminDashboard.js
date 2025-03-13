export default function AdminDashboard({ users, payments, totalBalance }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-500">Tableau de bord administrateur</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Utilisateurs inscrits : {users.length}</h3>
        <h3 className="text-lg font-semibold">Paiements reçus : {payments.length}</h3>
        <h3 className="text-lg font-semibold">Solde total : {totalBalance} €</h3>
      </div>
    </div>
  );
}