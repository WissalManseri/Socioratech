import { Link } from 'react-router-dom';
import {
  Calendar,
  FileText,
  Users,
  BarChart3,
  Clock,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Products() {
  const orthoFeatures = [
    {
      icon: Calendar,
      title: 'Gestion d\'agenda',
      description: 'Planifiez vos rendez-vous en toute simplicité'
    },
    {
      icon: FileText,
      title: 'Dossiers patients',
      description: 'Centralisation complète des informations médicales'
    },
    {
      icon: Users,
      title: 'Suivi thérapeutique',
      description: 'Historique détaillé des séances et évolutions'
    },
    {
      icon: BarChart3,
      title: 'Statistiques avancées',
      description: 'Analysez votre activité en temps réel'
    },
    {
      icon: Clock,
      title: 'Rappels automatiques',
      description: 'Notifications pour vous et vos patients'
    },
    {
      icon: Shield,
      title: 'Sécurité maximale',
      description: 'Conformité RGPD et chiffrement des données'
    }
  ];

  const benefits = [
    'Interface intuitive et facile à prendre en main',
    'Accessible depuis n\'importe quel appareil',
    'Sauvegarde automatique et sécurisée',
    'Support technique réactif en français',
    'Mises à jour régulières et gratuites',
    'Formation complète incluse'
  ];

  return (
    <div className="min-h-screen">
      {/* <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Nos Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Des outils conçus avec et pour les professionnels du secteur socio-médical
          </p>
        </div>
      </section> */}

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16">
                <div className="inline-block bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                  Disponible maintenant
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  OrthoCabinet
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La solution complète pour les orthophonistes : gérez votre cabinet, suivez vos patients et simplifiez votre activité au quotidien.  
                  <strong>Gagnez du temps et concentrez-vous sur l’essentiel : vos patients !</strong>
                </p>
                <a
                  href="https://www.orthocabinet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
                >
                  Découvrir OrthoCabinet
                  <ArrowRight size={20} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-secondary to-blue-600 p-12 md:p-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center shadow-2xl">
                    <Smartphone size={80} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce dont vous avez besoin pour gérer votre cabinet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orthoFeatures.map((feature, index) => (
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
      </section> */}

      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pourquoi OrthoCabinet ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                OrthoCabinet a été développé en collaboration avec des orthophonistes
                en exercice pour répondre précisément à leurs besoins quotidiens.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-12 shadow-inner">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                  <FileText size={64} className="text-secondary" />
                </div>
                <p className="text-gray-600 font-medium">
                  Capture d'écran de l'interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-12 md:p-16 text-center border-2 border-dashed border-gray-300">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6">
              <Clock size={40} className="text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              D'autres solutions en préparation
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous travaillons sur de nouveaux outils pour les psychologues,
              éducateurs spécialisés et autres professionnels du secteur socio-médical.
            </p>
            <Link
              to="/contact"
              className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-lg hover:bg-secondary hover:text-white transition"
            >
              Être informé des nouveautés
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
