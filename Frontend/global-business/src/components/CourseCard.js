export default function CourseCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-500">{title}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
}