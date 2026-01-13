import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Brain, Users, Shield, Zap, LineChart } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Spécialisé santé',
      description: 'Conçu spécifiquement pour les professionnels du secteur socio-médical'
    },
    {
      icon: Shield,
      title: 'Sécurisé et conforme',
      description: 'Respect total de la confidentialité et des normes RGPD'
    },
    {
      icon: Zap,
      title: 'Simple et efficace',
      description: 'Interface intuitive pour gagner du temps au quotidien'
    },
    {
      icon: LineChart,
      title: 'Suivi optimisé',
      description: 'Gestion complète des dossiers patients et statistiques'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travaillez en équipe et partagez les informations en toute sécurité'
    },
    {
      icon: Brain,
      title: 'Intelligence intégrée',
      description: 'Outils d\'aide à la décision et suggestions personnalisées'
    }
  ];

  return (
    <div className="">
      <section className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold text-primary leading-tight">
              Des solutions numériques pour les professionnels du
              <span className="text-secondary"> secteur socio-médical</span>
            </h1>
            <div className='max-w-2xl mx-auto'>
              <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
                SocioraTech<span className="text-secondary">.</span> développe des outils informatiques modernes
                pour accompagner les orthophonistes, psychologues et structures
                socio-médicales dans leur quotidien.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/produits"
                className="bg-secondary font-semibold text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Découvrir nos produits
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-secondary font-semibold text-secondary px-8 py-4 rounded-lg  transition transform hover:scale-105"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* <div className="mt-20 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-12 shadow-inner">
            <div className="flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <Stethoscope size={64} className="text-secondary" />
                </div>
                <p className="mt-6 text-lg font-medium text-gray-600">
                  Illustration du produit
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary">
              Pourquoi choisir SocioraTech<span className="text-secondary">.</span> ?
            </h2>
            <p className="mt-4 text-lg text-gray-800 font-medium">
              Des outils pensés pour vos besoins spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-12 md:p-16 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Prêt à transformer votre pratique ?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Rejoignez les professionnels qui ont choisi SocioraTech<span className="text-secondary">.</span> pour simplifier
              leur gestion quotidienne.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-secondary px-8 py-4 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 font-semibold shadow-lg"
            >
              Demander une démo gratuite
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
