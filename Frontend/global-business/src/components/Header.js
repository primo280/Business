import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Trading Academy</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/login" className="hover:underline">Connexion</Link>
            </li>
            <li>
              <Link href="/register" className="hover:underline">Inscription</Link>
            </li>
            <li>
              <Link href="/affiliate" className="hover:underline">Affiliation</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}