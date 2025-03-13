export default function Footer() {
  return (
    <footer className="bg-green-500 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Trading Academy. Tous droits réservés.</p>
      </div>
    </footer>
  );
}