import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Link from 'next/link'; // Import de Link pour la navigation

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
       
      <main className="flex-grow p-4">
        <h1 className="text-4xl font-bold text-green-500 text-center">
          Bienvenue sur notre plateforme de cours
        </h1>
        <p className="text-center mt-4">
          Apprenez le trading, l&apos;e-commerce, et le marketing digital avec nos experts.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/register"
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
          >
            S&apos;inscrire
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}