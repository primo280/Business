import './globals.css'; // Assurez-vous que vous importez votre CSS global

export const metadata = {
  title: 'Global-Business',
  description: 'Une description de votre application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
