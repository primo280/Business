export default function AffiliateCard({ code, earnings }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-500">Votre code de parrainage : {code}</h2>
      <p className="mt-2 text-gray-700">Gains actuels : {earnings} €</p>
    </div>
  );
}