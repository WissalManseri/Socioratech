import { Target, Heart, Lightbulb, Users, Shield, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Engagement humain',
      description: 'Nous plaçons l\'humain au cœur de nos solutions pour mieux servir les professionnels de santé et leurs patients.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation continue',
      description: 'Nous innovons constamment pour offrir des outils modernes et adaptés aux évolutions du secteur.'
    },
    {
      icon: Shield,
      title: 'Sécurité et confidentialité',
      description: 'La protection des données médicales est notre priorité absolue, avec une conformité totale au RGPD.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous développons nos solutions en étroite collaboration avec les professionnels du terrain.'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Inspiration',
      description: 'SOCIORA naît d’une idée simple : créer des outils numériques pour simplifier la vie des professionnels socio-médicaux.'
    },
    {
      year: '2025',
      title: 'Collaboration',
      description: 'Travail étroit avec les orthophonistes pour concevoir OrthoCabinet, un outil pensé pour leurs besoins réels.'
    },
    {
      year: '2026',
      title: 'Premiers succès',
      description: 'Lancement officiel d’OrthoCabinet et premiers retours positifs des professionnels qui optimisent désormais leur quotidien.'
    },
    {
      year: 'Demain',
      title: 'Innovation continue',
      description: 'Extension vers de nouvelles solutions personnalisées pour d’autres spécialités du secteur socio-médical, toujours centrées sur l’accompagnement des patients.'
    }
  ];


  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            À propos de SOCIORA
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Une entreprise algérienne engagée dans le développement des solutions numériques pour les professionnels
            du secteur socio-médical
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-secondary px-4 py-2 rounded-lg font-semibold mb-6">
                <Target size={20} />
                Notre mission
              </div>
              <h2 className="text-3xl md:text-2xl font-semibold text-primary mb-6">
                Faciliter le quotidien des professionnels de santé
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                SocioraTech est née d'un constat simple : les professionnels
                du secteur socio-médical méritent des outils numériques adaptés à
                leurs besoins spécifiques.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre objectif est de concevoir des solutions qui leur permettent
                de se concentrer sur l'essentiel : l'accompagnement de leurs patients.
                Nos outils facilitent le suivi quotidien de chaque patient, permettent 
                aux orthophonistes de créer des programmes personnalisés, et centralisent 
                tous les cas dans une interface unique pour un suivi optimal et efficace.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-12 shadow-inner md:mt-24">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                  <Zap size={64} className="text-secondary" />
                </div>
                <p className="text-gray-600 font-medium">
                  Innovation au service de la santé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg font-medium text-gray-600">
              Les valeurs qui orientent notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Notre parcours
            </h2>
            <p className="text-lg font-semibold text-gray-600">
              Une croissance guidée par votre confiance
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary to-blue-300 hidden md:block z-0 "></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-stretch">
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 flex items-center justify-end ">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition w-full md:w-auto text-left">
                          <div className="text-xl font-semibold text-secondary mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-lg font-semibold text-primary mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                      </div>
                      <div className="flex-1 "></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 relative"></div>
                      <div className="flex justify-center">
                        <div className="w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                      </div>
                      <div className="flex-1 flex items-center justify-start ">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition w-full md:w-auto text-left">
                          <div className="text-xl font-semibold text-secondary mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-lg font-semibold text-primary mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


     

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-4xl bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-12 md:p-16 text-white text-center shadow-xl">
            <h2 className=" max-w-3xl mx-auto text-3xl md:text-3xl font-semibold mb-6">
              Rejoignez SocioraTech<span className="text-secondary">.</span> et façonnez l’avenir du secteur socio-médical.
            </h2>
            {/* <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Ensemble, développons des solutions qui simplifient la vie des professionnels du secteur socio-médical.
            </p> */}
            <a
              href="/contact"
              className="inline-block bg-white text-secondary px-8 py-4 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 font-semibold shadow-lg"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
