"use client"; // Mark this component as a client component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const countryCodes = [
  { code: "+1", country: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+33", country: "France", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "+49", country: "Germany", flag: "https://flagcdn.com/w40/de.png" },
  { code: "+225", country: "Côte d'Ivoire", flag: "https://flagcdn.com/w40/ci.png" },
  { code: "+237", country: "Cameroun", flag: "https://flagcdn.com/w40/cm.png" },
];

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneCode, setPhoneCode] = useState(countryCodes[0].code);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter(); // Correct usage of useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    router.push("/login"); // Navigate to the login page
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-green-500 text-center">Inscription</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
          <div className="mb-4 flex items-center border rounded p-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="mb-4 flex items-center border rounded p-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="mb-4 flex items-center border rounded p-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="mb-4 flex items-center border rounded p-2">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="mb-4 flex items-center border rounded p-2">
            <FaPhone className="text-gray-500 mr-2" />
            <div className="flex items-center">
              <img src={countryCodes.find(c => c.code === phoneCode)?.flag} alt="flag" className="w-6 h-4 mr-2" />
              <select
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                className="border-none bg-transparent outline-none"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.country})
                  </option>
                ))}
              </select>
            </div>
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
            S'inscrire
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
