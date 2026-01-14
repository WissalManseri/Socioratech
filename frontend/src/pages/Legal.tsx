import { Scale, Shield, Eye, FileText } from 'lucide-react';

export default function Legal() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Mentions légales
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Informations légales et conditions d'utilisation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scale className="text-secondary" size={28} />
              </div>
              <p className="text-sm font-semibold text-gray-700">Conformité légale</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="text-secondary" size={28} />
              </div>
              <p className="text-sm font-semibold text-gray-700">Protection des données</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="text-secondary" size={28} />
              </div>
              <p className="text-sm font-semibold text-gray-700">Transparence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="text-secondary" size={28} />
              </div>
              <p className="text-sm font-semibold text-gray-700">CGU claires</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Éditeur du site</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Raison sociale :</strong> Socioratech</p>
                <p><strong>Forme juridique :</strong> [À compléter]</p>
                <p><strong>Siège social :</strong> Algérie</p>
                <p><strong>Email :</strong> contact@sociora.com</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Directeur de la publication</h2>
              <p className="text-gray-700">
                Le directeur de la publication est le représentant légal de SocioraTech.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Hébergement</h2>
              <p className="text-gray-700 mb-2">
                Ce site est hébergé par :
              </p>
              <div className="bg-blue-50 rounded-lg p-6 text-gray-700">
                <p><strong>Hébergeur :</strong> [À compléter selon l'hébergeur]</p>
                <p><strong>Adresse :</strong> [À compléter]</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
                est la propriété exclusive de SocioraTech, à l'exception des marques, logos
                ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p className="text-gray-700">
                Toute reproduction, distribution, modification, adaptation, retransmission ou
                publication de ces différents éléments est strictement interdite sans l'accord
                exprès par écrit de SocioraTech.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Protection des données personnelles</h2>
              <p className="text-gray-700 mb-4">
                SocioraTech s'engage à respecter la confidentialité des données personnelles
                communiquées par les utilisateurs de son site web et de ses applications.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Données collectées</h3>
              <p className="text-gray-700 mb-4">
                Les données personnelles collectées peuvent inclure :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Profession</li>
                <li>Informations communiquées via le formulaire de contact</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Utilisation des données</h3>
              <p className="text-gray-700 mb-4">
                Ces données sont utilisées uniquement pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous fournir des informations sur nos produits et services</li>
                <li>Améliorer nos services</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Vos droits</h3>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD et aux lois applicables, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit d'opposition au traitement de vos données</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              <p className="text-gray-700">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@sociora.com" className="text-secondary hover:underline">contact@sociora.com</a>
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Cookies</h2>
              <p className="text-gray-700 mb-4">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur.
                Un cookie est un petit fichier texte stocké sur votre ordinateur lors de
                la visite d'un site web.
              </p>
              <p className="text-gray-700">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur,
                mais cela peut affecter certaines fonctionnalités du site.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Limitation de responsabilité</h2>
              <p className="text-gray-700 mb-4">
                SocioraTech s'efforce d'assurer au mieux l'exactitude et la mise à jour
                des informations diffusées sur ce site. Toutefois, SocioraTech ne peut
                garantir l'exactitude, la précision ou l'exhaustivité des informations mises
                à disposition sur ce site.
              </p>
              <p className="text-gray-700">
                SocioraTech ne pourra être tenue responsable des dommages directs ou
                indirects résultant de l'utilisation de ce site ou des informations qui y
                figurent.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Liens externes</h2>
              <p className="text-gray-700">
                Ce site peut contenir des liens vers des sites externes. SocioraTech
                n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant
                à leur contenu.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Modifications</h2>
              <p className="text-gray-700">
                SocioraTech se réserve le droit de modifier les présentes mentions
                légales à tout moment. Nous vous invitons à les consulter régulièrement.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant ces mentions légales ou la protection de
                vos données personnelles, vous pouvez nous contacter :
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email :</strong> <a href="mailto:contact@sociora.com" className="text-secondary hover:underline">contact@sociora.com</a></p>
                <p><strong>Localisation :</strong> Algérie</p>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-500 text-center">
              <p>Dernière mise à jour : Janvier 2026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
