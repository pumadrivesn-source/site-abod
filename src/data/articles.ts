export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type ArticleCategory =
  | "Travail & Employabilité"
  | "Technologie & Société"
  | "Économie & Finance"
  | "Notes & Réflexions";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  dateISO: string;
  dateLabel: string;
  category: ArticleCategory;
  tags: string[];
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "ia-analyse-financiere",
    title: "Comment l’intelligence artificielle transforme l’analyse financière sans remplacer l’analyste",
    excerpt:
      "Automatisation du reporting, détection d’anomalies, prévisions : l’IA accélère l’analyse… mais le jugement de l’analyste reste central.",
    coverImage: "/intelligence-artificielle-finance.jpeg",
    dateISO: "2025-08-10",
    dateLabel: "10/08/2025",
    category: "Économie & Finance",
    tags: ["Finance", "IA", "Reporting"],
    blocks: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "L’intelligence artificielle (IA) occupe aujourd’hui une place croissante dans les fonctions financières. Automatisation des reportings, détection d’anomalies, prévisions, analyses rapides de grands volumes de données : les promesses sont nombreuses.",
      },
      {
        type: "p",
        text: "Cependant, contrairement à certaines idées reçues, l’IA ne remplace pas l’analyste financier. Elle transforme son rôle, en renforçant sa capacité d’analyse et de prise de décision.",
      },
      {
        type: "p",
        text: "Cet article propose une lecture pragmatique de l’apport réel de l’IA dans l’analyse financière, ainsi que de ses limites.",
      },

      {
        type: "h2",
        text: "1. Ce que l’IA apporte concrètement à l’analyse financière",
      },
      { type: "h3", text: "a) Traitement rapide de volumes de données importants" },
      {
        type: "p",
        text: "L’IA permet d’analyser en quelques secondes des bases de données financières volumineuses : écritures comptables, historiques de transactions, indicateurs de performance ou données budgétaires multi-annuelles. Cela réduit considérablement le temps consacré aux tâches répétitives et chronophages.",
      },
      { type: "h3", text: "b) Automatisation du reporting" },
      {
        type: "p",
        text: "Grâce à des modèles simples (Python, Excel avancé, Power BI), il est désormais possible :",
      },
      {
        type: "ul",
        items: [
          "de générer automatiquement des tableaux de bord,",
          "de détecter des écarts budgétaires,",
          "de suivre des indicateurs financiers en temps quasi réel.",
        ],
      },
      {
        type: "p",
        text: "L’IA améliore ici la fiabilité et la régularité du reporting.",
      },
      { type: "h3", text: "c) Aide à la détection des risques" },
      {
        type: "p",
        text: "Dans le secteur bancaire et financier, l’IA est utilisée pour :",
      },
      {
        type: "ul",
        items: [
          "identifier des comportements atypiques,",
          "repérer des tensions de liquidité,",
          "anticiper certains risques opérationnels ou financiers.",
        ],
      },
      {
        type: "p",
        text: "Elle agit comme un outil d’alerte précoce, utile pour la gestion des risques.",
      },

      {
        type: "h2",
        text: "2. Pourquoi l’IA ne remplace pas l’analyste financier",
      },
      { type: "h3", text: "a) L’IA ne comprend pas le contexte" },
      {
        type: "p",
        text: "Les modèles d’IA analysent des données, mais ils ne comprennent ni l’environnement institutionnel, ni les contraintes réglementaires, ni les réalités opérationnelles d’une organisation. Or, en finance, le contexte est souvent plus important que le chiffre lui-même.",
      },
      { type: "h3", text: "b) Le jugement professionnel reste central" },
      {
        type: "p",
        text: "Un ratio financier, une prévision ou une alerte générée par l’IA nécessite toujours une interprétation, une validation et une mise en perspective. Seul l’analyste est capable d’expliquer pourquoi un indicateur évolue et quelles décisions en tirer.",
      },
      { type: "h3", text: "c) Les risques de dépendance et d’erreurs" },
      {
        type: "p",
        text: "Une confiance excessive dans l’IA peut conduire à des erreurs d’interprétation, une mauvaise qualité de données non détectée, ou des décisions automatiques mal adaptées. L’IA reste un outil, pas un décideur.",
      },

      {
        type: "h2",
        text: "3. Le nouveau rôle de l’analyste financier à l’ère de l’IA",
      },
      {
        type: "p",
        text: "L’analyste financier devient progressivement un interprète des données, un garant de la cohérence financière, et un acteur clé de la décision stratégique. Son expertise se déplace : moins sur la production manuelle des chiffres, davantage sur l’analyse, la synthèse et le conseil.",
      },
      {
        type: "p",
        text: "L’IA renforce donc la valeur de l’analyste au lieu de la diminuer.",
      },

      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’intelligence artificielle transforme profondément l’analyse financière, mais elle ne remplace pas l’expertise humaine. Utilisée intelligemment, elle permet de gagner du temps, d’améliorer la qualité des analyses et de renforcer la gestion des risques.",
      },
      {
        type: "p",
        text: "La vraie valeur ajoutée réside dans la combinaison entre la puissance des outils technologiques et le jugement professionnel de l’analyste financier. C’est dans cet équilibre que se construit la finance moderne.",
      },
    ],
  },
  {
    slug: "employabilite-jeunes-senegal-banque-mondiale",
    title:
      "L’employabilité des jeunes au Sénégal : défis, réalités et regard de la Banque mondiale",
    excerpt:
      "Une jeunesse plus instruite, mais un accès difficile à l’emploi formel : obstacles, réalités du marché du travail et pistes d’action selon la Banque mondiale.",
    coverImage: "/emploi_0015.jpg",
    dateISO: "2025-08-10",
    dateLabel: "10/08/2025",
    category: "Travail & Employabilité",
    tags: ["Sénégal", "Emploi", "Banque mondiale"],
    blocks: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "Au Sénégal, les jeunes constituent une part très importante de la population active. Avec une croissance démographique soutenue, chaque année des milliers de jeunes arrivent sur le marché du travail. Pourtant, les défis pour accéder à un emploi durable restent considérables.",
      },
      {
        type: "p",
        text: "Cet article explore la situation de l’emploi des jeunes, les principaux obstacles, et ce que la Banque mondiale considère comme des pistes d’action pour améliorer l’employabilité des nouvelles générations.",
      },

      { type: "h2", text: "1. Une jeunesse instruite mais en quête d’opportunités" },
      {
        type: "p",
        text: "Les données récentes montrent que les jeunes Sénégalais sont souvent plus instruits que les générations précédentes, avec une proportion importante ayant atteint un niveau d’éducation secondaire ou post-secondaire. Malgré cela, beaucoup peinent à trouver un emploi stable.",
      },
      {
        type: "p",
        text: "Selon une étude populaire, environ 41 % des jeunes (18-35 ans) déclarent être sans emploi et en recherche active, et un grand nombre cite le manque de préparation pratique et l’inadéquation des compétences aux besoins du marché comme principaux obstacles.",
      },
      {
        type: "p",
        text: "Ce phénomène s’explique en partie par une inadéquation entre les formations offertes et les compétences réellement demandées par les employeurs, notamment dans les domaines techniques et numériques.",
      },

      { type: "h2", text: "2. Le défi du marché du travail sénégalais" },
      {
        type: "p",
        text: "Même si les taux de chômage officiels peuvent sembler modérés, ils ne reflètent pas toujours la réalité complète de l’emploi des jeunes. Beaucoup sont employés dans le secteur informel, avec des contrats précaires, de faibles salaires et une faible protection sociale.",
      },
      {
        type: "p",
        text: "La Banque mondiale note que seulement une faible part des jeunes est employée formellement, et que beaucoup travaillent sans contrat écrit ou dans des conditions vulnérables.",
      },
      {
        type: "p",
        text: "Ce contexte rend difficile pour les jeunes de sortir de la pauvreté malgré le fait de travailler pendant de nombreuses années.",
      },

      { type: "h2", text: "3. Ce que dit la Banque mondiale" },
      {
        type: "p",
        text: "La Banque mondiale reconnaît que les conditions du marché du travail limitent fortement l’impact positif de l’emploi sur la réduction de la pauvreté. Dans ses analyses, elle met en lumière plusieurs points essentiels :",
      },
      {
        type: "ul",
        items: [
          "Taux élevé d’inactivité et de sous-emploi parmi les jeunes, surtout parmi les femmes.",
          "Faible création d’emplois formels par rapport au nombre de jeunes entrant chaque année sur le marché du travail.",
          "Importance des formations adaptées aux besoins du marché pour augmenter les chances d’insertion professionnelle.",
        ],
      },
      {
        type: "p",
        text: "Pour répondre à ces défis, la Banque mondiale soutient divers programmes visant à renforcer la formation professionnelle, à améliorer l’adéquation entre les compétences et les emplois disponibles, et à stimuler l’innovation dans les secteurs porteurs.",
      },

      { type: "h2", text: "4. Priorités pour l’avenir" },
      {
        type: "p",
        text: "Pour améliorer l’employabilité des jeunes au Sénégal de façon durable, plusieurs leviers sont essentiels :",
      },
      {
        type: "ul",
        items: [
          "Aligner les formations sur les besoins du marché, notamment dans les secteurs technique, numérique et entrepreneurial.",
          "Favoriser l’entrepreneuriat, car une grande partie des jeunes souhaitent créer leur propre activité.",
          "Renforcer les partenariats entre entreprises et institutions de formation pour faciliter l’accès à des expériences pratiques.",
          "Accroître les opportunités d’emploi formel pour réduire la précarité du travail des jeunes.",
        ],
      },
      {
        type: "p",
        text: "Ces axes sont cohérents avec les recommandations des institutions de développement dont la Banque mondiale.",
      },

      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’employabilité des jeunes au Sénégal est un enjeu majeur qui touche à la fois l’avenir économique du pays et la stabilité sociale. Malgré un niveau éducatif en progression, des obstacles tels que le manque d’opportunités formelles, l’inadéquation des compétences et le sous-emploi persistent.",
      },
      {
        type: "p",
        text: "La Banque mondiale souligne l’importance d’une approche intégrée, combinant formation, création d’emplois et adaptation aux réalités du marché, pour faire progresser l’intégration professionnelle des jeunes. Le défi reste grand, mais les actions engagées ouvrent des pistes prometteuses.",
      },
    ],
  },
  {
    slug: "competences-capital-strategique-employabilite-jeunes",
    title:
      "Les compétences comme capital stratégique dans l’employabilité des jeunes",
    excerpt:
      "À l’ère de la transition numérique, les compétences deviennent un capital stratégique : dynamique, contextualisé et indispensable pour s’insérer durablement.",
    dateISO: "2025-08-10",
    dateLabel: "10/08/2025",
    category: "Travail & Employabilité",
    tags: ["Compétences", "Employabilité", "Jeunes"],
    blocks: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "L’employabilité des jeunes constitue aujourd’hui un enjeu central dans les débats sur le développement économique, l’insertion professionnelle et la compétitivité des nations. Longtemps analysée sous l’angle des difficultés d’accès à l’emploi — chômage structurel, inadéquation formation-emploi, saturation du marché — elle s’inscrit désormais dans une perspective plus large intégrant l’évolution des compétences.",
      },
      {
        type: "p",
        text: "Dans un monde caractérisé par la transition numérique, l’accélération des innovations, la mobilité internationale et la reconfiguration des organisations, les compétences ne sauraient être perçues comme de simples attributs techniques. Elles deviennent un capital stratégique, à la fois individuel et collectif, qui conditionne la capacité des jeunes à entrer sur le marché du travail, mais aussi à s’y maintenir, à progresser et à faire face à l’incertitude.",
      },
      {
        type: "p",
        text: "Cet article propose une analyse conceptuelle approfondie du rôle des compétences dans l’employabilité des jeunes, en soulignant leur caractère évolutif, contextualisé et systémique.",
      },

      { type: "h2", text: "1. Les compétences au-delà du diplôme" },
      { type: "h3", text: "1.1. Le diplôme comme signal insuffisant" },
      {
        type: "p",
        text: "Traditionnellement, le diplôme représentait le principal signal de qualification. Il garantissait aux employeurs un certain niveau de connaissances théoriques, inculquées selon des standards institutionnels reconnus. Cependant, ce modèle montre aujourd’hui ses limites.",
      },
      {
        type: "p",
        text: "Le diplôme certifie l’acquisition de connaissances, mais pas nécessairement la capacité à les mobiliser. Beaucoup d’organisations constatent que les jeunes diplômés peuvent maîtriser des concepts, mais éprouvent des difficultés à résoudre des problèmes concrets, à s’adapter à des environnements changeants ou à interagir efficacement avec des équipes multidisciplinaires.",
      },
      { type: "h3", text: "1.2. La compétence comme construction dynamique" },
      {
        type: "p",
        text: "La compétence n’est plus un savoir statique :",
      },
      {
        type: "ul",
        items: [
          "Elle s’appuie sur un ensemble articulé de savoirs (connaissances), de savoir-faire (capacités techniques) et de savoir-être (attitudes, comportements).",
          "Elle se bâtit progressivement, au contact de situations réelles, souvent imprévisibles.",
          "Elle dépend de la capacité du jeune à contextualiser, à interpréter et à appliquer ce qu’il a appris.",
        ],
      },
      {
        type: "p",
        text: "Ainsi, l’employabilité moderne est moins liée au volume de connaissances qu’à la faculté de les transformer en valeur opérationnelle, c’est‑à‑dire en résultat observable dans une organisation.",
      },

      {
        type: "h2",
        text: "2. La transformation du travail et la redéfinition des compétences",
      },
      { type: "h3", text: "2.1. Automatisation des tâches routinières" },
      {
        type: "p",
        text: "Les technologies (IA, robotisation, logiciels intelligents) absorbent de plus en plus d’activités répétitives ou prédictibles. Les métiers industriels, administratifs ou comptables sont particulièrement concernés. Les jeunes ne peuvent plus bâtir leur valeur sur des tâches facilement automatisables.",
      },
      { type: "h3", text: "2.2. Montée en puissance des compétences cognitives et sociales" },
      {
        type: "p",
        text: "Les entreprises recherchent davantage :",
      },
      {
        type: "ul",
        items: [
          "des capacités d’analyse,",
          "de résolution de problèmes complexes,",
          "de communication,",
          "de créativité,",
          "de collaboration,",
          "et de prise de décision.",
        ],
      },
      {
        type: "p",
        text: "Ces compétences, difficiles à automatiser, constituent désormais un avantage compétitif durable.",
      },
      { type: "h3", text: "2.3. Évolution permanente des compétences" },
      {
        type: "p",
        text: "Dans un environnement instable, la compétence devient évolutive : un savoir utile aujourd’hui peut perdre sa pertinence demain. L’employabilité ne repose donc plus sur la maîtrise d’un métier, mais sur la capacité à actualiser continuellement ses compétences.",
      },

      { type: "h2", text: "3. Les compétences comme facteur d’autonomie professionnelle" },
      { type: "h3", text: "3.1. Mobilité professionnelle et résistance aux chocs" },
      {
        type: "p",
        text: "Les compétences ne déterminent pas seulement l’accès au premier emploi, mais influencent la trajectoire professionnelle sur le long terme. Un jeune disposant de compétences diversifiées peut changer de poste plus facilement, s’adapter à différents secteurs, faire face à des restructurations et rebondir après une crise économique.",
      },
      {
        type: "p",
        text: "Son employabilité devient une forme de sécurité professionnelle, plus fiable que la stabilité d’un emploi unique.",
      },
      { type: "h3", text: "3.2. Construction d’un capital professionnel" },
      {
        type: "p",
        text: "Accumuler des compétences revient à constituer un capital professionnel qui renforce l’autonomie, la capacité de négociation, l’indépendance face à un employeur et l’ouverture vers des opportunités internationales. Les jeunes deviennent acteurs de leur parcours au lieu d’être dépendants des structures traditionnelles d’emploi.",
      },

      { type: "h2", text: "4. L’apprentissage continu comme clé de l’employabilité" },
      { type: "h3", text: "4.1. La fin du modèle « formation initiale → carrière »" },
      {
        type: "p",
        text: "Le rythme des innovations rend obsolète l’idée selon laquelle la formation initiale suffirait pour l’ensemble d’une carrière. Les jeunes doivent actualiser régulièrement leurs compétences pour maintenir leur attractivité.",
      },
      { type: "h3", text: "4.2. Le jeune comme acteur de son développement" },
      {
        type: "p",
        text: "L’apprentissage continu suppose une posture proactive : identifier ses lacunes, rechercher des ressources de formation (MOOC, certifications, mentorat), expérimenter de nouveaux outils, s’autoévaluer et intégrer des retours.",
      },
      {
        type: "p",
        text: "Cette démarche constitue une stratégie rationnelle de consolidation de son capital de compétences dans un environnement incertain.",
      },
      { type: "h3", text: "4.3. Le rôle des organisations" },
      {
        type: "p",
        text: "Les entreprises, de leur côté, encouragent de plus en plus la formation continue à travers des plans de développement des compétences, des plateformes d’apprentissage internes, des communautés de pratiques et des programmes de mentorat. L’employabilité devient ainsi une responsabilité partagée entre l’individu et son environnement professionnel.",
      },

      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’employabilité des jeunes ne peut se réduire ni à l’obtention d’un diplôme, ni à l’offre d’emploi disponible. Elle repose sur une vision élargie des compétences, envisagées comme un capital stratégique, adaptable et en constante évolution. Dans un monde du travail en mutation, la capacité à apprendre en continu, à s’adapter rapidement et à donner du sens à des situations complexes devient le principal levier d’insertion durable.",
      },
      {
        type: "p",
        text: "Plus qu’un attribut statique, la compétence est aujourd’hui un processus, un investissement et une dynamique qui permet aux jeunes de construire leur avenir professionnel dans un environnement incertain mais riche en opportunités.",
      },
    ],
  },
];
