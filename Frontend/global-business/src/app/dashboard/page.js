import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';

export default function Dashboard() {
  const courses = [
    { title: 'Trading 101', description: 'Apprenez les bases du trading.' },
    { title: 'E-commerce', description: 'Découvrez comment créer une boutique en ligne.' },
    { title: 'Marketing Digital', description: 'Maîtrisez les stratégies de marketing digital.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-green-500 text-center">Mes cours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {courses.map((course, index) => (
            <CourseCard key={index} title={course.title} description={course.description} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}