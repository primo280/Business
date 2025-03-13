import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Payment() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-green-500 text-center">Paiement</h1>
        <p className="text-center mt-4">Veuillez payer 15 € pour accéder aux cours.</p>
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Payer avec Stripe</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}