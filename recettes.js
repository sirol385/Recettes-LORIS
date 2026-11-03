const DOSSIER_COUV = 'Pages-de-Couverture/';
const EXT = '.png';
const SERIES = {
    heros: { label: 'Mon Robot ce Héros', alt: 'Mon robot ce héros' },
    moi: { label: 'Mon Robot & Moi', alt: 'Mon robot et moi' }};
const LIVRES = [
    { serie: 'heros', num: 1, date: '2018-09', sommaire: `
3 Velouté de lentilles corail
4 Shopping gourmand
6 Rencontre : Julie Myrtille
8 Pâte à choux, recette de base
10 Eclairs au chocolat
12 Petits choux au thé vert
14 Chou à la crème au citron vert
16 Paris-Brest
18 L'Espagne et sa gastronomie
20 Gaspacho
22 Tortilla aux pommes de terre et tomates
24 Crèmes catalanes aux deux citrons
26 Glace au turron
28 Croquettes de jambon
30 Risotto façon paella aux fruits de mer
32 Le régime soupe
34 Soupe de cocos de Paimpol
38 Soupe de crevettes à la thaï
40 Velouté de courgettes au chèvre
42 Soupe tiède de tomates caprese
44 Soupe de brocoli à l'avocat
46 Le miel, une potion magique
48 Cheesecake ricotta, miel et pistaches
50 Tajine de poulet aux fruits secs et au miel
52 Madeleines au chèvre et au miel
54 Pain d'épices au miel
56 Curry de lotte
58 Daube d'agneau aux abricots frais
60 Croquettes de saumon
62 Poivrons piquillos farcis à la brandade
64 Boulettes de poulet à l'aneth, salade de betterave
66 Hachis Parmentier aux légumes
68 La figue dans tous ses états
70 Tarte aux figues
72 Cake aux figues, chèvre et amandes
74 Chutney de figues
76 Figues confites au sirop d'orange
78 Smoothie aux figues
80 On se rue sur les légumes
82 Clafoutis aux petits pois
84 Crumble aux courgettes et aux oignons
86 Salade de haricots verts aux moules et aux oignons
88 Caviar d'aubergine au sésame
90 Gâteau à la ricotta façon fiadone
92 Tartinade de poulet au citron confit et chèvre frais
94 Verrines de cheesecake à l'ananas façon panna cotta
96 Tarte au fromage frais, tomates cerise, roquette et jambon cru` },
    { serie: 'heros', num: 2, date: '2018-10', sommaire: `
4 Shopping gourmand
6 Interview Jean-Rony Leriche : ma cuisine antillaise
10 Manger au fil des saisons
12 Le brunch, une variation de plaisirs
14 Les huîtres, perles de l'océan
16 Super aliments, super pouvoirs
18 Huîtres chaudes et sabayon au cidre
20 Tapenade et anchoïade
22 Rillettes de maquereau au Muscadet et aux algues
24 Crème de mâche nantaise et champignons de Paris
26 Mini quiches lorraines
28 Gougères au Roquefort et aux noix du Périgord
30 Mini muffins aux escargots de Bourgogne et au Chaource
32 Mini pissaladières
34 Tarte flambée
36 Piperade basque
38 Flammiche au Maroilles
40 Soupe de moules de Normandie au cidre et à la crème
42 Potage Saint-Germain au safran du Gâtinais et au bacon croustillant
44 Soupe paysanne aux lentilles vertes du Puy
46 Galette de sarrasin aux oignons de Roscoff et saucisse de Molène
48 Gratin de crozets au reblochon et à la fondue de poireaux
50 Gâteau d'automne au camembert et au potiron
52 Cake parisien au jambon et champignons de Paris
54 Boeuf bourguignon
56 Quenelles sauce Nantua
58 Encornets à la sétoise
60 Cabillaud, bonnottes de Noirmoutiers et beurre blanc nantais
62 Agneau de prés salés au curry corsaire
64 Pavé de maigre et mojettes de Vendée
66 Waterzoï
68 Bouillabaisse et sauce rouille
70 Parmentier à l'andouillette de Troyes
72 Gratin de pommes de terre, Chavignol et Sancerre
74 Tiramisu aux griottines et biscuits roses de Reims
76 Cannelés bordelais
78 Kouglof
80 Gâteau breton
82 Clafoutis à l'Armagnac et aux pruneaux d'Agen
84 Macarons de Saint-Jean-de-Luz
86 Tarte aux pralines
88 Fougasse d'Aigues-Mortes
90 Nonnettes
92 Canistrelli
94 Merveilleux au praliné
96 Tarte normande` },
    { serie: 'heros', num: 3, date: '2018-11', sommaire: `
4 Shopping gourmand
6 Rencontre : Jean-Yves Bordier
8 Zoom sur le litchi
10 Vivre sans frigo
12 Escale gourmande en Italie
14 Zoom sur la cannelle
16 Pousses et germes à soi, chez soi
18 Cookies aux pépites de chocolat
20 Madeleines fourrées à la confiture de fruits rouges
22 Crêpes au chocolat
24 Gâteau marbré au chocolat
26 Gaufres au sucre
28 Gratin de poires aux amandes
30 Crumble poires vanille
32 Compote de poire, crème et granola
34 Charlotte aux poires
36 Soupe complète carotte, gingembre, maïs et pois chiches aux épices
38 Rillettes de thon au fromage frais et citron vert
40 Cake aux artichauts, jambon et olives
42 Trifle à la cerise façon forêt noire
44 Brioche : la recette de base
46 Brioches suisses aux pépites de chocolat
48 Mini tropéziennes
50 Brioche perdue en verrine au mascarpone
52 Briochettes aux oeufs brouillés et au saumon fumé
54 Soupe de potiron aux graines et aux fruits secs
56 Risotto à la courge
58 Raie poêlée, purée de potimarron, sauce au vin
60 Cake moelleux au potimarron et aux épices
62 Soufflé de potimarron à la carotte et au cumin
64 Mini potirons Jack Be Little farcis à la viande et champignons
66 Blanquette de veau aux légumes
68 Filet de truite vapeur au citron vert, écrasée de pommes de terre
70 Tomates farcies au boeuf et au riz
72 Curry de poulet à la thaï
74 Quiche aux endives et aux crevettes
76 Quiche poireaux jambon
78 Quiche soufflée au fromage
80 Quiche aux choux de Bruxelles et pommes de terre grenaille
82 Quiche à la patate douce, au bleu et aux noix
84 Quiche au saumon et au chou-fleur
86 Sauce bolognaise maison
88 Penne alla puttanesca
90 Gnocchis sauce au fromage façon Mac & Cheese
92 Pâtes riso au pesto de roquette
94 Raviolis sauce aux champignons
96 Pâtes aux fruits de mer` },
    { serie: 'heros', num: 4, date: '2018-12', sommaire: `
4 Shopping gourmand
6 Le foie gras : bien le choisir
10 Les secrets d'une belle table
12 Les viandes passent à table
14 Le chocolat : succombez à la tentation !
18 Mousse d'avocat aux crevettes
20 Blinis aux Saint-Jacques et oeufs de poisson
22 Sablés au pavot et au parmesan
24 Gâteau roulé au saumon et à l'aneth
26 Sapin feuilleté au pesto
28 Ecume d'huîtres et mouillettes au beurre d'algues
30 Pétoncles gratinés au beurre de gingembre
32 Canapés de pain d'épices, compotée d'oignons et magret fumé
34 Capuccino de foie gras et marrons au pain d'épices
36 Crème de panais, brochette de Saint-Jacques à la sauge
38 Ravioles au foie gras en émulsion verte
40 Soufflé au crabe et citron vert
42 Velouté de carotte et langoustines au curry
44 Terrine poissons et fruits de mer
46 Tarte fine au boudin blanc, andouille et compotée d'oignons au miel
48 Oeufs brouillés à la truffe
50 Pavé de chevreuil, sauce au vin rouge et au genièvre
52 Filet de sole au céleri, crème d'aneth
54 Pastilla au poulet et aux fruits secs
56 Pavé de turbot sauce armoricaine
58 Roulade de dinde à la truffe
60 Pintade farcie aux herbes et aux noix
62 Tournedos de biche sauce au roquefort et au poivre vert
64 Marmite de Saint-Jacques à la crème de truffe
66 Dôme glacé meringué
68 Charlotte aux marrons
70 Crèmes mangue passion, sablés coco
72 Trifles au chocolat et aux mandarines
74 Bûche à la confiture de lait
76 Tarte au chocolat blanc et mandarines confites
78 Christmas pudding au caramel
80 Couronne de Noël façon Number Cake au chocolat
82 Etoiles sablées
84 Truffes pralinées passion
86 Sucette au chocolat
88 Cake de Noël à l'orange confite
90 Cupcakes glacés au chocolat
92 Pyramide d'étoiles à la cannelle
94 Mini sapins coco-chocolat
96 Mendiants aux pistaches et aux amandes` },
    { serie: 'heros', num: 5, date: '2019-01', sommaire: `
4 Shopping gourmand
6 Interview : Christophe Hay
10 La carotte : l'aliment qui colore l'hiver
12 Carrot cake
14 Smoothie vitaminé carotte, abricot sec et gingembre
16 Carottes Vichy
18 Crumble de carottes
20 Tartines au chèvre frais, aux deux carottes, à l'orange et au cumin
22 Soupe de carotte et patate douce
24 Légumes oubliés : plaisir retrouvé
26 Risotto aux épinards
28 Tarte aux brocolis, chèvre et noix de pécan en feuilles de brick
30 Frittata aux poireaux
32 Boulettes de pois chiches, sauce au yaourt
34 Couscous végétarien
36 Génoise, recette de base
38 Gâteau roulé crémeux façon mojito
40 Forêt noire
42 Layer cake aux pommes et au fromage blanc
44 Tiramisu express à la mangue et aux fruits de la passion
46 Fruits exotiques : des douceurs bonnes pour la santé
48 Tarte au pamplemousse meringuée
50 Gâteau aux kumquats et à l'ananas
52 Bouchées au poulet, menthe, gingembre et combava
54 Soupe de crevettes au citron vert et à la coriandre
56 Flan pâtissier
58 Ile flottante aux pralines roses
60 Crème caramel et pop-corn
62 Verrines crémeuses au praliné
64 Yaourt nature maison à la confiture
66 Bien manger pour affronter l'hiver
68 Chili con carne
70 Curry d'agneau aux raisins secs
72 Welsh de butternut aux noix
74 Petits rouleaux de lasagne en gratin
76 Hachis parmentier au confit de canard et au potimarron
78 Filets de carrelets aux petits légumes
80 Mini choux farcis à l'agneau
82 Blanquette de dinde aux champignons et oignons grelots
84 Chou-fleur aux crevettes et à la béchamel
86 Terrine de lapin aux noisettes
88 Galette des rois au chocolat
90 Pâte à tartiner maison
92 Galette des rois en crêpes aux amandes
94 Smoothie détox à l'orange sanguine, à la mangue et aux fruits rouges
96 Petit tiramisu à la crème de marrons, noisettes et cacao` },
    { serie: 'heros', num: 6, date: '2019-02', sommaire: `
4 Shopping gourmand
6 Mardi-Gras : des crêpes, mais pas seulement !
10 Le sucre : ami ou ennemi ?
12 Le thé, boisson de tous les plaisirs
14 Les produits laitiers sans lactose
16 Petites crèmes au citron
18 Petites crèmes au chocolat
20 Crèmes dessert aux Carambar
22 Petits pots de crème vanille
24 Palouza à la fleur d'oranger
26 Mousse au chocolat aux cerises
28 Ile flottante
30 Clafoutis aux pruneaux
32 Gâteau de riz au lait
34 Gâteau de semoule des îles
36 Bavarois au citron
38 Flan pâtissier au chocolat
40 Petit cheesecake à la rose et au litchi
42 Verrines de perles du Japon aux fruits exotiques
44 Blanc-manger à la fleur d'oranger
46 Cheesecake à la mousse au chocolat
48 Beignets aux pommes
50 Chaussons aux pommes
52 Barres de céréales
54 Fondant au chocolat
56 Cake pops
58 Brioche perdue aux bananes
60 Véritable chocolat chaud aux guimauves
62 Donuts
64 Biscuits à la cuiller
66 Scones
68 Croquants aux amandes
70 Petit-beurre à la farine de châtaigne
72 Macarons craquelés au citron
74 Cookies café/chocolat
76 Madeleines au sarrasin et au miel
78 Congolais
80 Succès praliné
82 Saint-Honoré
86 Mille-feuille au chocolat
88 Framboisier
90 Rainbow cake
92 Napolitain
94 Layer cake aux Oreo
96 Tarte aux fleurs de pommes` },
    { serie: 'heros', num: 7, date: '2019-03', sommaire: `
4 Portrait de Louise Petitrenaud
6 Escapade en Asie
10 Pad thaï
12 Emincé de boeuf laqué
14 San choy bow
16 Nems de poulet
18 Brochettes de poulet sauce satay
20 L'alimentation, un élixir de jeunesse
22 Flans de petits pois à la menthe et lard fumé
24 Bar poêlé, asperges vertes et sauce aux herbes
26 Petits pâtés de Pâques
28 Gigot d'agneau en croûte d'herbes
30 Cake au chocolat
32 Couronne de Pâques
34 Pourquoi faut-il boire beaucoup d'eau ?
36 Panettone
38 Oeufs brouillés et jus ACE
40 Pancakes
42 Confiture de poires à la vanille
44 Smoothie santé kiwi, concombre et persil
46 Ces aliments qui nous donnent bonne mine
48 Gratin de chou-fleur aux lardons et au comté
50 Houmous de betterave
52 Tartine veggie, poires et choux de Bruxelles
54 Bricks au chèvre, miel et chou kale
56 Gâteau renversé coco/ananas
58 Banoffee pie
60 Piña Colada
62 Kulfi à la mangue et aux pistaches
64 Beignets confiture mangue/papaye
66 Cuisiner avec les enfants
68 Arancini à la sauce tomate
70 Mini burgers au veau et aux herbes
72 Cookies aux petits oeufs de Pâques
74 Jardin de Pâques
76 Oeufs en chocolat à la coque
78 Polpettes de porc et veau, sauce tomate aux carottes
80 Keftas aux éclats de pistaches
82 Boulettes de Mamina
84 Croquettes de poisson
86 Boulettes de lentilles corail au curcuma
88 Cocotte de saumon en escabèche d'agrumes et poireaux
90 Soupe harira
92 Pizza à la crème d'artichauts et au fromage
94 Gnocchis aux petits pois sauce béchamel
96 Ragoût d'agneau aux olives` },
    { serie: 'heros', num: 8, date: '2019-04', sommaire: `
4 Myriam Domange, la cheffe qui cuisine végétarien
8 Chrononutrition : mangez au bon moment
11 Les indispensables de la cuisine « sans »
12 De l'utilisation des épices
14 Les pâtes, les pâtes, oui... mais des règles à suivre !
16 Ces régimes « sans » qui font un carton plein
18 Eau détox ananas, curcuma et citron vert
20 Smoothie fraise/menthe
22 Jus de pomme, carotte et gingembre
24 Mug cakes aux tomates et aux olives
26 Rouleaux de printemps arc-en-ciel, sauce légère
28 Rillettes de saumon à l'artichaut
30 Soupe glacée au yaourt, concombre et radis
32 Dip au thon et aux herbes, petits légumes
34 Frittata aux courgettes façon cannelés
36 Cocktail de crevettes croustillantes
38 Salade de fèves, pommes de terre et chèvre frais
40 Mini charlottes de courgettes
42 Gaspacho de radis et velouté de fanes de radis
44 Tarte à la ricotta et aux légumes de printemps
46 Oeuf mollet et petits légumes vapeur
48 Quiche brocolis saumon
50 Quinoa ricotta et crevettes
52 Taboulé de chou-fleur, pois chiches, coriandre et grenade
54 Fenouil farci au tartare de saumon à la mangue
56 Salade d'asperges, petits pois, fèves et radis, sauce au yaourt
58 Daurade vapeur aux endives rouges, sauce légère aux agrumes
60 Poisson, haricots verts et pommes de terre vapeur, sauce légère
62 Poivrons farcis à l'agneau, blé aux épinards et tomates
64 Navarin d'agneau aux légumes de printemps
66 Curry aux carottes et pois chiches au lait de coco
68 Seiches et artichauts à l'étouffée
70 Fusilli à la gremolata
72 Spaghettis de courgettes à la bolognaise
74 Mini paupiettes de chou au poulet
76 Aïoli de cabillaud
78 Gratin de rhubarbe au quinoa
80 Gâteau invisible pommes myrtilles
82 Mousses légères au citron
84 Verrine de fromage blanc au crunchy granola
86 Yaourt glacé aux fraises
88 Mille-feuille de fruits
90 Quatre-quarts sans beurre
92 Oeufs à la neige revisités au coulis de framboises
94 Gâteau au fromage blanc et coulis de framboises
96 Fondant chocolat framboise` },
    { serie: 'heros', num: 9, date: '2019-05', sommaire: `
4 Portrait : Laetitia Visse, restauratrice
8 L'asperge, délice printanier
10 Asperges rôties, bacon, pignons et pesto
12 Velouté aux asperges vertes
14 Quiche aux asperges
16 Tortilla aux asperges, petits pois et ciboulette
18 Risotto d'orge aux asperges vertes et à la roquette
20 Blinis d'asperges et rillettes de crabe
22 Panna cotta de petits pois au wasabi
24 Oeufs mimosa, chèvre frais et avocat
26 Muffins petits pois, feta et cerfeuil
28 Petits flans aux artichauts et aux olives
30 Tarte fine du jardin à la tapenade et aux légumes crus
32 Burger vitello tonnato
34 Tajine de veau aux carottes et citron confit
36 Empanadillas au veau et aux herbes
38 Paupiettes de feuilles de blettes farcies au veau
40 La rhubarbe, c'est de saison
42 Angel cake aux framboises et fleur d'oranger
44 Pavlova au chocolat blanc, rhubarbe et noisettes caramélisées
46 Flan de fruits rouges
50 Mousse au chocolat et aux myrtilles
52 Prébiotiques : des bactéries « santé »
54 Saumon vapeur, salade de quinoa et mini courgettes
56 Salade de lentilles beluga au maquereau vapeur, pousses d'épinards, carotte et oignon
58 Cobbler aux flocons de sarrasin et aux cerises
60 Tarte aux fruits rouges et crumble de muesli
62 Les herbes aromatiques : au nom du goût
64 Cake au poulet, à la tomate séchée et à l'estragon
66 Gaspacho tout vert
68 Porc au caramel et riz
70 Tiramisu au cacao
72 Petits beignets à la ricotta et aux herbes, sauce citronnée
74 Sauce barbecue
76 Sauce béarnaise
78 Sauce ketchup
80 Sauce tartare
82 Sauce au poivre
84 Jus détox : on chouchoute son organisme
84 Gâteau fraise rhubarbe
86 Fontainebleau aux fraises
88 Tarte aux fraises et aux amandes
90 Sorbet minute aux fraises
92 Love cake aux fraises
94 Strawberry mojito
96 Cheesecake aux fraises` },
    { serie: 'heros', num: 10, date: '2019-06', sommaire: `
4 Portrait de notre cheffe Patricia Raffaelli
8 Le doux parfum de la Provence
10 Fougasse aux olives noires
12 Soupe au pistou
14 Daube à la provençale
16 Panna cotta souvenir de Provence
18 Crème brûlée à la lavande
20 Tzatziki et miettes de biscuits salés
22 Tarte aux tomates cerise, chèvre frais et basilic
24 Gaspacho à la pastèque et à la tomate
26 Caviar d'aubergine
28 Pizza aux légumes grillés
30 Soupe glacée aux courgettes
33 Viens chez moi, c'est barbecue
34 Brochettes de keftas et salade
36 Brochettes de filet mignon de porc aux abricots, citron jaune et romarin
38 Brochettes de crevettes grillées et marinées, vinaigrette au citron vert et aux herbes
40 Brochettes de poulet à la thaïlandaise
42 Brochettes de thon et romarin à l'ananas
44 Cake chèvre, roquette et pignons
46 Crostinis à la crème de piquillos
48 Wraps de poulet
50 Gâteau noix de coco et citron vert
52 Gâteaux à la pistache
54 Grandes tablées pour un maximum de plaisir
56 Gâteau magique aux abricots
58 Tarte façon bavarois aux fraises
60 Clafoutis aux figues
62 Tarte façon cheesecake à la ricotta et aux abricots
64 Crumble aux pêches et romarin
66 Fruits & légumes sculptés : tout un art
68 Gaspacho pastèque/melon façon mojito
70 Esquimaux glacés au citron vert et à la mûre
72 Jus de carotte pêche & abricot
74 Sorbet minute aux pêches jaunes et au citron vert
76 Minestrone de fruits d'été au sirop de verveine
78 Les haricots, on se met au vert
80 Salade de pommes de terre aux haricots verts et radis roses
82 Salade de cocos de Paimpol, feta, oignons et câpres
84 Salade de haricots verts aux pois chiches, mozzarella et abricots rôtis
86 Poisson et haricots verts vapeur, sauce crémeuse au citron
88 Sauce César
90 Sauce tahini au curcuma
92 Sauce crudités
94 Vinaigrette aux herbes et aux échalotes
96 Bagna Cauda` },
    { serie: 'heros', num: 11, date: '2019-07', sommaire: `
4 Food Truck : Quand la cuisine s'invite dans la rue
8 Les soupes en version rafraîchissante
10 Milkshake à la fraise
12 Jus de pastèque
14 Smoothie aux fruits rouges
16 Soupe de fruits d'été melon coco
18 Lassi à la rose
20 Smoothie à la cerise
22 Citronnade
24 Jus d'abricots frais
26 Pique-niquez, c'est l'été !
28 Confiture de rhubarbe et fraises
30 Confiture de figues
32 Confiture de tomates vertes
34 Confiture d'abricots
36 Confiture de prunes
38 Gelée de vin rouge aux épices
40 Chutney de cerises
42 Confiture de melon, citron vert et vanille
44 Confiture de pétales de rose
46 Glaces, sorbets et confitures faits-maison
48 Sorbet citron
50 Vacherin pina colada
52 Glace au yaourt et à la pastèque
54 Esquimaux glacés mangue/fraise et ananas
56 Glace au yaourt et nectarines
58 Sucettes glacées aux petits suisses et framboises
60 Coupe glacée aux fruits rouges
62 Sundae fraise, meringue et crème
64 Sandwich glacé : gaufres et glace à la cerise
66 Notre sélection de rosés
68 Daïquiri aux fraises
70 Sangria d'été
72 Cherry Apple Fizz
74 Mojito au melon
76 Cocktail glacé au rosé
78 La folie des cours de cuisine
80 Tarte aux mirabelles
82 Tarte rustique aux prunes et au thym
84 Tartelettes tutti frutti à la crème de pistache
86 Tarte briochée aux myrtilles
88 Tartelettes croisillons aux cerises
90 Tarte tatin à l'abricot
92 Tarte briochée pêches groseilles
94 Tarte façon cheesecake au fromage frais, pêches et fraises
96 Tarte sablée aux pêches` },
    { serie: 'heros', num: 12, date: '2019-08', sommaire: `
4 Antoine Bouchard, chef pâtissier de la piscine Molitor
6 Une visite au marché de Rungis
8 Les marchés locaux dévoilent leurs trésors
10 La saisonnalité : et si elle guidait nos achats ?
12 Le slow food, un mouvement aux multiples valeurs
14 Le melon, tellement rafraîchissant !
18 Purée de courge aux pommes
20 Purée de patate douce et colin
22 Semoule aux raisins, purée de carottes et hachis d'agneau
24 Purée de courgette et maïs au jambon
26 Purée de carottes, chou romanesco et blancs de poulet
28 Purée de petits pois, menthe et jambon
30 Compote d'abricots au citron vert
32 Blancs-mangers à la vanille
34 Compote pommes poires vanillée
36 Compote pêches et framboises
38 Velouté de petits pois aux lardons
40 Rillettes de thon et toasts poissons
42 Nid de spaghettis et boulettes de veau sauce tomate
44 Bâtonnets de polenta et jambonneau cochon
46 Nuggets de poisson au sésame
48 Brioches cocottes
50 Tiramisus aux framboises & meringues fantômes
52 Crème au chocolat et au praliné
54 Iles flottantes au coulis de framboises
56 Parfaits à la mousse au chocolat
58 Chakchouka aux oeufs et aux poivrons
60 Cannellonis aux épinards
62 Tajine de poulet aux fruits secs
64 Mijoté de veau aux champignons et à la crème
66 Navarin d'agneau aux petits pois et au riz
68 Gratin de macaronis au jambon et au fromage
70 Poulet au curry et riz basmati
72 Hamburger
74 Ficelles picardes
76 Pizza tomates mozzarella
78 Brownie au chocolat et aux noix
80 Mug cake cookies aux noisettes
82 Gaufres au pop corn, sauce caramel
84 Cupcakes à la vanille et aux Smarties
86 Sablés au chocolat
88 Sucettes cakes
90 Gâteau tigré
92 Cake pops au chocolat blanc
94 Barres croustillantes Carambar et riz soufflé
96 Brioche Butchy` },
    { serie: 'heros', num: 13, date: '2019-09', sommaire: `
4 Les villes où l'on mange le mieux
8 Cakes au maroilles et au carvi
10 Chicons en gratin
12 Carbonade de boeuf aux carottes
14 Crèmes brûlées à la chicorée
16 Tarte au sucre
18 A l'assaut des champignons
20 Tartelettes aux champignons
22 Sauce crémeuse aux champignons et à la moutarde
24 Velouté forestier
26 Terrine forestière
28 Risotto forestier au parmesan
30 Salade de pâtes aux boulettes de poulet
32 Aubergine farcie à l'agneau
34 Poisson vapeur sauce vierge
36 Poulet masala
38 Le poivron sur tous les fronts
40 Beurre doux aux poires et aux noix
42 Croquettes de courgettes
44 Flans d'aubergines au thym
46 Tarte en tourbillon de courgettes au chèvre et au miel
48 Tartare de saumon aux échalotes
50 Fruits & légumes : stop aux idées reçues !
52 Soupe d'automne à la citrouille et à la pomme
54 Gâteau aux pommes, crumble croustillant
56 Cake aux pommes et au miel
58 Gelée de pommes
60 Cocktail à la pomme et au romarin
62 Tarte en tourbillon de pomme au Roquefort et aux noisettes
64 Acheter en vrac, le geste écolo
66 Gâteau magique à la vanille
68 Riz au lait à la vanille et à la mangue
70 Sablés vanille façon cornes de gazelle
72 Crème anglaise à la vanille
74 Carottes rôties aux noix et polenta vanillée
76 Ces aliments qui régulent notre humeur
78 Pizza quatre saisons, sauce tomate maison
80 Pizza à la fondue d'oignons, anchois et olives
82 Pizza aux brocolis (pâte), tomate, salami, mozzarella
84 Focaccia au romarin
86 Fougasse au roquefort
88 Taboulé de brocoli et chou-fleur aux abricots secs
90 Pintxos aux oeufs brouillés et jambon cru
92 Rigatoni au saumon fumé, poireaux et épinards
94 Pain perdu au miel
96 Verrine de fromage blanc fouetté aux figues et biscuits` },
    { serie: 'heros', num: 14, date: '2019-10', sommaire: `
4 Jemmy Brouet, de la Tour Eiffel à la Rochelle
6 Le food court, une nouvelle façon de se restaurer
8 La cuisine, une thérapie qui vous veut du bien
10 La cuisine, une invitation au voyage
12 Les pommes jouent la carte de la diversité
14 La Grèce, une cuisine gorgée de soleil
18 Samoussas, Inde
21 Kobeba, Liban
23 Bretzel, Allemagne
25 Briouates fourrés aux pommes de terre et coriandre, Afrique du Nord
27 Gyoza, Japon
29 Tempura, Japon
31 Pain suédois et saumon gravlax, Suède
33 Fish cakes, Thaïlande
35 Crème de limoncello, Italie
37 Ramos gin fizz, USA
39 Caponata d'aubergines, Italie
41 Arepas, Venezuela
43 Soupe marocaine, Maroc
45 Raviolis vapeur au gingembre et crevettes, Vietnam
47 Croquettes de maïs et fromage, Afrique du Sud
49 Gado gado, sauce cacahuètes, Indonésie
51 Ceviche, Pérou
53 Potage pénikois, Chine
55 Taboulé libanais, Liban
57 Dolmadakia, Grèce
59 Poulet korma, Inde
61 Colombo de porc aux pommes de terre, Caraïbes
63 Keftedes, Grèce
65 Grillades sauce chimichurri, Argentine
67 Tajine d'agneau aux légumes, Maroc
69 Moqueca aux crevettes, Brésil
71 Albondigas, Mexique
73 Saltimbocca et risotto à la courge, Italie
75 Porc sauté aux champignons noirs et bambou, Chine
77 Brochettes de boeuf, sauce épicée à l'avocat, Venezuela
79 Scones à la confiture, Grande-Bretagne
81 Mofo gasy, Madagascar
83 Natilas, Espagne
85 Pastillas crème d'amandes, Maghreb
87 Kladdkaka, fondant chocolat café, Suède
89 Spéculoos maison, Belgique
91 Pasteis de nata, Portugal
93 Danish pastry à la cannelle, Danemark
95 Tiramisu, Italie
97 Pancakes au sirop d'érable, Canada` },
    { serie: 'heros', num: 15, date: '2019-11', sommaire: `
4 Trish Deseine : un soupçon de sucre
8 Pain cocotte
10 Baguettes viennoises aux pépites de chocolat
12 Pain complet
14 Pains au lait
16 Pain sans gluten
18 Pains burgers
20 Le potiron a tout bon
22 Minestrone d'hiver
24 Soupe au curcuma et lait de coco
26 Soupe poireaux et marrons
28 Velouté aux champignons
30 Velouté de brocolis aux croûtons
32 Cuisiner bien, cuisiner malin
34 Croquettes de chou kale
36 Lasagnes végétariennes aux épinards
38 Boulettes « veggie » aux cardes
40 Frittata aux blettes et à la mimolette
42 Chaussons à la viande et aux épinards
44 Ragoût de porc aux poivrons et olives
46 Chili con carne
48 Gratin de poireaux façon tartiflette
50 Gratin de carottes et canard à la béchamel
52 Poulet à la crème, champignons et frites de panais
54 Le coing, douceur automnale
56 Gâteau aux coings
58 Pâte de coing maison
60 Tajine de veau aux coings
62 Taboulé sucré aux coings et grenade
64 Compote pommes et coings à la fleur d'oranger
66 Sur la route gourmande du pays basque
68 Gâteau basque
70 Petit soufflé à l'Ossau Iraty
72 Macarons de Saint-Jean-de-Luz
74 Crèmes brûlées à la piperade
76 Panna cottas oeil et jus de framboise
78 Beignets de potiron au gingembre
80 Cookies araignée d'Halloween
80 Gâteau roulé Halloween
84 Cupcakes chocolat
86 Les fruits, un peu, beaucoup, avec raison
88 Muffins streusel aux fruits secs
90 Chocolat croquant aux fruits secs
92 Tarte aux poires, noisettes et amandes
94 Cantuccini aux amandes et pistaches
96 Cabillaud en croûte de fruits secs` },
    { serie: 'heros', num: 16, date: '2019-12', sommaire: `
4 Idées de cadeaux
8 Les tables en fête
10 A quel foie gras se vouer ?
12 Champagne, que la fête commence !
14 Noël dans le Monde
16 Lendemain de fête... Survivre la tête haute !
18 Verrine de langoustines aux clémentines
20 Cake aux pétoncles et aux herbes
22 Endive croquante à la mousse de ricotta, noix et saumon
24 Mini burger de foie gras à la figue et fondue d'oignons doux
26 Rillettes de saumon
28 Bonbons à l'escargotine
30 Madeleines aux herbes et aux poivrons
32 Sapin de Noël à la tapenade
34 Bisque aux ravioles de homard
36 Huîtres gratinées
38 Foie gras maison
40 Profiteroles de foie gras
42 Tarte fine au boudin blanc et pommes
44 Millefeuille de saumon à la crème d'herbes
46 Eclair de saumon et mousse d'avocat
48 Bouchée à la reine de Noël
50 Cocotte de langouste aux morilles
52 Roulé de magret de canard farci et crumble de cèpes
54 Koulibiac de saumon
56 Dinde farcie aux marrons
58 Roti de boeuf en croûte
60 Civet de sanglier
62 Blanquette de chapon, potimarron et champignons au muscadet
64 Coquille Saint Jacques à la normande
66 Couronne de Noël
68 Bûche au praliné
70 Buchettes de vacherin à la mangue
72 Poires pochées au vin chaud
74 Nougat glacé
76 Trifle de clémentines et pain d'épices
78 Bûche au citron, coco et écorces d'orange confite
80 Bûche Forêt Noire
82 Biscuits pastel
84 Sapins gaufrettes
86 Calendrier de l'avent
89 Chocolat chaud aux épices et sapin sablé
90 Nougat aux fruits secs
92 Saucisson au chocolat
94 Fruits déguisés
96 Cupcakes sapin` },
    { serie: 'moi', num: 29, date: '2020-01', sommaire: `
4 Shopping gourmand
6 Zoom sur les choux
8 Risotto au pesto de brocolis
10 Frittata au chou romanesco
12 Velouté de chou-fleur aux champignons des bois
14 Quiche aux choux de Bruxelles et aux lardons
16 Le curcuma, aux superpouvoirs antioxydants
18 Cocotte de chou rave et riz au curcuma
20 Soupe aux poireaux, épinards et lait de coco au curcuma
22 Curry de crevettes, haricots verts et nouilles de riz
24 Boulettes de poulet au curcuma
26 Flan de courge butternut au curcuma et au safran
28 Le goût de la montagne
30 Gratin dauphinois
32 Soupe à l'oignon gratinée à l'Appenzeller
34 Soufflé au beaufort
36 Burger montagnard
38 Cakes au reblochon et jambon de montagne
40 Haricots à la tomate et saucisse fumée
42 Ragoût de mouton à l'irlandaise
44 Goulash
46 Bourride provençale
48 Tajine de poulet aux figues
50 Balade aux Caraïbes
52 Velouté de courgettes et lentilles corail au colombo
54 Beignets de calamars à la jamaïcaine
56 Purée d'igname gratinée
58 Biscuit roulé à la confiture de goyave
60 Portrait de chef : Hervé Palmieri, alias Hervé Cuisine
60 Blanc-manger coco
64 Crème caramel à l'ancienne
66 Milk shake au caramel
68 Cheese cake aux fruits de la passion
70 Panna cotta à la purée mangue papaye
72 Clafoutis aux poires
74 Tarte façon cheesecake aux kiwis
76 Smoothie aux kiwis, dattes, concombre et persil
78 Bâtonnets glacés aux kiwis
80 Sucettes de kiwis au chocolat et aux noisettes
82 Gâteau moelleux aux kiwis
84 Mug cake au chocolat et aux Chamallows
86 Carpaccio d'ananas au coulis de fruits rouges
88 Verrine de fruits d'hiver sauce chocolat
90 Petit-beurre fourré à la crème de café
92 Beignets aux pommes
94 Gâteau de semoule express au caramel` },
    { serie: 'moi', num: 30, date: '2020-02', sommaire: `
4 Shopping gourmand
6 Manger sain & local avec les circuits courts
8 Batch-cooking, anticiper plus pour manger mieux
10 Poulet aux champignons et à la crème
12 Gratin de pennes au poisson et brocolis
14 Spaghettis aux saucisses et sauce tomate
16 Couscous et boulettes de boeuf sauce tomate
18 Gratin de poulet hawaïen aux poireaux et ananas
20 Colombo de porc
22 Hachis parmentier
24 Quiche saumon ricotta
26 Dahl végétarien
28 Soupe aux crevettes et au chou
30 Velouté de carotte au curry
32 Gratin de crozets
34 La REcyclerie, un lieu qui prône l'éco responsabilité
36 Tarte aux oignons et aux sardines
38 Rillettes de maquereau
40 Soupe de patate douce aux pois chiches et haricots rouges
42 Riz aux crevettes, sauce tomate aux oignons
44 Croquettes de thon
46 Croque-monsieur à la béchamel
48 Tiramisu aux spéculoos et caramel au beurre salé
50 Chaussons aux pommes et aux fruits secs
52 L'art de cuisiner les restes
54 Cake à la raclette
56 Soupe de légumes au poulet
58 Nems au porc et aux légumes
60 Pizza au boeuf haché et au fromage
62 Quiche aux trois fromages et graines de tournesol
64 Bouillon de poulet maison
66 Court-bouillon de poisson
68 Pudding de pain aux pépites de chocolat
70 Cuisiner zéro déchet, pour prendre soin de la planète
72 Smoothie de radis
74 Velouté de fanes de radis
76 Carrot cake aux noisettes
78 Omelette aux fanes de carottes
80 Smoothie banane, curcuma et orange
82 Muffins à la peau de banane et noix de pécan
84 Pancakes aux zestes de citron
86 Citronnade
88 Velouté de trognon de chou-fleur
90 Gratin de pâtes et bouquets de chou-fleur
92 Beignets d'épluchures de courgette
94 Fondant au chocolat et aux courgettes` },
    { serie: 'moi', num: 31, date: '2020-03', sommaire: `
4 News gourmandes
6 Balade gourmande en Italie
8 Pizza Margherita
10 Spaghettis cacio e pepe
12 Veau à l'italienne
14 Soufflé au limoncello
16 Amarettis
18 Panna cottas aux amarettis
20 Atout forme misez sur l'alimentation
22 Bouillon express de dinde aux légumes
24 Tartine gratinée aux oignons et saucisses
26 Gratin de poisson aux poireaux
28 Parmentier de boeuf à la patate douce
30 Curry de porc aux légumes
32 Vive l'agneau de Pâques !
32 Velouté de petits pois et brocolis
34 Raviolis, sauce aux épinards
36 Mini cheesecakes au chèvre, concombre et radis
38 Houmous de betterave
40 Tarte aux carottes nouvelles, brocolis et cresson
44 Feuilleté mouton de Pâques au pesto de roquette
46 Oeufs cocotte aux petits pois
48 Épaule d'agneau farcie aux herbes
50 Moelleux aux deux citrons
52 Tablette de chocolat aux oeufs en sucre
54 La banane, on l'aime à toutes les saisons
56 Milk shake banane caramel
58 Smoothie au cresson, pommes et banane
60 Tarte banane coco
62 Glace à la banane et aux cacahuètes
64 Crumble pomme banane
66 Gaufres aux herbes et au saumon fumé
68 Salade de pommes de terre nouvelles aux moules, sauce curry
70 Bruschetta aux asperges, fèves et petits pois
72 Frittata aux petits pois
74 Mini cakes aux artichauts et jambon
76 Tout beau, tout bio
78 Blanquette de veau aux épinards
80 Blanquette de poulet lait de coco, champignons et citron vert
82 Blanquette de la mer
84 Blanquette d'agneau aux asperges
86 Brioche léopard
88 Financiers aux framboises
90 Biscuits Oreo maison
92 Sucettes de madeleines
94 Rochers coco chocolat` },
    { serie: 'moi', num: 32, date: '2020-04', sommaire: `
6 Rencontre avec Camille Grelet, diététicienne
8 Le soir mieux vaut les éviter
10 Aux petits soins pour son microbiote
12 Foie surmené ? Cap sur les aliments qui guérissent
14 Pas de quartiers avec les agrumes
16 Jus détox pomme, betterave
18 Smoothie vert banane épinards
20 Porridge aux fruits
22 Smoothie bowl myrtilles, coco et amandes
24 Houmous d'épinards à la ricotta
26 Muffins carottes courgettes
28 Samossas au chèvre, épinards et fenouil
30 Rillettes de crabe et saumon en feuilles de laitue
32 Caviar poivron aubergine, bâtonnets de concombre
34 Pain irlandais aux graines
36 Risotto de lentilles aux asperges
38 Salade César légère
40 Salade de moules, poivrons, vinaigrette à l'orange
42 Taboulé de chou-fleur aux poivrons et aux herbes
44 Salade de pommes de terre et haricots verts
46 Flan léger de brocolis
48 Soupe de poireaux à l'indienne
50 Velouté de cresson aux poires et aux épices
52 Croquettes de lentilles
54 Quiche légère aux asperges
56 Papillote de lotte au fenouil et curcuma
58 Cabillaud vapeur au curry et au gingembre
60 Thon grillé sauce coriandre et piment
62 Filet de merlan, purée de fèves au citron vert
64 Brochette de poulet, carottes et brocolis vapeur
66 Navarin de veau aux légumes nouveaux
68 Paupiettes de chou et saumon, olives et câpres
70 Spaghettis aux palourdes, courgettes et tomates
72 Calamars sauce tomate aux épinards
74 Curry thaï aux pousses de bambou
76 Soupe à la rhubarbe, fraise et verveine
78 Verrines au yaourt et granola au chocolat
80 Soupe de fraises au jasmin
82 Sorbet mangue citron vert
84 Milk shake aux fraises
86 Crèmes au chocolat légères et éclats de pistaches
88 Gâteau au fromage blanc et aux fruits rouges
90 Muffins et fromage blanc au coulis de myrtilles
92 Mousse de framboises
94 Clafoutis aux cerises` },
    { serie: 'moi', num: 33, date: '2020-05', sommaire: `
6 L'Espagne sous la fête, une gastronomie irrésistible !
8 Salmorejo de Cordoue
10 Croquettes de jambon
12 Oeufs cocotte aux poivrons et chorizo
14 Churros sauce au chocolat
16 Crèmes catalanes
18 Pâtes aux asperges et au pesto
20 Saumon mi-cuit, fèves, carottes et petits pois
22 Velouté glacé aux courgettes, coppa et tuiles de parmesan
24 Falafels aux pois cassés et petits pois
26 Cake aux épinards et fromage de chèvre
28 Alléger ses recettes en un tour de main
30 Lasagnes poulet épinards
32 Brochettes de boulettes de poulet, salade de lentilles
34 Poulet à la crème et aux brocolis
36 Soupe de poulet aux légumes
38 Pizza au poulet et aux champignons
40 Ces aliments qui survivent au temps
42 Merlu vapeur, sauce bretonne aux épinards
44 Brandade de lieu à la patate douce
46 Porc sauté au caramel et basilic
48 Veau strogonoff
50 Tartare de boeuf aux herbes et aux aromates
52 La cuisine, une thérapie qui vous veut du bien
54 Houmous avocat pois chiches
56 Smoothie banane thé vert
58 Risotto de coquillettes au jambon
60 Petites mousses au chocolat
62 Mini flans aux Carambars
64 Crabe farci
66 Tarte à la courgette, ricotta et citron
68 Rillettes de thon
70 Tzatziki
72 Velouté aux épinards, mâche et chèvre
74 Comme une envie de fraises
76 Terrine glacée vanille aux KitKat
78 Gâteau léger au pop-corn
80 Eton mess aux fruits rouges
82 Sorbet fraise et citron vert
84 Charlotte aux fraises
86 Crème glacée maison aux cerises
88 Chutney de cerises
90 Cheesecake aux cerises et spéculoos
92 Tartelettes aux cerises
94 Gâteau façon streusel à la ceris` },
    { serie: 'moi', num: 34, date: '2020-06', sommaire: `
4 Le site : Je cuisine avec MON ROBOT
6 Totalement cultes ces produits
8 Halte à la constipation
10 Mon assiette bien-être
12 Le beurre nous fait fondre de plaisir
14 Poivron et aubergine, stars de la saison
16 Verrine de purée de poivrons et framboises en gelée
18 Mini tourtes aux oignons et poivrons verts
20 Mille-feuille de chips à la crème de sardines
22 Sablés smileys à la tapenade
24 Poiscamole : caviar de petits pois à la menthe
26 Scones au fromage et aux jeunes pousses
28 Mini gougères aux crevettes grises et au basilic
30 Pesto rouge aux tomates séchées
32 Gaspacho de melon à la pancetta
36 Petit tiramisu tomate, mozzarella et pesto
38 Crumble au caviar d'aubergine et aux lardons
40 Mini quiches lorraines aux épinards
42 Boulettes de légumes à la Vache qui rit
44 Salade crevettes et concombres à la crème d'avocat
46 Petit cheesecake aux biscuits Tuc, fromage frais et radis
48 Mini focaccias sauce yaourt et crudités
50 Oeufs mimosa au chèvre frais et aux herbes
52 Blanquette de veau aux petits pois
54 Poêlée de filet mignon, petits pois carottes
56 Clafoutis de quinoa aux légumes d'été
58 Tomate farcie au chili con carne
60 Moules farcies et frites de patate douce
62 Tajine de boeuf aux carottes et citron confit
64 Couscous végétarien d'aubergine aux légumes
66 Fish and chips de maquereau
68 Verrine de ratatouille aux filets de rouget
70 Tortillas au poulet, légumes et salade
72 Sushis de riz au lait aux agrumes
74 Coeur coulant chocolat caramel au beurre salé
76 Crème caramel aux Carambars
78 Barres de céréales maison aux Smarties
80 Tartelettes à la pêche et au Kiri
82 Barquettes à la mousse de petit-suisse et aux framboises
84 Boulettes de brandade de morue à la coriandre
84 Mini charlottes aux fruits rouges et à la guimauve
86 Mini cookies aux fraises Tagada
88 Flan pâtissier à la framboise
90 Tarte au citron et fruits rouges
92 Pêches blanches pochées au sirop de framboise et réglisse
94 Lait-fraise aux Chamallows` },
    { serie: 'moi', num: 35, date: '2020-07', sommaire: `
4 Le site : Je cuisine avec MON ROBOT
5 Île de Beauté, une gastronomie de caractère
8 Bastelle
10 Stufatu de boeuf
12 Tarte aux figues
14 Canistrelli
16 Beignets au brocciu
18 Le bon goût du melon
20 Smoothie pêche melon
22 Jus de pastèque à la rose
24 Cocktails au sirop de cassis et myrtille
26 Milk-shake melon, poire et pomme
28 Mini gratins de poisson aux petits pois
30 Frittata aux crevettes et aux fèves
32 Terrine de tomates colorées
34 Tarte aux légumes verts
36 Gaspacho tomates et poivrons
38 Les fromages frais à la loupe
40 Tartelettes fines aux courgettes
42 Velouté d'aubergine grillée
44 Soupe froide de courgettes, radis et feta
46 Flan de petits pois et courgettes à la menthe
48 Caponata
50 Barbecue party, mode d'emploi
52 Brochettes de poulet sauce satay
54 Poulet mariné à la bière
56 Brochettes de porc souvlaki à la plancha
58 Brochettes de boulettes d'agneau, purée et salade d'été
60 Brochettes de saumon sauce barbecue
62 Sauté de veau à la tomate et aux olives
64 Émincé de porc aux deux poivrons
66 Korma d'agneau
68 Pavé de lieu vapeur, poireaux et pommes de terre
70 Risotto aux moules et au safran
72 Le pique-nique, l'appel du grand air
74 Gâteau fondant abricots romarin
76 Krantz cake chocolat-noisettes
78 Quatre-quarts au sarrasin, noisettes et pépites de chocolat
80 Cake marbré au chocolat
82 Gâteau léger à la rhubarbe
84 Clafoutis d'abricots
86 Soupe aux deux pêches, verveine et vanille
88 Esquimaux à la pêche
90 Mousse de fromage blanc à l'écrasée de fraises
92 Tiramisu aux nectarines et aux framboises
94 Crumble aux prunes` },
    { serie: 'moi', num: 36, date: '2020-08', sommaire: `
4 Le site : Je cuisine avec MON ROBOT
5 Cru ou cuit ? Ou bien mi-cuit
8 Le rosé de Provence a toujours la cote
10 Citronnade au citron vert et menthe
12 Punch à la fraise
15 Limonade melon pastèque
17 Frozen pina colada
18 Houmous au persil
20 Sablés au parmesan et tomates confites
23 Roulés de galettes au jambon et crème d'artichaut
24 Acras de morue
27 Tarte soleil à la crème de thon et aux tomates confites
28 Gressins au thym et à l'huile d'olive
30 La tomate, star de la saison
33 Cake jambon, olives et basilic
34 Focaccia olives chorizo
37 Soupe froide de petits pois
39 Mini omelettes lardons épinards
41 Gaspacho de melon, mini brochette basilic, jambon, mozzarella
42 Pizza rolls
44 Zaalouk d'aubergines
47 Terrine de fromage frais, saumon et concombre
48 Pain de campagne hérisson aux câpres, tomates séchées et jambon cru
50 Les bocaux, contenants de saveurs
51 Mini pissaladières
52 Les pieds dans la nature, la clé du bonheur
55 Keftas de veau et pains pita
56 Pain de poisson aux petits légumes
58 Boulettes d'agneau aux herbes, sauce au yaourt
61 Poulet mariné sauce aux petits pois
62 Ailerons de poulet sauce tex-mex
64 Salade de légumes verts et lentilles
67 Salade de pommes de terre au poulet et aux légumes
68 Chili con carne
70 Salade de pâtes au pesto
73 Sardines grillées sauce chermoula
77 Gâteau glacé aux fruits
79 Tarte aux prunes
80 Gâteau couronne aux framboises et à l'orange
83 Esquimaux aux fruits
84 Sorbet au melon et au thym, salade de fruits
86 Panna cottas aux fraises des bois
89 Tartelettes citron framboises
91 Gâteau à la pêche
92 Cheesecakes aux framboises en verrine
94 Mini moelleux aux abricots` },
    { serie: 'moi', num: 37, date: '2020-09', sommaire: `
4 Le site : Je cuisine avec MON ROBOT
6 Petit déj, à chacun son idéal
8 Smoothie bowl aux mûres et aux myrtilles
10 Granola au chocolat, aux prunes et aux figues
13 Brioche au beurre
15 Matefaim aux pommes
17 Smoothie au lait fermenté et aux cassis
18 Evitez les pièges de la soupe
20 Salade de farfalles au poulet, crème de parmesan
23 Salade de champignons, sauce au yaourt, citron et herbes
24 Salade de haricots verts aux pêches et aux amandes
26 Salade de pommes de terre aux coques
29 Salade de chou-fleur aux pois chiches et à la grenade
31 Soupe froide au concombre et au yaourt
32 Crème d'aubergine aux noix
34 Velouté de courgette au chèvre frais
36 Soupe de potiron à l'orange et à la crème
39 Soupe de pois cassés et chorizo grillé
40 Le coup de barre matinal
42 Crumble aux flocons d'avoine, pommes, miel et amandes
45 Crumble aux légumes d'automne et au fromage
46 Crumble de poulet aux poireaux et aux noisettes
49 Tarte crumble à la ricotta et aux abricots
51 Tarte à la ratatouille façon crumble
53 Tomates farcies au boeuf et aux poivrons
55 Bucatini alla amatriciana
56 Ketchup maison aux tomates cerise
59 Panna cotta à la tomate
61 Cocos de Paimpol à la tomate et poitrine de porc
62 La beauté vient en mangeant
65 Crevettes au curry (Indonésie)
66 Tiep bou diem (Sénégal)
68 Petites pizzas à la viande (Liban)
71 Tartelettes à la banane (Thaïlande)
72 Gâteau de patate douce (Océan Indien)
75 Lasagnes végétariennes aux aubergines, patates douces et épinards
77 Porc aux abricots et aux amandes
78 Quiche sans pâte courgette petits pois
80 Dos de cabillaud, risotto de petit épeautre aux olives et poivrons
83 Quenelles de brochet sauce Nantua
84 La figue, emblème méditerranéen
87 Pizza à la mozzarella, figues, raisins, jambon et roquette
88 Financiers aux figues et glace au curcuma
90 Chutney de figues
93 Riz au lait, aux figues et aux raisins
94 Cheesecake à la ricotta et raisins rôtis` },
    { serie: 'moi', num: 38, date: '2020-10', sommaire: `
4 Le site : Je cuisine avec MON ROBOT
6 Automne, le bonheur est dans l'assiette
8 Cuisine malin, pour budget allégé
10 Les courges, une histoire de diversité
12 Minimiser son temps
14 Mini cake salé poivron et feta
19 Sablés au parmesan et aux olives
21 Rillettes de saumon
22 Bruschetta au caviar de tomates, copeaux de pecorino
24 Crackers maison aux graines
26 Houmous de haricots blancs
29 Smoothie vert
31 Mousse de radis au chèvre frais
32 Soupe de carottes à l'orange
35 Salade de lentilles, betteraves rouges et halloumi grillé
37 Nage de Saint-Jacques au curry
39 Toast à l'avocat, roquette et tomates séchées
40 Soupe asiatique aux nouilles, crevettes et légumes
42 Quiche aux courgettes, feta et olives noires
45 Omelette aux herbes
47 Velouté de brocoli à la pomme
48 Salade de brocolis aux zestes de citron
51 Soupe de betteraves à la ricotta
52 Pappardelles à la sauce tomate, lapin et romarin
55 Saumon grillé, purée de chou-fleur et pesto de roquette
57 Mijoté de lapin à la citronnelle
58 Risotto à la saucisse et aux petits pois
60 Colombo de porc
63 Blanquette de dinde en feuilleté
64 Clafoutis à la truite fumée et petits pois
67 Fregola aux moules et au safran
68 Papillote de cabillaud aux légumes
71 Tajine de boeuf citron olives
73 Ragoût d'agneau à la citrouille
74 Carbonade flamande
77 Banana frozen yogurt au caramel
78 Pêche Melba express
80 Rochers coco
83 Crème au citron Pêche
84 Les plats mijotés
85 Financiers aux pistaches et pépites de chocolat
86 Mousse légère au café
89 Pancakes au sirop d'érable, noix de pécan et bananes
91 Fontainebleau aux figues
92 Fondant au chocolat
95 Crème anglaise au praliné` },
    { serie: 'moi', num: 39, date: '2020-11', sommaire: `
4 Le site : Je cuisine avec MON ROBOT
6 Escapade gourmande en Normandie
9 Salade fécampoise de harengs et pommes de terre
11 Sole grillée, sauce à la crème d'Isigny et aux champignons
12 Cake aux noix et à l'andouille de Vire
15 Tarte normande
16 Fallue normande
19 Soupe à la courge butternut et chorizo
21 Soupe à l'artichaut et croûtons
22 Velouté de chou-fleur aux herbes
24 Crème de panais
26 Soupe du potager
28 Les sous-bois : le panier gourmand
31 Pizza blanche aux champignons et aux épinards
33 Omelette aux herbes et aux champignons des bois
35 Rouleaux feuilletés aux champignons et aux oignons
36 Escargots en persillade
39 Crèmes brûlées aux champignons
41 Purée de courge musquée aux marrons
42 Crumble de courge butternut aux champignons
45 Gratin de potimarron au confit de canard
47 Tarte à la courge et au chocolat
48 Crèmes brûlées à la courge
50 La cuisine au vin
52 Confiture d'oignons au vin rouge
55 Poires pochées au vin et aux épices
57 Oeufs en meurette
58 Sauce aux échalotes et au vin blanc
61 Sabayon aux myrtilles et au pamplemousse
62 Le tajine, les bonnes raisons d'en préparer un
64 Tajine de poulet
67 Tajine de poisson aux carottes, céleri et semoule
68 Tajine d'agneau aux légumes
71 Tajine de crevettes aux tomates et à l'ail
72 Tajine de keftas aux carottes et abricots secs
74 Le sucre en cuisine, le divorce est consommé
77 Energy balls aux dattes, abricots et pistaches
79 Flan pâtissier
81 Pudding aux graines de chia, framboises et kiwis
82 Gâteau renversé à la banane
84 Smoothie aux fruits exotiques
87 Mini cakes glacés au citron
89 Sablés au beurre d'amandes
90 Madeleines au thé vert et au sésame
93 Biscuits Anzac aux flocons d'avoine
95 Biscuits cigarettes` },
    { serie: 'moi', num: 40, date: '2020-12', sommaire: `
4 Le site : Je cuisine avec MON ROBOT
6 News gourmandes
8 Finlande : un voyage gastronomique au pays du Père Noël
10 Champagne : des bulles plein la tête
12 Le plein de belles initiatives locales
14 Le chocolat, la tentation de Noël
17 Vin chaud aux agrumes et aux épices
19 Margarita à l'orange sanguine
20 Huîtres à la chantilly de foie gras et brisures de truffe
22 Bâtonnets de pizza au fromage de chèvre
24 Ravioles de radis noir aux rillettes de crevettes
27 Mousse de saumon et crabe en verrine
28 Petits feuilletés apéritif au pesto de roquette et amandes
31 Tarte aux fleurs de saumon
33 Saint-Jacques poêlées sauce à l'orange
35 Velouté aux cèpes
36 Crème de châtaignes au foie gras
39 Blanquette d'escargots et riz noir
40 Soupe d'huîtres
43 Crème brûlée au foie gras
45 Brouillade aux truffes
46 Chapon farci au foie gras
49 Filet de chevreuil, sauce au porto et aux airelles, purée de courge
51 Roulade de dinde aux marrons et à la truffe
52 Filets de Saint-Pierre sauce au champagne, tagliatelles
55 Navarin de Saint-Jacques, crevettes et homard
57 Tourte aux deux saumons
59 Risotto aux poires, noix et zestes de citron
60 Gratin de chou-fleur au chèvre de Touraine
62 Cookies cups aux fruits rouges
64 Ile flottante façon bûche
67 Tarte chocolat caramel
68 Bûche de Noël façon forêt noire
70 Mont-blanc
73 Bûche glacée à la mandarine
75 Trifle aux agrumes et au granola chocolat
77 Panna cotta au coulis passion-mangue
78 Cheesecake au chocolat et à l'anis étoilé
81 Truffes au chocolat
83 Sapin tout chocolat en mendiants aux fruits secs
84 Brioche marbrée roulée
86 Pain d'épices à la farine de seigle et miel de montagne
89 Bouchées aux dattes et aux cacahuètes
91 Biscuits étoilés à la cannelle
93 Biscuits au citron
95 Mini cannelés aux épices` },
    { serie: 'moi', num: 41, date: '2021-01', sommaire: `
6 Balade gourmande dans le Nord
9 Flamiche au Maroilles
11 Gratin de chicons à la mimolette et à la bière
13 Waterzoï de poulet
14 Cramique aux raisins secs
17 Tiramisu au café et spéculoos
19 Smoothie de chou kale
21 Taboulé de chou-fleur aux abricots secs
22 Tartines de pain noir à la crème d'avocat et lamelles de betterave
24 Verrine de mâche, radis et purée de betterave
26 Salade de haricots blancs aux herbes, sauce au thon
28 La belle saison des légumes racines
31 Tatin de navets au miel
33 Velouté de topinambours
35 Blinis de panais
37 Petits soufflés aux carottes et à la vache-qui-rit
39 Salade de carottes à l'orange et aux olives
40 Les épices, elles ré-enchantent le goût
42 Samossas au boeuf et épices tandoori
45 Velouté de lentilles corail au curry
46 Poisson vapeur, spaghettis et sauce au paprika
49 Compote de pommes à la fève tonka
50 Chocolat chaud mexicain
53 Boulettes d'agneau aux petits pois
55 Crumble de poireaux aux noisettes et pruneaux
56 Parmentier de lieu et chou-fleur
59 Aïoli de cabillaud
61 Ragoût de boeuf aux oignons, pommes de terre au four
62 La Chandeleur, des crêpes et des traditions
65 Gaufres de pommes de terre aux herbes
67 Gaufres liégeoises, ganache au chocolat
69 Crêpes au sucre et au citron
70 Crêpes tout chocolat
73 Galettes de sarrasin complètes
74 Bien manger pour affronter l'hiver
77 Sorbet à la mangue
79 Petites compotes à la papaye
80 Tarte aux kiwis
82 Baba au rhum aux fruits de la passion
84 Sauté de poulet aux crevettes et à l'ananas
86 Petit flan coco
88 Tarte flan à la mirabelle
90 Clafoutis pomme-poire aux pépites de chocolat
92 Chocolat liégeois maison
95 Panna cotta à la pistache et aux flocons d'avoine` },
    { serie: 'moi', num: 42, date: '2021-02', sommaire: `
6 Noix, noisettes & amandes
8 Goûters et desserts : et si l'on replongeait en enfance ?
10 Les citrons donnent du peps à nos assiettes
12 Vive le fait maison ! Comment cuisiner sans trop dépenser
13 Soupe au chou-fleur rôti
14 Des légumes pour la minceur
17 Falafels à la carotte
19 Bouquets de chou-fleur panés croustillants
20 Smoothie betterave, orange et pomme
23 Petites crèmes de maïs et pop-corn
25 Houmous de betterave jaune et artichauts
27 Sablés au fromage et aux noisettes
29 Smoothie vert pomme, kiwi, poivron et concombre
31 Pizza dip au fromage et ciboulette
34 Tarte aux échalotes, poireaux et chèvre
37 Velouté de laitue
38 Quiche aux fanes
40 Frittata aux pommes de terre et brocolis
43 Soupe poireaux, pomme de terre et saucisse
44 Galettes de chou rave
47 Petits flans de polenta aux carottes
49 Fricadelles de poulet, salade de pomme de terre à l'aneth
51 Risotto aux choux de Bruxelles, panais et noisettes
52 Pâtes au pesto de tiges
55 Brandade de merlan et persillade croustillante
56 Boulettes de boeuf aux herbes et blinis de patates douces
59 Gnocchis de butternut au beurre de sauge
61 Gratin de navets et courge au porc haché
63 Moules au jambon
65 Ile flottante au chocolat
67 Mousse de yaourt au citron
68 Riz au lait à la confiture de framboise
71 Tarte rustique aux pommes
72 Tarte au fromage blanc
74 Amandine poire chocolat
77 Beignets de bananes
78 Carrot cake
81 Crèmes brûlées aux spéculoos
83 Far breton aux pommes
84 Confiture d'orange et de clémentine
87 Pancakes
88 Compote de kiwis
90 Muffins aux pépites de chocolat
93 Biscuits fourrés au chocolat
94 Brioche perdue` },
    { serie: 'moi', num: 43, date: '2021-03', sommaire: `
6 Ces légendes culinaires : faut-il y croire ?
8 Crème du Barry à la truite fumée
10 Pâtes carbonara au chou romanesco
12 Soupe de pois cassés aux lardons
14 Gratin de frites de légumes aux champignons et pousses d'épinards
16 Tarte tourbillon de patates douces et oignons rouges
18 Le combat écologique dans les assiettes
20 Oeuf mollet et petits légumes de printemps
22 Omelette aux oignons nouveaux
24 Pizza verte au pesto de roquette
26 Gaufres aux petits pois
28 Beurre aux herbes et sauce crudités
30 Les céréales, rien de tel pour être en forme
32 Risotto de petit épeautre aux châtaignes et pruneaux
34 Gâteau au quinoa et aux courgettes
36 Granola au sarrasin, miel et chocolat
38 Riz biryani aux fruits secs
40 Frites de polenta
40 Smoothie détox au citron, pomme, céleri et curcuma
42 Saint-Jacques vapeur au beurre de combava
44 Tarte aux deux citrons
46 Cupcakes au citron
48 Côte de veau rôtie à la gremolata
52 Une balade gourmande au Mexique
54 Tacos maison au saumon, avocat et chou rouge
56 Gratin de boeuf et maïs à la mexicaine
58 Escalopes de dinde sauce mexicaine
60 Empanadas au thon et aux poivrons
62 Flan coco
64 Boeuf au curry rouge
66 Gratin de chou-fleur au saumon
68 Blanquette de veau aux carottes nouvelles
70 Filet de cabillaud et pommes de terre nouvelles, sauce aux herbes et citron
72 Sauté de porc aux pommes et au cidre
74 Gâteau de Pâques au chocolat
76 Sablés oeufs à la confiture
78 Mini vacherin façon pavlova aux groseilles
80 Brioches au sucre lapin de Pâques
82 Cuillères de chocolat et petits oeufs
84 Rayonner toute l'année avec ces aliments bonne mine
86 Cake au chocolat et aux amandes
88 Cake à l'ananas, noix de coco et rhum
90 Cake aux noisettes
92 Cake citron pavot
94 Cake à l'avocat, citron vert et pistaches` },
    { serie: 'moi', num: 44, date: '2021-04', sommaire: `
6 Les pâtisseries célèbres nous racontent leur histoire
8 La pâtisserie sans sucre : mission impossible ?
10 Mettre la main à la pâte avec la bonne farine !
12 Les légendes culinaires : tout comprendre pour gaspiller moins
16 Pain complet sportif
18 Pains ciabattas
20 Pains viennois au chocolat
22 Pain cocotte
24 Pain burger pavot sésame
26 Pain nordique aux graines
28 Pain de mie brioché
30 Pain polaire
32 Pain marocain à la semoule
34 Pain au maïs
36 Pain à effeuiller au chorizo
38 Ficelles aux olives
40 Baguette pissaladière
42 Pain hérisson au pesto et au fromage
44 Chapelure maison
46 Panini au caviar d'aubergine et fourme d'Ambert
48 Pizza 4 saveurs
50 Croque-monsieur campagnard
52 Focaccia au romarin et au cumin
54 Quiche au saumon et au chou-fleur
56 Chaussons aux pommes
58 Muffins au chocolat
60 Chouquettes
62 Beignets au chocolat praliné
64 Brioches feuilletées à la cannelle
66 Brioches aux pralines
68 Cannelés
70 Babka
72 Brownies chocolat noix de pécan
74 Financiers au miel et aux pistaches
76 Meringues au caramel et noisettes
78 Tarte tropézienne
80 Amandine aux poires
82 Macarons au citron
84 Cake Factory : et vos gâteaux prennent vie !
84 Flan pâtissier
86 Tartelettes aux fraises
88 Éclairs au café
90 Cake au thé matcha et aux framboises
92 Tarte au chocolat, cacahuètes et caramel
94 Bûchettes de framboises à la rose` },
    { serie: 'moi', num: 45, date: '2021-05', sommaire: `
6 En route vers le pays Basque
8 Axoa de veau
10 Thon Marmitako
12 Ossau-Iraty et confiture de cerises noires
14 Macarons de Saint-Jean-de-Luz
16 Gâteau basque à la confiture de cerises noires
18 Clafoutis aux petits pois et bacon
20 Salade de fèves et petits pois à la burrata
22 Velouté de cosses de petits pois
24 Risotto primavera aux crevettes
26 Minestrone
28 Un potager sur mon balcon
30 Oeufs cocotte aux asperges
32 Flan aux herbes et à la brousse
34 Croquettes de brocolis au basilic et pignons
36 Quiche au jambon, chèvre et ciboulette
38 Velouté de patate douce à la feta
40 Cuisiner avec ses enfants, c'est bon pour le moral !
42 Nuggets de poulet
44 Soupe de poulet aux pâtes et aux légumes
46 Parmentier de carotte et patate douce
48 Zebra cake chocolat orange
50 Barres de céréales maison
52 Tomates farcies au veau
54 Pintade farcie, beurre aux herbes et au citron
56 Navarin d'agneau printanier
58 Saumon à l'oseille
60 Dos de cabillaud aux aromates en papillote
62 Mayonnaise allégée à l'aneth
64 Vinaigrette curry coco
66 Bowl saumon avocat et vinaigrette asiatique
68 Sauce César au yaourt
70 Sauce à l'avocat, herbes et citron vert
72 L'heure du thé à travers le monde
74 Charlotte aux fruits rouges
76 Gâteau au chocolat, amarettis et framboises
78 Pavlova aux pêches et aux amandes
80 Cheesecake aux fraises et meringues
82 Gâteau roulé crémeux façon mojito
84 Voir la vie en fruits rouges
86 Brioche perdue aux cerises
88 Crumble fraise rhubarbe
90 Jus détox aux fraises et au thé vert
92 Sorbet aux framboises et à la rose
94 Panna cotta au coulis de framboises` },
    { serie: 'moi', num: 46, date: '2021-06', sommaire: `
6 Connaître son poids de forme... et le garder !
8 Entretenir sa bonne mine
10 Help ! Mon enfant est en surpoids
14 Les valeurs nutritionnelles, on compte dessus
16 Tzatziki glacé aux noix
18 Pizza apéritive aux courgettes et olives
20 Cervelle de canut
22 Rillettes de truite
24 Roulés d'omelette aux herbes
26 Houmous de carottes aux épices
28 Jus détox carotte pomme gingembre et curcuma
30 Jus détox poire kiwi et menthe
32 Crackers aux graines
34 Petits macarons aux champignons, sardines et fromage frais à l'aneth
36 Gaspacho de tomates vertes
38 Asperges blanches, sauce aux herbes
40 Salade de quinoa aux radis et aux carottes
42 Salade de truite aux pois gourmands, carottes et amandes
44 Soupe végétarienne de printemps
46 Soupe aux poivrons rouges et aubergines rôtis
48 Terrine de légumes au fromage frais
50 Velouté de petits pois, concombre et épinards
52 Courgettes rondes farcies au fromage de chèvre et aux herbes
52 Esquimaux melon pastèque
54 Clafoutis de légumes
56 Thon mi-cuit au sésame et haricots verts vapeur
58 Papillote de poulet au cumin et aux carottes
60 Boulettes de boeuf et légumes à la marocaine
62 Papillote de maquereau aux tomates et au thym citron
62 Pâtes à la ricotta, courgettes et poireaux
64 Crumble végétarien à la ratatouille
66 Curry vert au porc et aux aubergines
68 Boulettes de poisson aux herbes et au fenouil
70 Calamars mijotés tomate basilic
72 Brochettes de poulet mariné au curry, sauce tomate
78 Tarte au fromage blanc et fruits rouges
80 Petits gâteaux au yaourt et aux framboises
82 Gratin de mûres
84 Clafoutis léger aux cerises
86 Sorbet myrtilles banane
88 Mousse légère au chocolat et fruits rouges
90 Biscuits aux graines et au miel
92 Pêches de vigne pochées au sirop de verveine
94 Verrines de yaourt de coco et coulis d'abricot` },
    { serie: 'moi', num: 47, date: '2021-07', sommaire: `
6 Jus de nectarine et abricot à la lavande
8 Margarita aux fruits rouges
10 Smoothies fraîcheur aux fruits
12 Soupe de melon glacée aux tomates et au basilic
12 Esquimaux à la fraise et au yaourt
14 Coupelles chocolat et sorbet à la cerise
16 Légers ou corsés, les fromages sont nos meilleurs amis !
18 Baba Ganoush
20 Gaspacho du soleil à la féta
22 Muffins aux tomates séchées et aux olives
24 Clafoutis aux abricots et au romarin
26 Houmous aux artichauts, haricots blancs et paprika
28 Clafoutis aux raisins, aux amandes et aux pignons
30 Clafoutis à la truite fumée, mozzarella, roquette et ciboulette
32 Clafoutis aux courgettes et au jambon cru
36 Clafoutis sans lactose aux mûres et aux poires
38 Rosés. La couleur des vacances !
40 Brochettes de poulet sauce satay
42 Keftas à la plancha
44 Travers de porc au barbecue, sauce teriyaki
46 Saumon mariné grillé, sauce avocat
48 Sauce barbecue
50 Poivron farci au poulet, couscous et échalotes
52 Pisto : ratatouille de légumes à l'oeuf
54 Pizza aux antipasti
56 Tajine de veau aux fèves et au citron
58 Bourride
60 Les plaisirs de la mer
62 Salade de langoustines aux lardons
65 Raviolis au crabe
66 Encornets farcis au riz, sauce tomate
68 Ramequins de crabe farci
70 Club sandwich au homard
72 Le miel, une douceur pour nos papilles
74 Gâteau fondant aux figues, amandes et noisettes
76 Alfajores à la confiture de lait et noix de coco
78 Biscuits à la vanille et à l'angélique confite
80 Biscuits aux figues
82 Fougasse à l'anis
84 La myrtille, elle nous fait tourner la tête !
86 Cheesecakes aux myrtilles en bocaux
88 Tarte rustique aux pêches et aux framboises
90 Tarte aux myrtilles et lemon curd
92 Compote d'abricots au thym et chantilly coco
94 Soupe fraise rhubarbe à la mélisse` },
    { serie: 'moi', num: 48, date: '2021-08', sommaire: `
6 Une cuisine optimale, sans gaspillage
8 La figue, de la douceur et des fibres !
8 Mini pizzas verde au pesto et à la ricotta
10 Faire ses courses efficacement, ça s'apprend !
12 La mise sous vide, gardienne des saveurs
14 Batch cooking. La tendance culinaire qui vous fait gagner du temps.
18 Smoothie à la mâche et pomme Granny-smith
20 Bouchons de panisse grillés
22 Concombre apéritif, crème aux herbes
25 Cookies salés aux olives
27 Chupitos de melon, brochettes de jambon ibérique
29 Muffins aux oeufs de saumon et à l'anis
30 Cocktail à la pêche et au thym citron
33 Samossas au thon et aux légumes
35 Houmous aux coeurs de palmier
37 Salade de haricots verts aux pêches rôties, lentilles et chèvre
38 Salade de lentilles au saumon fumé, oeuf poché
41 Tourte aux légumes
42 Velouté de courgettes à la faisselle et aneth
45 Petites salades de cocos de Paimpol aux sardines
46 Cake à la coppa, beaufort et noix
49 Terrine d'aubergine à la tomate et aux herbes
50 Crème de poivrons rouges à la tomate
53 Tartines de caponata à la sicilienne
55 Salade de nouilles soba aux petits pois, avocats et wasabi
57 Riz créole aux crevettes et chorizo
58 Fondue de poireaux
60 Anneaux de calamars à la tomate
62 Estouffade de boeuf à la provençale
65 Curry de dinde aux brocolis
67 Clafoutis aux poireaux et surimi
69 Pavés de saumon aux pommes de terre et à l'aneth
70 Crumble de patate douce aux pois chiches
73 Penne aux tomates fraîches, sauce tomate et lardons
75 Poivrons farcis au boeuf et au riz
77 Panna cotta aux myrtilles
78 Esquimaux aux framboises et yaourt
80 Cheesecake aux figues
83 Fromage blanc au coulis de fruits rouges
85 Tarte aux abricots
86 Gâteau moelleux aux pêches
89 Clafoutis aux mirabelles
90 Brocciu à la compote de fraises-rhubarbe
93 Cookies au chocolat et aux noisettes
95 Biscuits tout chocolat` },
    { serie: 'moi', num: 49, date: '2021-09', sommaire: `
6 Jamais sans ma lunch box !
6 Babka au basilic
8 Salade de lentilles, orange et fruits secs
10 Mini tortillas aux moules
12 Bisque de crevettes
14 Crème vichyssoise aux épinards
18 Pasta box de spaghettis à la bolognaise
20 Darnes de saumon aux brocolis
22 Salade de lentilles corail, crevettes, courgettes et maïs
24 Muffin carotte-anis et salade de chou-rouge
26 Velouté vert
29 Entretenir sa bonne mine
30 Flan de légumes à la provençale
32 Cannellonis de courgettes au chèvre
34 Houmous d'aubergine aux noix de cajou
36 Tomates farcies à l'orge perlé
38 Coulis de poivrons rouges
40 Crevettes en sauce tomate et spaghettis de courgette
42 Curry de poulet au potimarron
44 Petits pois à la française
46 Veau à la rhubarbe
50 Les céréales, des aliments qui nous veulent du bien
52 Risotto aux artichauts, citron confit et coppa
54 Soupe de riz à la tomate et au thym
56 Papillotes de saumon au riz et aux poires
58 Salade camarguaise
58 Filet de truite aux poireaux et à la crème
60 Gâteau de riz de Mamie au caramel et à l'orange
62 La saisonnalité, et si elle guidait vos achats ?
64 Smoothies de concombre
66 Verrine de guacamole, faisselle au curry
68 Tiramisu aux framboises
70 Petites mousses au chocolat et caramel
72 Compote d'abricots au muscat et lavande
74 Namoura : gâteau libanais à la semoule
76 Brownies de riz soufflé au caramel
78 Cake à l'abricot
78 Crumble aux pommes et myrtilles
80 Crinkles au chocolat
82 Biscuits coco et flocons d'avoine
84 La pomme, ses bienfaits incroyables sur la santé !
85 Smoothie pomme passion
88 Crumpets à la pomme
92 Tarte tourbillon aux pommes
94 Poulet massala aux pommes` },
    { serie: 'moi', num: 50, date: '2021-10', sommaire: `
6 Ces produits à toujours avoir dans ses placards
8 Faire ses courses efficacement, ça s'apprend !
10 En cuisine... bien s'entourer pour optimiser son temps
12 Le raisin, c'est bon pour le coeur
14 Cerveau : l'alimentation qui booste les neurones
16 Thoïonade et légumes croquants
18 Petits veloutés façon endives au jambon
20 Mini flammeküche minute
22 Petits bouchons au thon
24 Gaspacho de betterave au basilic
26 Houmous de courgettes
28 Croquettes de camembert aux herbes
30 Bricks au chèvre et aux olives
32 Rillettes de sardines
34 Smoothie de concombre et oeufs de saumon
36 Velouté aux épinards et aux herbes
38 Moules au curry
40 Nage de crevettes tandoori-coco
42 Soupe de chou-fleur au citron
44 Fondue express
46 Oeufs brouillés au curcuma
48 Soupe de carottes
50 Salade de riz aux pois chiches et radis
52 Champignons à la grecque
54 Tortellinis au pesto de roquette
56 Keftas d'agneau
58 Nage de merlan aux légumes
60 Champignons farcis de persillade et jambon
62 Lotte aux choux de Bruxelles, sauce verte
64 Nouilles soba au sésame et ciboule
66 Brocolis sauce au roquefort
68 Poulet sauce aigre-douce
70 Risotto de fregola à la courge
72 Gratin de Saint-Jacques aux poireaux
74 Magrets de canard aux pêches
76 Chocolat chaud à la cannelle et guimauve
78 Cookies chocolat au lait et pépites de caramel
80 Verrine à la confiture de lait
82 Lassi à la mangue
84 Granola croquant au miel
86 Verrine de yaourt aux fruits rouges
88 Tartines au beurre de mangue et aux kiwis
90 Pancakes aux framboises
92 Rochers coco
94 Eton mess aux abricots` },
    { serie: 'moi', num: 51, date: '2021-11', sommaire: `
6 La Bretagne, ses trésors culinaires
9 Palourdes farcies
10 Marmite de cabillaud aux cocos de Paimpol
12 Galette à l'andouille de Guémené, oeuf et fromage
16 Far aux pruneaux
18 La carte de l'équilibre au petit-dej'
20 Brioche végan
22 Pancakes aux fruits et au miel
24 Pâte à tartiner au chocolat et noisettes
26 Smoothie bowl exotique
28 Scones aux raisins secs
30 La soupe. Pourquoi on l'adore ?
32 Bisque de crevettes grises
34 Soupe de pois cassés aux saucisses fumées
36 Potage traditionnel carottes, poireaux et pommes de terre
38 Bouillon de poulet aux légumes et vermicelles
40 Velouté de brocolis aux herbes
42 Tempura de chou-fleur au curry
44 Cake au jambon et tomates confites
46 Tartines de fromage aux fines herbes
48 Couscous végétarien
50 Salade paysanne de pommes de terre
52 Quiche au thon et à la tomate
54 Petites quiches au poulet et curry
56 Quiche aux oignons et au comté
58 Quiche aux brocolis et aux carottes
60 Quiche à la roquette
62 Légumes oubliés, plaisir retrouvé
64 Gratin de potimarron et boeuf haché
66 Purée de potimarron à la cancoillotte
68 Tarte à la courge et au miel
70 Cookies de butternut
72 Flan de butternut et pois chiches
74 Poulet au caramel et aux fruits exotiques
76 Saumon sauce aigre-douce et chou chinois
78 Ragoût de porc aux champignons et à la bière
80 Champignons et pancetta, sauce à la crème
82 Purée de carottes
84 La poire, ce fruit d'automne
86 Mousse de poires et biscuits à la cuillère
88 Gâteau renversé aux poires et vanille
88 Petites galettes bretonnes au beurre
90 Smoothie aux poires, raisins et litchis
92 Sorbet poire
94 Risotto aux poires et gorgonzola` },
    { serie: 'moi', num: 52, date: '2021-12', sommaire: `
6 News gourmandes
8 Mocktail ananas hibiscus
10 Martini dance
12 Cocktail Ginger pear
14 Petits cornets de boudin blanc
16 Couronne apéritive au saumon
18 Blinis aux crevettes, mousse citron gingembre
20 Mini bouchées aux escargots
22 Dip de légumes à la crème d'artichaut
24 Le Périgord, la folie gourmande
26 Velouté de cèpes aux châtaignes
28 Huîtres chaudes au cidre
30 Mini gratin de homard
32 Cake aux noix et magret fumé
34 Velouté de langoustines aux truffes
36 Foie gras mi-cuit au pavot
38 Terrine de saumon à la langouste
40 Magret de canard séché
42 Les stars du réveillon
44 Cailles farcies aux raisins
46 Filets de bar sauce aux huîtres
50 Crème de champignons au poulet et aux morilles
50 Saint-Jacques poêlées et purée de topinambour
52 Daube de sanglier aux coings
54 Petites tourtes forestières au confit de canard
56 Céleri soufflé à la truffe
56 Pommes duchesse
58 Mini kouglofs au munster
60 Le champagne fait pétiller nos soirées
62 Bûche de Noël à la crème de marrons
64 Mousse glacée caramel au beurre salé
68 Riz au lait aux griottes
70 Merveilleux au chocolat
72 Sorbet mandarine et toasts de pain d'épice
74 Bûche façon cheesecake aux fruits de la passion
76 Savarin de Noël au chocolat
78 Quand sonne l'heure du thé
80 Chocolat liégeois
80 Chocolat chaud à la fève tonka et mini-guimauves
82 Panettone
84 Petits sablés
86 Orangettes et fruits secs au chocolat
88 Truffes au chocolat
90 Cake de Noël aux fruits secs
92 Bonshommes en pain d'épices
94 Galette des rois à la crème d'amandes` },
    { serie: 'moi', num: 53, date: '2022-01', sommaire: `
6 Cuisine du monde
8 Briouates
10 Tajine d'agneau aux amandes et abricots
12 Petits pains marocains à la semoule
14 Palouza à l'orange
16 Crêpes 1000 trous
18 Soupe de chou-fleur, champignons et parmesan
20 Velouté au potiron et graines de courge épicées
22 Velouté de carottes à l'orange
24 Soupe à l'oignon gratinée
26 Crème de lentilles au lard grillé
28 Les fromages tout ce qu'il faut savoir
30 Petites crèmes brûlées au Munster
32 Fondue au chèvre
34 Quiche aux trois fromages
36 Scones au cheddar
40 Pavé de boeuf grillé, sauce au munster
42 Couteaux en persillade gratinés
44 Salade de boeuf aux haricots coco
46 Salade de riz aux herbes et pois chiches
46 Gratin de ravioles au reblochon
48 Petits flans de céleri rave et saumon fumé
50 Tarte tourbillon aux légumes
52 Carbonade flamande
54 Curry rouge de gambas au céleri
56 Sauté de porc aux carottes
58 Pennes à la sauce bolognaise
60 Gratin de moules et lieu noir aux poireaux
62 La cuisine au café. Et pourquoi pas ?!
62 Beignets de banane à la noix de coco
64 Café liégeois
66 Café frappé
68 Crêpes chocolat confiture
68 Glace au café
70 Noix de Saint-Jacques rôties, sauce au café
72 Bundt cake marbré au café
74 Oreillettes
76 Fritelles
84 L'ananas. À la pointe de l'exotisme
86 Smoothie ananas façon piña colada
88 Gâteau renversé ananas safran
90 Petits flans légers ananas-coco
92 Gaufres au sucre
92 Marmelade d'ananas
94 Panna cotta vanille, ananas et citron vert` },
    { serie: 'moi', num: 60, date: '2022-08', sommaire: `
6 Trucs et astuces de votre robot
8 Virgin mojito à la fraise
10 Cocktail vert melon ananas
12 Gaspacho de betterave
14 Petites mousses à l'avocat
16 Cookies au bleu et noix de pécan
18 Bloody Mary
20 Tempura de crevettes à la bière
22 Pakoras
24 Panna cotta au chèvre et curcuma
26 La carotte dans tous ses états
28 Velouté aux fanes de carottes
30 Rouleaux de printemps crevettes, courgettes, basilic
32 Moules gratinées au beurre d'herbes
34 Petites crèmes de parmesan aux tomates cerise
36 Mug cake à la courgette
38 Le couteau de cuisine, l'ustensile qui change tout
40 Salade avocat-crevettes, mayonnaise épicée
42 Boulgour aux fruits secs
44 Salade de haricots verts aux pêches
46 Coleslaw à la feta et aux noix
48 Salade de nouilles soba aux crevettes, sauce soja, sésame et citron vert
50 Détox gourmande. Les atouts de la cuisine vapeur
52 Filet de cabillaud en papillote aux légumes d'été
54 Côtes d'agneau grillées, pesto de roquette et haricots verts
56 Gratin de crevettes sauce Nantua
58 Maquereaux au cidre
60 Saumon au taboulé de brocoli
62 Curry de poisson aux tomates, oignons et curcuma
64 One pot pasta poulet petits pois
66 Risotto aux noix et camembert
68 Boulettes suédoises
71 La petite histoire des bistrots
72 Gâteau au chocolat express
74 Fontainebleau aux figues rôties
76 Brioche façon pain perdu aux prunes, cerises et figues
78 Glace à l'abricot
80 Petits pots de crème au chocolat et chantilly
82 Clafoutis aux mirabelles
84 Compotée de figues au miel et à la badiane
86 Sucre de menthe
88 Mille-feuille de gavottes
90 Verrine de fromage blanc aux reines-claudes
92 Sundae façon Melba
94 Frappuccino` },
    { serie: 'moi', num: 62, date: '2022-10', sommaire: `
6 Nos conseils « healthy » et économie en cuisine
8 Petits muffins au chou et aux pommes
10 Cake sucré salé aux pommes, bacon et feta
12 Caviar d'aubergine
14 Ce que vous jetiez autrefois... peut être cuisiné !
16 Salade de carottes au cumin
18 Soupe froide aux poivrons
20 Petits flans aux courgettes et à la feta
22 Soupe froide petits pois olives
24 Houmous de betterave et pois chiches
26 Crème d'avocat
28 Feuilletés aux olives et aux tomates
30 Salade d'endives, sauce crémeuse au bleu
32 La vie en vrac
34 Salade tiède aux haricots blancs et jambon persillé
36 Galettes de chou-fleur
38 Tarte au chèvre et fenouil
40 Frittata aux oignons et aux courgettes
42 Velouté de courgettes aux croûtons
44 Tourte aux pommes de terre et petits pois
46 Soupe aux champignons
48 Poireaux mimosa
50 Tchoutchouka aux pois chiches
52 Parmentier de maquereau
54 Poulet aux champignons, butternut et châtaigne
56 Fusilli à la bolognaise
58 Moules sauce belge
60 Le curcuma. L'épice qui a tout bon !
62 Dinde à l'ananas
64 Dahl de lentilles corail aux épices
66 Purée de pois cassés aux merguez
68 Blésotto aux champignons
70 Bol veggie de curry thaï
72 Gratin de carottes au merlan
74 Les courses pour moins cher !
76 Cannelés à la cannelle
78 Tarte aux fleurs de pommes
80 Beurre de cacahuètes
82 Marbré zébré
84 Compote de pommes et poires aux noisettes
86 Pancakes au chocolat
88 Tarte au potiron et caramel au beurre salé
90 Clafoutis aux pruneaux
92 Crumble pommes raisins
94 Petites crèmes à la vanille` },
    { serie: 'moi', num: 63, date: '2022-11', sommaire: `
6 Le Nutri-Score. Comment ça marche ?
8 Taboulé d'automne au chou-fleur, brocoli, betterave et raisins
10 Cake salé poires gorgonzola
12 Falafels aux herbes, sauce yaourt
16 Taboulé libanais
18 Velouté de panais aux noisettes
19 Sous la betterave, un légume... et du sucre
20 Soupe de lentilles corail à la coriandre
22 Velouté de potimarron et champignons
22 Verrine de mousse au potimarron
24 Salade de brocolis à l'oeuf mollet
26 Pains pitas
28 Salade cauchoise
30 Le Liban, une cuisine qui met en émoi
30 Daoud Pacha
34 Korma d'agneau aux noix de cajou
36 Chili à la dinde et aux patates douces
38 Papillote de merlu au potimarron
38 Raviolis à la sauce au bleu et aux noix
40 Cabillaud vapeur et frisée aux radis
42 Quiche au thon et aux poivrons
42 Waterzoï de poulet
44 Quiche au saumon et brocolis
44 Tarte aux herbes, jambon et cheddar
44 Tarte aux oignons nouveaux
46 Lasagnes végétariennes
46 Quiche aux artichauts, jambon et chèvre
48 Chou-fleur sauce romesco et oeuf poché
50 Parmentier de butternut au confit de canard
50 Saumon à l'unilatérale, purée de courge au curcuma
52 Gâteau poires noisettes
52 Smoothie kiwi poire
54 Mouhalabieh à la fleur d'oranger
54 Squelette en pain d'épices
56 Crème brûlée à la poire
58 Gâteau aux noix de pécan
62 Cookies aux noix et chocolat
64 Compote de poires à la vanille pour bébé
66 Os meringués d'Halloween
66 Tarte aux noix
68 Cake au chocolat d'Halloween
70 Cocktail litchi cerise
72 Les noix, trésor du Périgord
72 Cupcakes toiles d'araignée
84 Halloween, tout pour comprendre cette fête` },];
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('mentionsModal');
    const closeBtn = document.querySelector('.close-btn');
    const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let triggerEl = null;
    let trapHandler = null;
    function lockBackground() {
        document.querySelectorAll('body > *').forEach(el => {
            if (el !== modal && !el.contains(modal)) {
                el.setAttribute('inert', '');
                el.setAttribute('data-was-inert', '');
            }
        });
    }
    function unlockBackground() {
        document.querySelectorAll('[data-was-inert]').forEach(el => {
            el.removeAttribute('inert');
            el.removeAttribute('data-was-inert');
        });
    }
    window.openModal = function() {
        triggerEl = document.activeElement;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => modal.classList.add('show'));
        lockBackground();
        requestAnimationFrame(() => {
            const first = modal.querySelector(FOCUSABLE);
            if (first) first.focus();
        });
        trapHandler = function(e) {
            if (e.key !== 'Tab') return;
            const focusable = Array.from(modal.querySelectorAll(FOCUSABLE));
            if (!focusable.length) { e.preventDefault(); return; }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        };
        document.addEventListener('keydown', trapHandler);
    };
    window.closeModal = function() {
        if (trapHandler) { document.removeEventListener('keydown', trapHandler); trapHandler = null; }
        unlockBackground();
        modal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => { modal.style.display = 'none'; }, 100);
        if (triggerEl && typeof triggerEl.focus === 'function') { triggerEl.focus(); triggerEl = null; }
    };
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);};
document.addEventListener("DOMContentLoaded", () => {
    const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const MAX_RECETTES = 80;
    const FOCUSABLE_LIVRE = 'a[href], button:not([disabled])';
    const $ = id => document.getElementById(id);
    const fold = s => String(s).split('').map(c => (c.normalize('NFD').charAt(0) || c).toLowerCase().charAt(0)).join('');
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    function formatDate(d) {
        const p = String(d || '').split('-');
        if (!/^\d{4}$/.test(p[0])) return '';
        if (p.length === 1) return p[0];
        let m = MOIS[parseInt(p[1], 10) - 1];
        if (!m) return p[0];
        m = m.charAt(0).toUpperCase() + m.slice(1);
        if (p.length === 2) return m + ' ' + p[0];
        const j = parseInt(p[2], 10);
        return (j === 1 ? '1er' : j) + ' ' + m + ' ' + p[0];
    }
    function parseSommaire(txt) {
        return String(txt || '').split('\n').map(l => l.trim()).filter(Boolean).map(l => {
            const m = l.match(/^(\d{1,3})\s+(.+)$/);
            const nom = m ? m[2].trim() : l;
            return { page: m ? parseInt(m[1], 10) : null, nom: nom, f: fold(nom) };
        });
    }
    const ordreSeries = Object.keys(SERIES);
    const livres = LIVRES.filter(b => {
        if (!SERIES[b.serie]) { console.warn('Série inconnue (utilise heros ou moi) :', b); return false; }
        return true;
    }).map(b => {
        const s = SERIES[b.serie];
        const id = b.serie + '-' + b.num;
        const dateTxt = formatDate(b.date);
        return {
            serie: b.serie, num: b.num, date: b.date || '', id: id, label: s.label, dateTxt: dateTxt,
            couv: encodeURI(DOSSIER_COUV + b.num + EXT),
            recettes: parseSommaire(b.sommaire),
            hay: fold(s.label + ' ' + s.alt + ' ' + dateTxt + ' ' + (b.date || ''))
        };
    }).sort((a, b) => ordreSeries.indexOf(a.serie) - ordreSeries.indexOf(b.serie) || a.num - b.num);
    const parId = new Map(livres.map(b => [b.id, b]));
    const etat = { q: '', serie: 'all' };
    let resCourant = null;
    const tokens = q => fold(q).replace(/°/g, '').split(/\s+/).filter(Boolean);
    function surLivre(b, t) {
        let m;
        if (/^\d{1,3}$/.test(t)) return b.num === parseInt(t, 10);
        if ((m = t.match(/^n(\d{1,3})$/))) return b.num === parseInt(m[1], 10);
        return b.hay.includes(t);
    }
    function recettesTrouvees(b, tk) {
        return b.recettes.filter(r => tk.some(t => r.f.includes(t)) && tk.every(t => r.f.includes(t) || surLivre(b, t)));
    }
    function chercher() {
        const tk = tokens(etat.q);
        if (!tk.length) return null;
        const rec = [], liv = [], ids = new Set();
        livres.forEach(b => {
            if (etat.serie !== 'all' && b.serie !== etat.serie) return;
            const hits = recettesTrouvees(b, tk);
            hits.forEach(r => rec.push({ b: b, r: r }));
            const livreOk = tk.every(t => surLivre(b, t));
            if (livreOk) liv.push(b);
            if (hits.length || livreOk) ids.add(b.id);
        });
        const debut = x => (x.r.f.startsWith(tk[0]) ? 0 : 1);
        rec.sort((x, y) => debut(x) - debut(y) || x.r.nom.localeCompare(y.r.nom, 'fr'));
        return { tk: tk, rec: rec, liv: liv, ids: ids };
    }
    function surligner(txt, tk) {
        const f = fold(txt);
        const marques = new Array(txt.length).fill(false);
        tk.forEach(t => {
            let i = f.indexOf(t);
            while (i !== -1) {
                for (let k = i; k < i + t.length; k++) marques[k] = true;
                i = f.indexOf(t, i + 1);
            }
        });
        let out = '', ouvert = false;
        for (let k = 0; k < txt.length; k++) {
            if (marques[k] && !ouvert) { out += '<mark>'; ouvert = true; }
            if (!marques[k] && ouvert) { out += '</mark>'; ouvert = false; }
            out += esc(txt[k]);
        }
        return out + (ouvert ? '</mark>' : '');
    }
    function creerCouverture(b, alt) {
        const w = document.createElement('span');
        w.className = 'cover';
        const ph = document.createElement('span');
        ph.className = 'cover-ph';
        ph.textContent = b.num;
        w.appendChild(ph);
        const img = new Image();
        img.addEventListener('error', () => img.remove());
        img.alt = alt;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.src = b.couv;
        w.appendChild(img);
        return w;
    }
    const grille = $('grille');
    const compte = $('compte');
    const cartes = new Map();
    function creerCarte(b) {
        const el = document.createElement('button');
        el.type = 'button';
        el.className = 'carte';
        el.dataset.serie = b.serie;
        el.dataset.id = b.id;
        el.setAttribute('aria-label', b.label + ', numéro ' + b.num + (b.dateTxt ? ', ' + b.dateTxt : ''));
        el.appendChild(creerCouverture(b, ''));
        const info = document.createElement('span');
        info.className = 'carte-info';
        info.innerHTML = '<span class="carte-serie">' + esc(b.label) + '</span>' +
            '<span class="carte-num">n° ' + b.num + '</span>' +
            (b.dateTxt ? '<span class="carte-date">' + esc(b.dateTxt) + '</span>' : '');
        el.appendChild(info);
        return el;
    }
    function majGrille(res) {
        let n = 0, m = 0;
        cartes.forEach((el, id) => {
            const b = parId.get(id);
            const visible = etat.serie === 'all' || b.serie === etat.serie;
            el.hidden = !visible;
            if (!visible) return;
            n++;
            const hit = !!(res && res.ids.has(id));
            el.classList.toggle('match', hit);
            el.classList.toggle('dim', !!res && !hit);
            if (hit) m++;
        });
        compte.textContent = res ? m + ' sur ' + n + ' correspondent' : n + ' livre' + (n > 1 ? 's' : '');
    }
    const zoneRes = $('resultats');
    function rendreResultats(res) {
        if (!res) { zoneRes.hidden = true; zoneRes.innerHTML = ''; return; }
        zoneRes.hidden = false;
        if (!res.rec.length && !res.liv.length) {
            zoneRes.innerHTML = '<p class="vide">Aucun résultat pour « ' + esc(etat.q.trim()) + ' ». Essaie un mot plus court, un numéro (12) ou une année (2022).</p>';
            return;
        }
        let h = '';
        if (res.rec.length) {
            h += '<h2 class="bloc-titre">Recettes <small>' + res.rec.length + ' trouvée' + (res.rec.length > 1 ? 's' : '') + '</small></h2><div class="res-grille">';
            res.rec.slice(0, MAX_RECETTES).forEach((x, k) => {
                h += '<button type="button" class="res" data-k="' + k + '">' +
                    '<span class="res-nom">' + surligner(x.r.nom, res.tk) + '</span>' +
                    '<span class="res-lieu"><i class="dot ' + x.b.serie + '"></i><span>' + esc(x.b.label) + ' n° ' + x.b.num + '</span>' +
                    (x.r.page != null ? '<span class="res-page">p. ' + x.r.page + '</span>' : '') + '</span></button>';
            });
            h += '</div>';
            if (res.rec.length > MAX_RECETTES) h += '<p class="note">… et ' + (res.rec.length - MAX_RECETTES) + ' autres : précise ta recherche pour les voir.</p>';
        }
        if (res.liv.length) {
            h += '<h2 class="bloc-titre">Livres <small>' + res.liv.length + ' trouvé' + (res.liv.length > 1 ? 's' : '') + '</small></h2><div class="res-grille">';
            res.liv.forEach(b => {
                h += '<button type="button" class="res" data-id="' + esc(b.id) + '">' +
                    '<span class="res-nom">' + esc(b.label) + ' n° ' + b.num + '</span>' +
                    '<span class="res-lieu"><i class="dot ' + b.serie + '"></i><span>' + (b.dateTxt ? esc(b.dateTxt) : 'Date non renseignée') + '</span></span></button>';
            });
            h += '</div>';
        }
        zoneRes.innerHTML = h;
    }
    function maj() {
        resCourant = chercher();
        rendreResultats(resCourant);
        majGrille(resCourant);
    }
    const overlay = $('livreModal');
    const boite = overlay.querySelector('.overlay-box');
    const fermer = overlay.querySelector('.livre-close');
    const contenu = $('livreContenu');
    let declencheur = null;
    function ouvrirLivre(b, recetteCliquee) {
        declencheur = document.activeElement;
        const tk = tokens(etat.q);
        const hits = new Set(tk.length ? recettesTrouvees(b, tk) : []);
        contenu.innerHTML = '';
        const tete = document.createElement('div');
        tete.className = 'livre-tete';
        const cw = document.createElement('div');
        cw.className = 'livre-cover';
        cw.appendChild(creerCouverture(b, 'Couverture de ' + b.label + ' numéro ' + b.num));
        const infos = document.createElement('div');
        infos.className = 'livre-infos';
        infos.innerHTML = '<span class="badge ' + b.serie + '"><i class="dot ' + b.serie + '"></i>' + esc(b.label) + '</span>' +
            '<h2 id="livreTitre">Livre n° ' + b.num + '</h2>' +
            '<dl class=\"faits\"><dt>Numéro : </dt><dd>' + b.num + '</dd><dt>Date de sortie : </dt><dd>' + (b.dateTxt ? esc(b.dateTxt) : 'Non renseignée') + '</dd></dl>';
        let h = '<h3 class="somm-titre">Sommaire</h3>';
        if (!b.recettes.length) {
            h += '<p class="note">Sommaire non renseigné.</p>';
        } else {
            h += '<ul class="somm-liste">';
            b.recettes.forEach(r => {
                const cls = r === recetteCliquee ? ' class="hit focus"' : (hits.has(r) ? ' class="hit"' : '');
                h += '<li' + cls + '><span class="p">' + (r.page != null ? r.page : '') + '</span><span class="nom">' + (hits.has(r) ? surligner(r.nom, tk) : esc(r.nom)) + '</span></li>';
            });
            h += '</ul>';
        }
        infos.insertAdjacentHTML('beforeend', h);
        tete.appendChild(cw);
        tete.appendChild(infos);
        contenu.appendChild(tete);
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        boite.scrollTop = 0;
        const liste = contenu.querySelector('.somm-liste');
        const cible = contenu.querySelector('.somm-liste li.focus') || contenu.querySelector('.somm-liste li.hit');
        if (liste) liste.scrollTop = cible ? Math.max(0, cible.offsetTop - liste.clientHeight / 2) : 0;
        fermer.focus();
    }
    function fermerLivre() {
        if (overlay.hidden) return;
        overlay.hidden = true;
        document.body.style.overflow = '';
        if (declencheur && declencheur.isConnected && typeof declencheur.focus === 'function') declencheur.focus();
        declencheur = null;
    }
    fermer.addEventListener('click', fermerLivre);
    overlay.addEventListener('click', e => { if (e.target === overlay) fermerLivre(); });
    document.addEventListener('keydown', e => {
        if (overlay.hidden) return;
        if (e.key === 'Escape') { fermerLivre(); return; }
        if (e.key !== 'Tab') return;
        const liste = Array.from(overlay.querySelectorAll(FOCUSABLE_LIVRE));
        if (!liste.length) { e.preventDefault(); return; }
        const premier = liste[0], dernier = liste[liste.length - 1];
        if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
        else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
    });
    const champ = $('q');
    const effacer = $('effacer');
    if (!livres.length) {
        grille.innerHTML = '<p class="vide">Aucun livre pour l\'instant : ajoute-les dans la liste LIVRES de recettes.js.</p>';
    }
    livres.forEach(b => {
        const el = creerCarte(b);
        cartes.set(b.id, el);
        grille.appendChild(el);
    });
    champ.addEventListener('input', () => {
        etat.q = champ.value;
        effacer.hidden = !champ.value;
        maj();
    });
    champ.addEventListener('keydown', e => {
        if (e.key === 'Enter' && window.matchMedia('(pointer: coarse)').matches) champ.blur();
    });
    effacer.addEventListener('click', () => {
        champ.value = '';
        etat.q = '';
        effacer.hidden = true;
        maj();
        champ.focus();
    });
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            etat.serie = chip.dataset.serie;
            document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
            maj();
        });
    });
    grille.addEventListener('click', e => {
        const el = e.target.closest('.carte');
        if (el) ouvrirLivre(parId.get(el.dataset.id));
    });
    zoneRes.addEventListener('click', e => {
        const el = e.target.closest('.res');
        if (!el) return;
        if (el.dataset.k !== undefined) {
            const x = resCourant.rec[parseInt(el.dataset.k, 10)];
            ouvrirLivre(x.b, x.r);
        } else {
            ouvrirLivre(parId.get(el.dataset.id));
        }
    });
    maj();
});