import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AffiliateCard from '../../components/AffiliateCard';

export default function Affiliate() {
  const affiliateCode = 'AFF12345';
  const earnings = 21; // Exemple de gains

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-green-500 text-center">Programme d'affiliation</h1>
        <AffiliateCard code={affiliateCode} earnings={earnings} />
      </main>
      <Footer />
    </div>
  );
}