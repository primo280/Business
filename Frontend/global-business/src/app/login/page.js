"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import for Next.js 13+
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-green-500 text-center">Connexion</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-green-500">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-green-500">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none"
              placeholder="Mot de passe"
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg w-full">
            Se connecter
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
