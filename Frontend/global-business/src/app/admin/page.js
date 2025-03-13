import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdminDashboard from '../../components/AdminDashboard';

export default function Admin() {
  const users = [{ id: 1, name: 'John Doe' }]; // Exemple de données
  const payments = [{ id: 1, amount: 15 }]; // Exemple de données
  const totalBalance = 150; // Exemple de solde

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-green-500 text-center">Administration</h1>
        <AdminDashboard users={users} payments={payments} totalBalance={totalBalance} />
      </main>
      <Footer />
    </div>
  );
}