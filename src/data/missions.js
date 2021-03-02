const Missions = [
  {
    title: 'Lead developpeur',
    company: {
      name: 'SOFY',
      url: 'http://sofy.fr/',
      logoUrl: '/images/logo_sofy.png',
    },
    start: '08-2020',
    end: undefined,
    htmlContent: `
        <p>
            Lead technique sur un ensemble de projets. De de la plateforme marketing web à l'appli mobile.
            <ul>
                <li>Méthode Agile Scrum</li>
                <li>Reporting, KPI</li>
                <li>Test driven development</li>
                <li>Revues de code</li>
                <li>Développements sur les projets présents en portfolio</li>
                <li>Gestion de projets</li>
            </ul>
        </p>
        `,
  },
  {
    title: 'Développeur fullstack',
    company: {
      name: 'ZEENETWORKS',
      url: 'http://zeewifi.com/',
      logoUrl: '/images/logo_zeenetworks.png',
    },
    start: '03-2019',
    end: undefined,
    htmlContent: `
        <p>
            En charge d'une infrastructure fournissant du wifi marketing.
            <ul>
                <li>Mise en place du monitoring, ainsi que du suivi des KPI. Basé sur Grafana.</li>
                <li>Développement d'une application composée d'un tableau de bord VueJS et d'un backend Laravel/MySQL</li>
                <li>Intégration de Radius, OpenWRT, Coova-Chilli</li>
                <li>Création d'un portail captif Nuxt.js</li>
                <li>Conteneurisation de toute la stack technique pré-citée.</li>
                <li>Mise en place d'une architecture à haute disponibilité, scalable horizontalement</li>
                <li>Industrialisation du déploiement de sites wordpress.</li>
                <li>Gestion de projets</li>
            </ul>
        </p>
        `,
  },
  {
    title: 'Développeur logiciel',
    company: {
      name: 'C2I Outremer',
      url: 'http://www.c2i-outremer.com/',
      logoUrl: '/images/logo_c2i.png',
    },
    start: '08-2016',
    end: '03-2019',
    htmlContent: `<p>
            Tiers Maintenance Applicative pour le client Orange Caraïbes. <br/>
            <ul>
            <li>Création d'une API en Java pour la communication avec l'OCS Ericsson</li>
            <li>Maintenance et évolution d'un webservice chargé de consolider des consommations en vue de réaliser un suivi conso  </li>
            <li>Développement de plusieurs applications métier en PHP / Jquery / Mysql.</li>
            </ul>
            </p>
        `,
  },
  {
    title: 'Responsable SI Hospitalier',
    company: {
      name: 'Groupe KAPASanté',
      url: 'http://www.kapasante.com/',
      logoUrl: '/images/kapa-sante-logo.jpg',
    },
    start: '12-2011',
    end: '06-2016',
    htmlContent:
      '<p>Poste unique pour la gestion d’un service informatique pour un parc de 300 noeuds répartis sur 2 sites. <ul><li>Refonte complète du réseau.</li><li>Support, administration des serveurs Linux et Windows. </li><li>MCO des applications métier.</li><li>Gestion de projets, reporting.</li><li>Développement d’applications métier en PHP et Java</li></ul></p>',
  },
  {
    title: 'Développeur Freelance',
    company: {
      name: 'upwork.com',
      url: 'https://www.upwork.com/',
      logoUrl: '/images/upwork.png',
    },
    htmlContent:
      'Réalisation de plusieurs projets divers et variés pour le compte de clients tout aussi divers.',
    start: '10-2012',
    end: '07-2016',
  },
  {
    title: 'Technicien informatique',
    company: {
      name: 'Info Moueza',
    },
    start: '06-2010',
    end: '08-2010',
    htmlContent:
      "Mise en place d'une solution de partage de fichiers basée sur Samba.",
  },
  {
    title: 'Technicien électronique',
    company: {
      name: 'Pyramid',
    },
    start: '06-2007',
    end: '08-2007',
    htmlContent:
      'Diagnostic et réparation d’appareil électronique grand public. Soudure, remplacement de module électronique, conseil avant-vente.',
  },
];

export default Missions;
