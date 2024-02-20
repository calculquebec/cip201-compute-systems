Search.setIndex({"docnames": ["0-about", "1-introduction", "2-resources", "3-task-arrays", "4-storage", "90-exercises", "99-references", "donnees/README", "extra/acceleration", "extra/estimer-mem", "extra/glost-meta-farm", "extra/maitriser-slurm", "extra/stockage-avance"], "filenames": ["0-about.ipynb", "1-introduction.ipynb", "2-resources.ipynb", "3-task-arrays.ipynb", "4-storage.ipynb", "90-exercises.ipynb", "99-references.ipynb", "donnees/README.md", "extra/acceleration.ipynb", "extra/estimer-mem.ipynb", "extra/glost-meta-farm.ipynb", "extra/maitriser-slurm.ipynb", "extra/stockage-avance.ipynb"], "titles": ["Mastering the Alliance\u2019s Compute Systems", "Introduction", "Choose resources wisely", "Task Arrays for Data Parallelism", "Storage spaces", "Additional Exercises", "References", "Pr\u00e9paration des donn\u00e9es", "Analyse d\u2019acc\u00e9l\u00e9ration", "Estimation des besoins en m\u00e9moire-vive", "Le <em>Greedy Launcher Of Small Tasks</em>, ou GLOST", "Ma\u00eetriser l\u2019ordonnanceur Slurm", "Notions avanc\u00e9es du stockage"], "terms": {"cet": [0, 2, 5], "ateli": [0, 6], "de": [0, 6, 8, 11], "format": [0, 2, 6, 11, 12], "niveau": [0, 4, 12], "interm\u00e9diair": [0, 4], "est": [0, 2, 3, 4, 5, 8, 10, 11, 12], "la": [0, 4, 5, 6, 9, 10, 11, 12], "suit": 0, "l": [0, 1, 2, 3, 4, 6, 8, 9, 10, 12], "premier": [0, 3], "pa": [0, 2, 4, 5, 11, 12], "sur": [0, 1, 3, 4, 6, 7, 8, 10, 11, 12], "le": [0, 3, 5, 6, 11, 12], "serveur": [0, 12], "calcul": [0, 3, 4, 5, 6, 9, 10, 11, 12], "objectif": 0, "princip": [0, 2], "d": [0, 1, 5, 6, 9, 10], "explor": [0, 5, 8], "un": [0, 1, 5, 6, 7, 9, 10], "peu": [0, 3, 4, 10], "plu": [0, 2, 3, 4, 9, 10, 11, 12], "en": [0, 1, 5, 6, 7, 8, 10, 12], "profondeur": 0, "certain": [0, 1, 2, 3, 9, 11, 12], "aspect": [0, 4], "cl\u00e9": [0, 2, 6], "du": [0, 2, 3, 5, 6, 11], "informatiqu": 0, "point": [0, 12], "note": [0, 2, 8, 12], "notebook": [0, 6], "ipython": 0, "pr\u00e9sent": [0, 4, 12], "et": [0, 1, 3, 4, 5, 6, 9, 12], "donn\u00e9": [0, 3, 5, 6, 8, 9, 11], "associ\u00e9": [0, 3], "sont": [0, 1, 2, 3, 4, 5, 8, 10, 11, 12], "publi\u00e9": [0, 4, 12], "github": 0, "introduct": [0, 2], "rappel": [0, 2, 5, 8], "haut": [0, 2, 3], "perform": [0, 2, 3, 4, 5, 8], "diff\u00e9rent": [0, 2, 3, 5, 9, 11, 12], "type": [0, 2, 6, 10, 12], "t\u00e2che": [0, 4, 5, 6, 10, 12], "question": [0, 2, 5, 6, 12], "\u00e0": [0, 5, 6, 8, 12], "se": [0, 2, 4, 5, 9, 10, 11, 12], "poser": [0, 12], "choos": 0, "resourc": 0, "wise": 0, "analys": [0, 3, 4, 6, 11], "local": [0, 3, 6, 12], "grapp": [0, 1, 4, 6, 8, 11, 12], "estim": [0, 1, 11], "ressourc": [0, 1, 3, 6, 11], "n\u00e9cessair": [0, 1, 3, 4, 12], "principal": 0, "diff\u00e9renc": [0, 10, 12], "entr": [0, 4, 11, 12], "task": 0, "arrai": 0, "data": [0, 6], "parallel": [0, 1, 6, 12], "gnu": [0, 6], "vecteur": [0, 1, 6], "storag": 0, "space": 0, "stockag": [0, 1, 2, 6], "gestion": [0, 1, 6], "see": 0, "page": [0, 2, 8], "probl\u00e9matiqu": 1, "solut": [1, 12], "pr\u00e9alabl": 1, "lorsqu": [1, 2, 3, 5, 8, 10, 11, 12], "doit": [1, 2, 3, 8, 10], "lancer": [1, 2, 3], "grand": [1, 3, 4, 6, 11, 12], "quantit\u00e9": [1, 2, 5, 12], "ou": [1, 2, 3, 4, 6, 8, 9, 11, 12], "traitement": [1, 2, 4], "utilis": [1, 2, 4, 6, 8, 9, 10, 11, 12], "devient": [1, 4, 9, 11], "puisqu": 1, "partag\u00e9": [1, 12], "demand": [1, 4], "chaqu": [1, 2, 3, 4, 9, 10, 11, 12], "\u00eatre": [1, 2, 3, 5, 8, 10, 12], "soumis": 1, "ordonnanceur": [1, 2, 3, 5, 6, 8], "il": [1, 2, 3, 4, 5, 8, 9, 10, 11, 12], "donc": [1, 3, 5, 8, 9, 10, 12], "avanc": 1, "qui": [1, 2, 3, 4, 8, 10, 11, 12], "seront": [1, 2, 3, 4, 5], "r\u00e9serv\u00e9": [1, 2, 6], "lor": [1, 2, 4, 12], "ex\u00e9cut": [1, 2, 3, 5, 6, 8, 10], "deux": [1, 2, 7, 9, 12], "cat\u00e9gori": 1, "travail": [1, 4, 6, 10], "m\u00eame": [1, 2, 3, 4, 5, 6, 10, 11, 12], "probl\u00e8m": [1, 2, 12], "parmi": [1, 3], "s\u00e9quentiel": [1, 2, 3, 8, 10], "exist": [1, 2, 8, 12], "aussi": [1, 2, 3, 8, 11], "vectoriel": 1, "descript": [1, 4, 12], "op\u00e9rat": [1, 8], "processeur": [1, 2, 3, 5, 8, 10, 11], "modern": 1, "acc\u00e9l\u00e9rateur": [1, 2, 8], "gpu": [1, 4, 5, 6, 11], "beaucoup": 1, "traiter": [1, 4, 9, 11], "mani\u00e8r": [1, 2], "ind\u00e9pendant": [1, 5], "plusieur": [1, 2, 3, 4, 8, 10, 12], "simultan\u00e9": [1, 3], "lot": [1, 3, 6], "parall\u00e8l": [1, 2, 4, 6, 10], "partitionn": [1, 6], "quel": [1, 12], "effectuez": 1, "vou": [1, 2, 3, 4, 5, 8, 11, 12], "peut": [1, 2, 3, 4, 8, 9, 10, 12], "petit": [1, 2, 3, 4, 12], "fichier": [1, 3, 4, 5, 6, 7, 8, 9, 10], "quelqu": [1, 2, 3, 4, 8, 10, 12], "quell": [1, 2, 5, 12], "vont": 1, "consomm\u00e9": [1, 5], "choisir": 1, "comment": [1, 12], "planifi": [1, 4], "avez": [1, 2, 4], "plan": [1, 4], "activ": 1, "devrait": [1, 3, 4, 8, 12], "acc\u00e9der": [1, 2], "quoi": [1, 4], "espac": [1, 2, 6, 9, 12], "quand": [1, 4, 10, 12], "devriez": [1, 3, 5], "archiv": [1, 4, 6], "fair": [1, 2, 12], "suivi": [1, 6], "y": [2, 3, 4, 10, 12], "dispon": [2, 3, 4, 6, 10, 11], "allianc": [2, 6], "recherch": [2, 3, 4, 6, 11, 12], "num\u00e9riqu": [2, 6, 11], "canada": [2, 6], "b\u00e9luga": [2, 4, 6], "cedar": [2, 4, 6], "graham": [2, 4, 6], "narval": [2, 4, 6], "niagara": [2, 4, 6], "temporair": [2, 12], "projet": [2, 3, 12], "nearlin": [2, 6], "d\u00e9p\u00f4t": [2, 6, 12], "ce": [2, 3, 4, 5, 8, 11, 12], "chapitr": [2, 3, 4, 11, 12], "permettr": [2, 8], "vo": [2, 4, 5, 11], "besoin": [2, 4, 11], "dan": [2, 3, 4, 5, 6, 8, 9, 10, 11], "d\u00e9termin": [2, 11], "pour": [2, 3, 4, 5, 6, 8, 10, 11, 12], "d\u00e9fini": 2, "destin\u00e9": 2, "typiqu": [2, 4, 9, 12], "\u00e9crit": [2, 12], "command": [2, 4, 5, 6, 8, 10, 11, 12], "bash": [2, 3, 4, 5, 8, 10, 11], "retrouv": [2, 3], "shebang": [2, 6], "tout": [2, 3, 4, 5, 8, 9, 10, 11, 12], "premi\u00e8r": [2, 3], "lign": [2, 3, 6, 10], "exempl": [2, 3, 8, 9, 10], "bin": 2, "option": [2, 3], "sbatch": [2, 3, 5, 6, 10, 11], "ent\u00eat": [2, 3], "lue": 2, "soumiss": [2, 10], "chargement": [2, 6], "modul": [2, 5, 6, 9, 10], "requi": [2, 5, 8], "ex\u00e9cut\u00e9": [2, 3], "automatiqu": [2, 3, 6, 12], "mpi": [2, 10], "allo": 2, "sh": [2, 3, 4, 5, 8, 10, 11], "nano": [2, 10], "ctrl": [2, 8, 9], "x": [2, 3, 8, 12], "quitter": [2, 3, 10], "ntask": 2, "10": [2, 3, 4, 7, 9, 10, 12], "mem": 2, "per": 2, "1000m": 2, "time": [2, 5, 7], "0": [2, 3, 5, 8, 9, 10, 11], "00": 2, "load": [2, 5, 7, 9, 10], "gcc": [2, 5, 7], "9": [2, 8], "3": [2, 3, 5, 9], "dev": 2, "null": 2, "mpirun": 2, "printenv": 2, "hostnam": [2, 6], "ompi_comm_world_rank": 2, "ompi_comm_world_s": 2, "notr": 2, "document": [2, 3, 6], "effet": 2, "d\u00e9bute": 2, "votr": [2, 6, 11, 12], "ordinateur": [2, 5], "pouvez": [2, 5, 8, 11, 12], "surveil": [2, 3, 4], "m\u00e9triqu": 2, "": [2, 3, 4, 5, 8, 10, 12], "lieu": [2, 3, 12], "m\u00e9moir": [2, 5, 6, 8, 11], "vive": [2, 5, 8], "acc\u00e8": [2, 4], "au": [2, 3, 8, 10, 11, 12], "gestionnair": [2, 4, 6, 10], "affich": [2, 4, 11], "trouv": 2, "chercher": 2, "menu": 2, "d\u00e9marrer": 2, "raccourci": 2, "clavier": 2, "alt": 2, "suppr": 2, "moniteur": [2, 6], "activit\u00e9": [2, 6], "applic": [2, 8, 9], "partir": [2, 4, 6, 12], "utilitair": 2, "sinon": 2, "taper": 2, "lettr": 2, "pouvoir": [2, 5], "s\u00e9lectionn": 2, "cett": [2, 5, 11, 12], "termin": [2, 8, 10, 12], "unix": 2, "top": [2, 6, 10], "q": [2, 3, 10], "htop": [2, 6], "On": [2, 3, 4, 5, 8, 10], "commenc": 2, "connect": 2, "noeud": [2, 3, 4, 5, 6, 8, 10, 11, 12], "frontal": 2, "ssh": [2, 6, 10], "login1": [2, 4], "aux": [2, 4, 5, 6, 12], "product": 2, "vaut": [2, 3, 4, 11, 12], "mieux": [2, 3, 4, 11, 12], "pair": [2, 3], "authentif": [2, 6], "multifacteur": [2, 6], "mainten": 2, "offert": 2, "national": [2, 4, 6, 11], "vid\u00e9o": 2, "ici": [2, 3], "d\u00e9faut": [2, 4], "compt": [2, 6, 11], "def": [2, 4, 11, 12], "base": [2, 3, 7], "permet": [2, 3, 4, 5, 10, 11], "soumettr": [2, 3, 4, 5, 6], "blastn": [2, 3, 4, 7], "gen": [2, 3, 5], "seq": [2, 3], "voir": [2, 3, 4, 6, 8, 10, 12], "\u00e9tat": [2, 3, 4, 6], "squeue": [2, 3, 4, 5, 6, 10, 11], "u": [2, 3, 4, 5, 10, 11], "user": [2, 3, 4, 5, 10, 11], "sq": 2, "sacct": [2, 5, 6, 8, 11], "obtenir": [2, 4, 5, 6, 8, 11, 12], "tableau": 2, "d\u00e9taill\u00e9": 2, "nos": [2, 10, 11, 12], "depui": 2, "minuit": 2, "seff": [2, 3, 5, 6, 8, 11], "court": [2, 3, 4, 10], "rapport": [2, 4], "inclut": 2, "mesur": [2, 5, 12], "temp": [2, 3, 4, 5, 8, 10, 11, 12], "\u00e9coul\u00e9": [2, 8, 11], "consomm": [2, 4, 5, 8], "maximal": [2, 5], "valeur": [2, 3, 5, 8, 9], "pourcentag": [2, 3, 5, 8], "cycl": 2, "fonction": [2, 3, 4, 8, 12], "no_t\u00e2ch": 2, "\u00e9tant": [2, 8, 12], "matriciel": [2, 5], "python": [2, 4, 5, 6, 9], "py": [2, 5], "cat": [2, 3, 5, 8, 10, 11, 12], "interact": 2, "salloc": [2, 4], "node": 2, "4": [2, 3, 5, 8, 9, 10], "8000m": 2, "15": 2, "1": [2, 3, 5, 8, 9, 10, 11, 12], "r\u00e9sultat": [2, 3, 4, 5, 8, 10, 12], "grep": 2, "sec": 2, "log": [2, 7], "exit": [2, 4, 10], "revenir": [2, 10], "si": [2, 3, 4, 11, 12], "utilisez": [2, 3, 5], "jupyterhub": [2, 6], "profil": 2, "programm": [2, 3, 8], "visualis": 2, "r\u00e9el": [2, 3], "onglet": 2, "nv": 2, "dashboard": 2, "pendant": [2, 4, 10, 12], "que": [2, 3, 4, 5, 8, 9, 10, 12], "correspond": [2, 8], "afin": [2, 4, 5, 8], "pass": [2, 11], "bien": [2, 3, 10, 11], "inv": [2, 5], "mat": [2, 5], "voici": [2, 8], "\u00e9tape": [2, 4], "adapt": 2, "identif": [2, 12], "connexion": [2, 4, 6], "nom_noeud": [2, 10], "inspect": [2, 11], "processu": [2, 3, 10], "100": [2, 8, 9, 12], "n": [2, 3, 5, 8, 10, 11, 12], "o\u00f9": [2, 3, 10, 12], "sembl": 2, "pleinement": [2, 3], "identifi": [2, 3, 5, 11], "trouver": [2, 4], "caus": [2, 11], "corrig": 2, "code": [2, 4, 5, 6], "sourc": 2, "compil": [2, 4], "param\u00e8tr": [2, 5, 10], "relanc": [2, 10], "refair": 2, "pr\u00e9c\u00e9dent": [2, 3], "gre": 2, "outil": [2, 6, 10, 12], "propri\u00e9tair": 2, "permett": [2, 11, 12], "veuillez": 2, "r\u00e9f\u00e9rer": 2, "site": 2, "web": 2, "manufacturi": 2, "d\u00e9tail": [2, 5, 11], "abord": [2, 8, 10], "nvidia": [2, 6], "smi": [2, 6], "nvtop": [2, 6], "regard": 2, "tg": 2, "1gpu": 2, "v\u00e9rifier": 2, "tail": [2, 3], "24": [2, 5], "avant": [2, 3, 4, 8, 12], "massiv": [2, 8], "faut": [2, 4, 8, 10, 11, 12], "algorithm": [2, 6, 8], "puiss": [2, 8], "d\u00e9montrer": [2, 8], "bonn": [2, 8], "d\u00e9finit": [2, 8], "total": [2, 3, 8, 11, 12], "per\u00e7oit": [2, 8], "non": [2, 3, 4, 8, 12], "acc\u00e9l\u00e9rat": 2, "parall\u00e9lism": [2, 3, 8], "co\u00fbt": [2, 8, 12], "cinq": [2, 8], "foi": [2, 3, 5, 8, 11, 12], "sup\u00e9rieur": [2, 8], "celui": [2, 8], "r\u00e9gulier": [2, 8], "seul": [2, 5, 8, 10, 12], "moin": [2, 3, 8], "5x": [2, 8], "huit": [2, 8], "8": [2, 3, 5, 8, 9, 10], "douz": [2, 8], "12": [2, 3, 5, 8], "ont": [2, 3, 4, 10], "chacun": [2, 4, 5, 9], "http": [2, 11], "beluga": 2, "calculquebec": 2, "ca": [2, 5, 8, 11, 12], "essai": 2, "erreur": [2, 5], "90": [2, 8], "optimis": [2, 4, 12], "ad\u00e9quat": 2, "maxim": [2, 8], "respect": [2, 8], "seuil": [2, 8], "scalabilit\u00e9": [2, 6], "loi": [2, 6], "amdahl": [2, 6], "ordr": [2, 5, 8], "80": [2, 8], "demand\u00e9": [2, 8, 11], "surtout": [2, 8, 12], "num\u00e9ro": [2, 5, 8], "consid\u00e9r": [2, 3, 4, 5, 8, 9], "util": [2, 8], "effici": [2, 8], "memori": [2, 8], "list\u00e9": [2, 10], "suivant": [2, 3, 8, 11], "obtenez": 2, "pose": 2, "augment": [2, 4, 11], "dimens": [2, 5], "devraient": 2, "dur\u00e9": [2, 12], "fait": [2, 3, 5, 8, 10, 11, 12], "serait": 2, "possibl": [2, 3, 8, 9, 10, 11, 12], "pr\u00e9voir": 2, "p": [2, 3, 5, 7, 8, 10, 11, 12], "sleep": [2, 3, 11], "2": [2, 3, 5, 9, 10], "entr\u00e9": [2, 4], "devin": 2, "tenir": 2, "octet": [2, 9, 12], "go": [2, 12], "servir": 2, "rapid": [2, 4], "multipli": [2, 9], "moyenn": [2, 9], "leur": [2, 3, 11, 12], "imag": [2, 12], "al\u00e9atoir": [2, 5], "nombreux": [2, 4, 12], "explorateur": 2, "e": [2, 8], "dossier": [2, 3, 5, 10], "bouton": 2, "droit": 2, "souri": 2, "propri\u00e9t\u00e9": 2, "finder": 2, "get": 2, "info": 2, "autrement": [2, 11], "affichag": [2, 11], "list": [2, 3, 5, 6, 11], "environn": [2, 3, 4], "graphiqu": 2, "offrir": 2, "genr": 2, "mai": [2, 3, 4, 5, 9, 10, 11], "d\u00e9pend": [2, 9, 11], "distribut": 2, "bureau": 2, "sb": 2, "somm": 2, "b": [2, 3, 5, 9], "apparent": 2, "r\u00e9cursiv": [2, 12], "cell": 2, "import": [2, 4, 8, 9, 11, 12], "transfert": [2, 4, 6, 12], "sauvegard": [2, 4, 12], "find": [2, 4], "wc": [2, 4, 10], "donne": [2, 3, 4, 10, 12], "propo": [2, 4, 11, 12], "mise": 2, "mar": 2, "2019": 2, "juin": 2, "2017": 2, "octobr": 2, "2021": 2, "avril": 2, "2018": 2, "vill": 2, "montr\u00e9al": 2, "burnabi": 2, "waterloo": 2, "toronto": 2, "provinc": 2, "qu\u00e9bec": [2, 6], "c": [2, 3, 4, 8, 9, 11, 12], "ontario": 2, "coeur": 2, "selon": [2, 4, 8, 10, 11], "intel": 2, "amd": 2, "broadwel": 2, "avx2": 2, "724": 2, "32": [2, 5, 9], "983": 2, "skylak": 2, "avx512": 2, "802": 2, "40": 2, "640": 2, "48": [2, 5], "1548": 2, "cascad": 2, "lake": 2, "768": 2, "72": 2, "44": 2, "468": 2, "epyc": 2, "rome": 2, "1181": 2, "64": [2, 3, 9], "proc": [2, 8], "2400m": 2, "6400": 2, "4000m": 2, "86016": 2, "28896": 2, "73280": 2, "4400m": 2, "3168": 2, "4800m": 2, "23560": 2, "80960": 2, "3072": 2, "1792": 2, "16000m": 2, "19200m": 2, "2120": 2, "32000m": 2, "2304": 2, "48000m": 2, "192": 2, "96000m": 2, "128": [2, 9], "mist": [2, 6], "power9": [2, 6], "p100": 2, "12g": 2, "456": 2, "320": 2, "16g": 2, "t4": 2, "144": [2, 5], "v100": 2, "688": 2, "54": 2, "32g": 2, "16": [2, 3, 5, 8, 9], "216": 2, "a100": 2, "40g": 2, "636": 2, "r\u00e9seau": 2, "ordonnanc": [2, 6, 10], "infiniband": 2, "omnipath": 2, "topologi": 2, "arbr": 2, "dragonfli": 2, "\u00eelot": 2, "1200": 2, "1024": 2, "1536": 2, "3584": 2, "17280": 2, "facteur": 2, "blockag": 2, "max": [2, 8, 9], "5": [2, 3, 5, 8], "7": [2, 3, 9, 11, 12], "granularit\u00e9": 2, "jour": [2, 3, 4, 11, 12], "28": 2, "sera": [2, 10, 11], "d\u00e9crit": 2, "dernier": 2, "ram": 2, "jj": 2, "h": [2, 4, 10], "m": [2, 3, 11], "autr": [2, 4, 6, 10, 12], "biblioth\u00e8qu": [2, 9], "syst\u00e8m": [2, 4, 6, 12], "exploit": 2, "vise": [2, 8], "signif": 2, "choix": 2, "consist": 3, "seulement": [3, 4, 10, 11, 12], "par": [3, 4, 5, 6, 8, 9, 10, 11, 12], "donnera": 3, "g\u00e9rer": [3, 12], "requiert": 3, "centain": 3, "g\u00e9rant": 3, "longu": [3, 12], "taill": [3, 4, 5, 9], "comm": [3, 4, 10], "\u00e9chell": [3, 9, 12], "script": [3, 4, 5, 8, 10, 11], "officiel": [3, 6], "tutoriel": [3, 6], "ok": 3, "ne": [3, 4, 10, 11, 12], "simplement": 3, "moment": 3, "limit": [3, 10, 11], "usag": 3, "1000": [3, 4, 9], "pend": [3, 11], "run": [3, 10, 11], "tellement": 3, "minut": [3, 4, 11], "d\u00e9marrag": [3, 5], "fin": [3, 4], "compterai": 3, "significatif": 3, "utilis\u00e9": [3, 4, 11, 12], "diminu": [3, 8], "efficacit\u00e9": [3, 5], "avantag": 3, "nou": [3, 10, 12], "\u00e9vite": 3, "boucl": 3, "soumett": 3, "similair": 3, "facilit": [3, 4], "semblabl": 3, "sp\u00e9cifier": [3, 11, 12], "reprendr": 3, "situat": 3, "h\u00e2tive": 3, "\u00e9l\u00e9ment": 3, "gabarit_de_command": 3, "man": 3, "changeant": 3, "via": [3, 6, 8, 10], "echo": [3, 10], "txt": [3, 5, 10], "citat": 3, "engag": 3, "citer": 3, "d\u00e9veloppeur": 3, "r\u00e9\u00e9crire": 3, "expans": 3, "accolad": 3, "01": 3, "combin": 3, "num\u00e9rot\u00e9": 3, "tell": 3, "etc": [3, 4, 5, 8], "text": 3, "6": [3, 5], "param": 3, "prll": 3, "creer": 3, "aura": 3, "s\u00e9parateur": 3, "ainsi": [3, 11, 12], "argument": [3, 5], "ensuit": 3, "nom": [3, 4, 11, 12], "bc": 3, "prod_": 3, "exec": 3, "pr\u00e9f\u00e8re": 3, "valid": [3, 5], "g\u00e9n\u00e9r\u00e9e": 3, "g\u00e9n\u00e9rer": [3, 4, 5], "cmd": 3, "job": [3, 6, 11], "forcer": 3, "lanc\u00e9": [3, 6, 8], "avec": [3, 4, 5, 6, 8, 9, 11, 12], "avoir": [3, 4, 12], "fasta": 3, "fa": [3, 7], "\u00e9t\u00e9": [3, 5], "cr\u00e9\u00e9": [3, 4], "esp\u00e8c": [3, 7], "fictiv": 3, "A": [3, 8, 9, 11], "connu": 3, "converti": 3, "blast": [3, 7], "inconnu": 3, "k": 3, "z": [3, 12], "cherch": 3, "o": [3, 5, 12], "r": [3, 11, 12], "t": [3, 11, 12], "v": 3, "w": [3, 12], "donn": 3, "res_prll": [3, 4], "bon": [3, 4, 10], "jobid": [3, 10, 11], "glost": [3, 6], "meta": [3, 6], "farm": [3, 6], "meilleur": [3, 5], "alor": [3, 4, 10, 11], "vraiment": [3, 12], "appropri\u00e9": 3, "long": [3, 6], "veut": 3, "\u00e9viter": [3, 4], "d\u00e9passent": 3, "troi": [3, 5, 9], "r\u00e9duir": [3, 10], "risqu": 3, "subir": 3, "d\u00e9faillanc": 3, "mat\u00e9riel": 3, "moyen": [3, 6], "coder": 3, "sort": [3, 5], "d\u00e9termin\u00e9": 3, "indic": 3, "uniqu": [3, 10], "soit": [3, 5], "ajout": [3, 12], "contient": 3, "caract\u00e8r": [3, 9], "soulign": 3, "_": 3, "25249551_15": 3, "variabl": [3, 4, 10, 12], "slurm_array_task_id": 3, "actuel": 3, "cour": [3, 10, 11], "agit": [3, 5], "entier": 3, "fa\u00e7on": 3, "export": [3, 4], "71": 3, "\u00e9muler": 3, "nom_fichi": 3, "nom_dossi": 3, "param_r": 3, "divis": [3, 7, 8], "enti\u00e8r": 3, "param_c": 3, "modulo": 3, "rest": [3, 10, 11], "head": 3, "lancez": [3, 4, 10], "apr\u00e8": [3, 5], "quatr": [3, 9], "inspectez": 3, "out": 3, "res_arrai": 3, "corrigez": 3, "soient": [3, 4, 9], "trait\u00e9": [3, 10, 12], "relancez": 3, "tester": [3, 5, 10], "correct": [3, 5], "\u00e9tudier": 3, "multipl": [3, 5], "gabarit_cmd": 3, "valeurs1": 3, "valeurs2": 3, "sep": 3, "paires_param": 3, "n_cas_par_noeud": 3, "liste_command": [3, 10], "s\u00e9rie": [3, 4], "larg": [3, 12], "99": 3, "Or": [4, 8, 12], "gro": [4, 12], "nombr": [4, 5, 6, 8, 10, 11], "transf\u00e9rabilit\u00e9": 4, "regroup\u00e9": 4, "compress\u00e9": [4, 12], "confidentiel": 4, "principaux": 4, "access": [4, 12], "interactif": 4, "cpu": [4, 5, 6, 11, 12], "oui": [4, 12], "cd": [4, 10, 12], "ld": [4, 12], "quota": [4, 6, 12], "relativ": 4, "accept": 4, "id\u00e9al": [4, 12], "instal": [4, 6], "logiciel": [4, 6], "df": 4, "limit\u00e9": [4, 12], "faibl": [4, 11, 12], "latenc": 4, "compar\u00e9": 4, "lustr": [4, 6, 12], "band": [4, 12], "passant": [4, 12], "particuli": 4, "supprim\u00e9": 4, "son": [4, 8, 11], "propr": 4, "r\u00e9p\u00e9tition": [4, 12], "constam": 4, "modifi\u00e9": 4, "ver": 4, "capacit\u00e9": 4, "sauvegard\u00e9": [4, 5], "purg": [4, 6], "mensuel": 4, "\u00e2g\u00e9e": 4, "60": 4, "ensembl": 4, "utilisateur": [4, 11], "stocker": 4, "trop": [4, 5], "sponsor00": [4, 12], "group": [4, 10, 11], "sauf": [4, 12], "simpl": [4, 9, 10, 11], "jusqu": [4, 9], "To": [4, 12], "\u00e9lev\u00e9": [4, 11], "alloc": [4, 6, 11], "sp\u00e9cial": 4, "quotidienn": 4, "500k": [4, 12], "potentiel": [4, 12], "configur": [4, 12], "acl": 4, "important": [4, 12], "jeux": 4, "r\u00e9utilis\u00e9": 4, "moi": [4, 12], "personn": [4, 12], "finaux": 4, "co\u00fbteux": 4, "reproduir": [4, 12], "interfac": 4, "disqu": [4, 12], "ancienn": 4, "probabl": 4, "ruban": 4, "diagnostiqu": 4, "part": 4, "migrat": 4, "r\u00e9duit": [4, 11], "\u00e9conomi": 4, "argent": 4, "lectur": [4, 8, 12], "migr\u00e9": 4, "cr\u00e9era": 4, "requ\u00eat": 4, "bloquant": 4, "causant": 4, "r\u00e9pons": 4, "heur": 4, "archivag": [4, 6], "surcharg\u00e9": 4, "voil\u00e0": 4, "pourquoi": 4, "imp\u00e9ratif": 4, "copier": 4, "regroup": 4, "proven": 4, "accumul": [4, 12], "trouvent": 4, "hi": 4, "diskusage_report": [4, 6], "auxquel": 4, "produit": 4, "stat": 4, "json": 4, "diskusage_explor": [4, 6], "sommair": 4, "navigu": 4, "sou": [4, 6, 10, 12], "r\u00e9pertoir": [4, 6, 12], "inform": [4, 6, 10, 11], "m\u00e9nage": 4, "suppress": 4, "t\u00e9l\u00e9chargement": 4, "semain": [4, 12], "nul": 4, "prot\u00e9ger": 4, "davantag": 4, "partit": [4, 6], "fic": 4, "d\u00e9placer": 4, "fournir": [4, 12], "redirig": 4, "sorti": [4, 5], "rapatri": 4, "post": 4, "tou": [4, 5, 11, 12], "garder": [4, 12], "essentiel": 4, "\u00e9tudiez": 4, "surveillez": 4, "trouvez": 4, "tsv": 4, "professeur": 4, "contr": 4, "consent": 4, "isol\u00e9": 4, "involontair": 4, "absenc": 4, "politiqu": [4, 6, 12], "universit\u00e9": [4, 12], "permettra": 4, "d\u00e8": [4, 12], "optimis\u00e9": [4, 12], "mo": [4, 12], "mettr": 4, "maximum": 4, "item": 4, "zip": [4, 12], "dar": [4, 6, 12], "aper\u00e7u": 4, "critiqu": [4, 12], "copi": [4, 12], "ailleur": 4, "version": 4, "exercic": 5, "invers": 5, "matric": [5, 9], "suivr": 5, "\u00e9volut": 5, "environ": 5, "30": 5, "second": [5, 10, 12], "temps_inv": 5, "csv": 5, "panda": 5, "numpi": [5, 9], "pred": 5, "scipi": [5, 9], "stack": [5, 9], "effectu": [5, 10], "home": [5, 6], "b5d": 5, "tirer": 5, "profit": 5, "niveaux": 5, "cach": 5, "d\u00e9couper": 5, "cube": [5, 9], "bloc": 5, "b1": 5, "b2": 5, "b3": 5, "prism": 5, "p1": 5, "p2": 5, "p3": 5, "peuvent": [5, 9, 10], "fourni": 5, "omp": 5, "compil\u00e9": 5, "openmp": 5, "combinaison": [5, 10], "96": 5, "simplifi": 5, "fonctionn": [5, 10], "extra": [5, 8], "scratch": [5, 6, 10, 12], "\u00e9ditez": 5, "demandez": 5, "slurm": [5, 6, 8, 10], "charger": 5, "construisez": 5, "srun": [5, 10], "compl\u00e9t\u00e9": [5, 10, 11], "optimal": 5, "vitess": 5, "2000m": 5, "appel\u00e9": 5, "auront": 5, "derni\u00e8r": 5, "sachant": 5, "nouveau": [5, 10, 11, 12], "lancement": 5, "successif": 5, "r\u00e9servez": 5, "suffisam": 5, "soumettez": 5, "v\u00e9rifiez": 5, "essayez": 5, "wiki": 6, "compress": 6, "disk": [6, 12], "tape": [6, 12], "tar": [6, 12], "hierarch": 6, "hdf5": 6, "partag": 6, "project": 6, "foir": 6, "exceed": 6, "n\u0153ud": 6, "slurm_tmpdir": 6, "term": 6, "rsync": 6, "host": 6, "kei": 6, "linux": 6, "termin\u00e9": 6, "d\u00e9bogag": 6, "profilag": 6, "repris": 6, "situ\u00e9": 6, "ccdb": [6, 11], "concour": [6, 11], "f\u00e9d\u00e9r\u00e9": 6, "dfdr": 6, "servic": 6, "infonuagiqu": 6, "g\u00e9r\u00e9e": [6, 11], "pass\u00e9": [6, 11], "sshare": [6, 11], "scontrol": [6, 11], "show": [6, 11], "sp\u00e9cific": 6, "dont": [6, 12], "lien": 6, "extern": 6, "window": 6, "maco": 6, "rss": 6, "complexit\u00e9": 6, "tri": 6, "apach": 6, "parquet": 6, "feather": 6, "subsystem": 6, "wsl": 6, "\u00e9dition": 6, "jupyterlab": 6, "jupyt": 6, "\u00e9diteur": 6, "spyder": 6, "visual": 6, "studio": 6, "webinair": 6, "communaut\u00e9": 6, "prochain": [6, 10], "softwar": 6, "carpentri": 6, "seqkit": 7, "r\u00e9f\u00e9renc": 7, "espece_": 7, "convers": 7, "bas\u00e9": 7, "choisi": 7, "chr_": 7, "make": 7, "db": 7, "espece_a": 7, "queri": 7, "chr_m": 7, "out_a_m": 7, "suppos": 8, "876": 8, "220": 8, "035": 8, "calc": 8, "acc": 8, "eff": 8, "minim": 8, "figur": 8, "section": 8, "t_": 8, "fraction": 8, "\u00e9critur": 8, "commun": 8, "synchronis": [8, 12], "mod\u00e8l": 8, "t_p": 8, "left": 8, "frac": 8, "right": 8, "l\u00e0": 8, "red\u00e9finir": 8, "isol": 8, "\u00e9ventuel": 8, "impli": 8, "final": 8, "impos": 8, "minimal": 8, "geq": 8, "leq": 8, "con\u00e7u": 8, "recevoir": 8, "redirig\u00e9": 8, "canal": 8, "stdin": 8, "blocag": 8, "n_max": 8, "61": 8, "donner": 8, "qu": [8, 10, 11, 12], "arrondir": 8, "baiss": 8, "car": [8, 12], "metriqu": 8, "970874": 8, "58333": 8, "n_max_enti": 8, "ayant": 9, "id\u00e9": [9, 11], "prendront": 9, "prend": [9, 10], "cepend": 9, "langu": 9, "encodag": 9, "utf": 9, "rendr": 9, "latin": 9, "germaniqu": 9, "session": 9, "sy": 9, "euro": 9, "getsizeof": 9, "49": 9, "53": 9, "76": 9, "78": 9, "quit": 9, "sortir": 9, "prennent": [9, 12], "bit": 9, "plage": 9, "souhait\u00e9": 9, "65": 9, "mill": 9, "65535": 9, "32767": 9, "milliard": 9, "31": 9, "18": 9, "trillion": 9, "63": 9, "np": 9, "zero": 9, "dtype": 9, "int64": 9, "8000136": 9, "int32": 9, "4000136": 9, "iinfo": 9, "int16": 9, "min": 9, "32768": 9, "voit": 9, "apprentissag": 9, "machin": [9, 12], "n\u00e9anmoin": 9, "initial": 9, "doubl": 9, "pr\u00e9cision": 9, "r\u00e9solut": 9, "23": 9, "d\u00e9cimal": 9, "38": 9, "52": 9, "11": 9, "308": 9, "ndarrai": 9, "float32": 9, "pi": 9, "print": 9, "1415927": 9, "141592653589793": 9, "langag": 9, "syst\u00e9matiqu": 9, "compilateur": 9, "repr\u00e9sent\u00e9": 9, "complex": 9, "nb_matric": 9, "prod_mat": 9, "25000": 9, "carr\u00e9": 9, "octets_par_nombr": 9, "memoir": 9, "architectur": 10, "travailleur": 10, "envoi": 10, "signal": 10, "d\u00e9finir": 10, "s\u00e9par\u00e9": 10, "op\u00e9rateur": 10, "bonjour": 10, "mond": 10, "g\u00e9n\u00e9rez": 10, "less": 10, "allez": 10, "no_tach": 10, "pty": 10, "listez": 10, "res_glost": 10, "tr\u00e8": [10, 11, 12], "puissant": 10, "reprend": 10, "z\u00e9ro": 10, "mode": 10, "impliqu": [10, 12], "restant": [10, 11], "consult": 10, "prendr": 10, "ell": [10, 11, 12], "atteint": 10, "sa": 10, "\u00e9chou\u00e9": 10, "cr\u00e9er": [10, 12], "farm_init": 10, "align": 10, "adxkr": 10, "tabl": 10, "dat": 10, "contenir": 10, "recycl\u00e9": 10, "cp": 10, "sed": 10, "i": [10, 11], "_glost": 10, "_meta": 10, "g": [10, 12], "individuel": 10, "single_cas": 10, "mkdir": [10, 12], "id": [10, 12], "aller": [10, 11], "\u00e9tion": 10, "dt_fail": 10, "config": 10, "appel": [10, 11], "job_script": 10, "submit": 10, "commande1a": 10, "commande1b": 10, "fichier1": 10, "commande2a": 10, "commande2b": 10, "fichier2": 10, "glost_launch": 10, "approfondir": 11, "remplisson": 11, "300": [11, 12], "r\u00e9p\u00e9ter": 11, "trier": 11, "priorit\u00e9": 11, "priorit": 11, "colonn": 11, "cr\u00e9e": 11, "charg": 11, "jamai": 11, "venait": 11, "watch": 11, "chose": 11, "savoir": 11, "g\u00e9n\u00e9ralement": [11, 12], "comp\u00e9tit": 11, "aucun": [11, 12], "impact": 11, "incluant": 11, "laquel": 11, "assign\u00e9": 11, "dd": 11, "comprendr": 11, "majoritair": 11, "r\u00e9cent": 11, "proport": 11, "concern": [11, 12], "prof1_cpu": 11, "prof1": 11, "grad2": 11, "postdoc3": 11, "levelf": 11, "consid\u00e9r\u00e9": 11, "normal": [11, 12], "autour": 11, "proch": 11, "bass": 11, "perd": 11, "progressiv": 11, "ratio": 11, "r\u00e9duisant": 11, "50": 11, "cons\u00e9quent": 11, "allou\u00e9": [11, 12], "j": 11, "jobnam": 11, "maxrss": 11, "elaps": 11, "encor": 11, "ajust": 11, "ultim": 11, "computecanada": 11, "me": 11, "group_usag": 11, "tenant": 11, "lister": [11, 12], "possibilit\u00e9": 11, "direct": 11, "pr\u00e9cise": 11, "avon": 12, "vu": 12, "gpf": 12, "dire": 12, "ko": 12, "\u00e9gale": 12, "difficil": 12, "vue": 12, "raisonn": 12, "3k": 12, "lourdeur": 12, "sentir": 12, "10k": 12, "classer": 12, "facil": 12, "1m": 12, "5m": 12, "24h": 12, "10m": 12, "fr\u00e9quent": 12, "m\u00e9tadonn\u00e9": 12, "pr\u00e9f\u00e9rabl": 12, "jeu": 12, "d\u00e9codabl": 12, "winzip": 12, "7z": 12, "gzip": 12, "d\u00e9monstrat": 12, "cr\u00e9ation": 12, "arch": 12, "tair": 12, "avertiss": 12, "\u00e9crasement": 12, "existant": 12, "d\u00e9coup": 12, "extens": 12, "png": 12, "exclur": 12, "voulon": 12, "lire": 12, "\u00e9crire": 12, "avantageux": 12, "d\u00e9compress": 12, "plut\u00f4t": 12, "montr": 12, "r\u00e9ellement": 12, "appar": 12, "size": 12, "noter": 12, "surcharg": 12, "survol": 12, "r\u00e9cursif": 12, "constitu": 12, "pratiqu": 12, "offrent": 12, "efficac": 12, "restez": 12, "aff\u00fbt": 12, "repr\u00e9sent": 12, "volum": 12, "virtuel": 12, "\u00e9conomis": 12, "h\u00f4te": 12, "backup": 12, "lu": 12, "catastrophiqu": 12, "encapsul": 12, "attent": 12, "manipul\u00e9": 12, "planif": 12, "affair": 12, "persistant": 12, "pert": 12, "recalcul": 12, "fr\u00e9quenc": 12, "combien": 12, "s\u00e9pare": 12, "courant": 12, "tard": 12, "publier": 12, "urgenc": 12, "doivent": 12, "place": 12, "mal": 12, "d\u00e9crite": 12, "compr\u00e9hens": 12, "public": 12, "devienn": 12, "laborieus": 12, "h\u00e9ritent": 12, "gitignor": 12, "ignor": 12, "readm": 12, "md": 12, "confidentialit\u00e9": 12, "h\u00e9berger": 12, "d\u00e9part": 12, "r\u00e9f\u00e9rez": 12, "san": 12, "pr\u00e9caution": 12, "laissez": 12, "risquent": 12, "membr": 12, "laboratoir": 12, "poursuiv": 12, "mettez": 12, "enlev": 12, "chmod": 12, "modifi": 12, "gid": 12, "chgrp": 12, "resultat": 12, "lr": 12, "permiss": 12, "rx": 12, "visit": 12, "userxi": 12, "pwd": 12}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"master": 0, "allianc": 0, "": 0, "comput": 0, "system": 0, "about": 0, "thi": 0, "workshop": 0, "tabl": 0, "content": 0, "refer": [0, 6], "introduct": 1, "rappel": 1, "le": [1, 2, 4, 8, 9, 10], "calcul": [1, 2, 8], "haut": 1, "perform": 1, "diff\u00e9rent": [1, 4], "type": [1, 4, 9], "de": [1, 2, 3, 4, 5, 7, 9, 10, 12], "t\u00e2che": [1, 2, 3, 8, 11], "parall\u00e9lism": 1, "donn\u00e9": [1, 2, 4, 7, 12], "question": 1, "\u00e0": [1, 2, 3, 4, 9, 10, 11], "se": 1, "poser": 1, "choos": 2, "resourc": 2, "wise": 2, "objectif": 2, "construct": 2, "d": [2, 3, 4, 7, 8, 11, 12], "un": [2, 3, 4, 8, 11, 12], "script": 2, "slurm": [2, 3, 11], "analys": [2, 5, 8], "local": [2, 4], "sou": 2, "window": 2, "mac": 2, "o": 2, "linux": 2, "sur": 2, "la": [2, 3, 8], "grapp": 2, "ressourc": [2, 5, 8], "utilis\u00e9": [2, 5], "termin\u00e9": [2, 11], "par": 2, "cpu": [2, 8], "en": [2, 3, 4, 9, 11], "cour": 2, "exercic": [2, 3, 4, 8, 10], "valid": 2, "comport": 2, "activ": [2, 4, 11, 12], "d\u00e9mo": 2, "gpu": [2, 8], "tester": 2, "crunch": 2, "avec": [2, 10], "compar": [2, 8], "vitess": [2, 8], "v": [2, 8], "via": 2, "portail": 2, "estim": [2, 9], "n\u00e9cessair": [2, 8], "efficacit\u00e9": [2, 8], "cibl": [2, 8], "extrapol": [2, 8], "taill": [2, 8, 12], "et": [2, 8, 10, 11], "nombr": [2, 3, 9, 12], "fichier": [2, 12], "traiter": 2, "principal": 2, "diff\u00e9renc": 2, "entr": 2, "point": [2, 3, 4, 10, 11], "retenir": [2, 3, 4, 10, 11], "task": [3, 10], "arrai": 3, "data": 3, "parallel": [3, 5, 10], "gnu": [3, 5, 10], "pourquoi": 3, "pa": 3, "syntax": 3, "command": 3, "mode": 3, "utilis": [3, 5], "seul": 3, "s\u00e9quenc": [3, 7], "param\u00e8tr": 3, "combinaison": 3, "limit\u00e9": 3, "ca": [3, 4, 10], "parall\u00e8l": [3, 8], "align": 3, "adn": 3, "autr": [3, 11], "outil": 3, "vecteur": 3, "storag": 4, "space": 4, "stockag": [4, 9, 12], "home": 4, "votr": 4, "dossier": [4, 12], "personnel": 4, "slurm_tmpdir": 4, "temporair": 4, "scratch": 4, "espac": 4, "r\u00e9seau": 4, "project": 4, "projet": 4, "partag\u00e9": 4, "nearlin": 4, "tr\u00e8": 4, "longu": 4, "dur\u00e9": 4, "gestion": [4, 12], "du": [4, 8, 12], "cycl": 4, "vie": [4, 12], "exempl": [4, 7, 12], "ex\u00e9cut": [4, 7], "pipelin": 4, "inaccess": 4, "addit": 5, "exercis": 5, "complexit\u00e9": 5, "l": [5, 11], "algorithm": 5, "instal": 5, "benchmark": 5, "5d": 5, "glost": [5, 10], "probl\u00e8m": 5, "plu": 5, "grand": 5, "pr\u00e9parat": 7, "modul": 7, "requi": 7, "cr\u00e9ation": 7, "al\u00e9atoir": 7, "acc\u00e9l\u00e9rat": 8, "loi": 8, "amdahl": 8, "maximal": 8, "besoin": 9, "m\u00e9moir": 9, "vive": 9, "selon": 9, "base": 9, "pour": 9, "text": 9, "entier": 9, "virgul": 9, "flottant": 9, "greedi": 10, "launcher": 10, "Of": 10, "small": 10, "ou": 10, "list": 10, "blastn": 10, "meta": 10, "farm": 10, "meilleur": 10, "ma\u00eetris": 11, "ordonnanceur": 11, "attent": 11, "partit": 11, "sp\u00e9cific": 11, "politiqu": 11, "ordonnanc": 11, "notion": 12, "avanc\u00e9": 12, "caract\u00e9ristiqu": 12, "vo": 12, "transf\u00e9rabilit\u00e9": 12, "regroup": 12, "dan": 12, "archiv": 12, "compress": 12, "\u00e9par": 12, "spars": 12, "file": 12, "plan": 12, "niveaux": 12, "acc\u00e8": 12, "partag": 12}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Mastering the Alliance\u2019s Compute Systems": [[0, "mastering-the-alliance-s-compute-systems"]], "About this workshop": [[0, "about-this-workshop"]], "Table of Contents": [[0, "table-of-contents"]], "References": [[0, "references"], [6, "references"]], "Introduction": [[1, "introduction"]], "Rappel - le calcul haute performance": [[1, "rappel-le-calcul-haute-performance"]], "Diff\u00e9rents types de t\u00e2ches": [[1, "differents-types-de-taches"]], "Parall\u00e9lisme de donn\u00e9es": [[1, "parallelisme-de-donnees"]], "Des questions \u00e0 se poser": [[1, "des-questions-a-se-poser"]], "Choose resources wisely": [[2, "choose-resources-wisely"]], "Objectif - construction d\u2019un script de t\u00e2che Slurm": [[2, "objectif-construction-d-un-script-de-tache-slurm"]], "Analyse des calculs localement": [[2, "analyse-des-calculs-localement"]], "Sous Windows": [[2, "sous-windows"]], "Sous Mac OS": [[2, "sous-mac-os"]], "Sous Linux": [[2, "sous-linux"]], "Analyse des t\u00e2ches sur la grappe de calcul": [[2, "analyse-des-taches-sur-la-grappe-de-calcul"]], "Ressources utilis\u00e9es d\u2019une t\u00e2che termin\u00e9e": [[2, "ressources-utilisees-d-une-tache-terminee"]], "Ressources utilis\u00e9es par une t\u00e2che CPU en cours": [[2, "ressources-utilisees-par-une-tache-cpu-en-cours"]], "Exercice - Valider le comportement d\u2019une t\u00e2che active": [[2, "exercice-valider-le-comportement-d-une-tache-active"]], "(D\u00e9mo) Ressources utilis\u00e9es par une t\u00e2che GPU en cours": [[2, "demo-ressources-utilisees-par-une-tache-gpu-en-cours"]], "Exercice - Tester Crunch avec un GPU": [[2, "exercice-tester-crunch-avec-un-gpu"]], "Comparer la vitesse CPU vs GPU": [[2, "comparer-la-vitesse-cpu-vs-gpu"], [8, "comparer-la-vitesse-cpu-vs-gpu"]], "Analyse des t\u00e2ches via les portails": [[2, "analyse-des-taches-via-les-portails"]], "Estimer les ressources n\u00e9cessaires": [[2, "estimer-les-ressources-necessaires"]], "Efficacit\u00e9 cible d\u2019une t\u00e2che": [[2, "efficacite-cible-d-une-tache"]], "Exercice - Efficacit\u00e9 des t\u00e2ches": [[2, "exercice-efficacite-des-taches"]], "Extrapoler les ressources n\u00e9cessaires": [[2, "extrapoler-les-ressources-necessaires"], [8, "extrapoler-les-ressources-necessaires"]], "Taille des donn\u00e9es et nombre de fichiers \u00e0 traiter": [[2, "taille-des-donnees-et-nombre-de-fichiers-a-traiter"]], "Principales diff\u00e9rences entre les grappes de calcul": [[2, "principales-differences-entre-les-grappes-de-calcul"]], "Points \u00e0 retenir": [[2, "points-a-retenir"], [3, "points-a-retenir"], [4, "points-a-retenir"], [10, "points-a-retenir"], [11, "points-a-retenir"]], "Task Arrays for Data Parallelism": [[3, "task-arrays-for-data-parallelism"]], "GNU Parallel": [[3, "gnu-parallel"]], "Pourquoi pas Slurm?": [[3, "pourquoi-pas-slurm"]], "Syntaxe de la commande GNU Parallel": [[3, "syntaxe-de-la-commande-gnu-parallel"]], "Modes d\u2019utilisation": [[3, "modes-d-utilisation"]], "Une seule s\u00e9quence de param\u00e8tres": [[3, "une-seule-sequence-de-parametres"]], "Combinaisons de param\u00e8tres": [[3, "combinaisons-de-parametres"]], "Nombre limit\u00e9 de cas en parall\u00e8les": [[3, "nombre-limite-de-cas-en-paralleles"]], "Exercice - Aligner des s\u00e9quences d\u2019ADN": [[3, "exercice-aligner-des-sequences-d-adn"]], "Autres outils": [[3, "autres-outils"]], "Vecteurs de t\u00e2ches": [[3, "vecteurs-de-taches"]], "Exercice - Vecteur de t\u00e2ches": [[3, "exercice-vecteur-de-taches"]], "Storage spaces": [[4, "storage-spaces"]], "Les diff\u00e9rents types de stockage": [[4, "les-differents-types-de-stockage"]], "$HOME - Votre dossier personnel": [[4, "home-votre-dossier-personnel"]], "$SLURM_TMPDIR - Votre dossier temporaire local": [[4, "slurm-tmpdir-votre-dossier-temporaire-local"]], "$SCRATCH - Votre espace r\u00e9seau temporaire": [[4, "scratch-votre-espace-reseau-temporaire"]], "/project - Espace projet partag\u00e9": [[4, "project-espace-projet-partage"]], "/nearline - Stockage tr\u00e8s longue dur\u00e9e": [[4, "nearline-stockage-tres-longue-duree"]], "Gestion du stockage": [[4, "gestion-du-stockage"]], "Cycle de vie des donn\u00e9es actives": [[4, "cycle-de-vie-des-donnees-actives"]], "Exemple de cycle de vie des donn\u00e9es": [[4, "exemple-de-cycle-de-vie-des-donnees"]], "Exercice - Ex\u00e9cution d\u2019un pipeline": [[4, "exercice-execution-d-un-pipeline"]], "En cas de donn\u00e9es inaccessibles": [[4, "en-cas-de-donnees-inaccessibles"]], "Additional Exercises": [[5, "additional-exercises"]], "Complexit\u00e9 de l\u2019algorithme": [[5, "complexite-de-l-algorithme"]], "Installation de Benchmark 5D": [[5, "installation-de-benchmark-5d"]], "Utiliser GLOST": [[5, "utiliser-glost"]], "Utiliser GNU Parallel": [[5, "utiliser-gnu-parallel"]], "Analyse des ressources utilis\u00e9es": [[5, "analyse-des-ressources-utilisees"]], "Probl\u00e8me plus grand": [[5, "probleme-plus-grand"]], "Pr\u00e9paration des donn\u00e9es": [[7, "preparation-des-donnees"]], "Module requis": [[7, "module-requis"]], "Cr\u00e9ation de s\u00e9quences al\u00e9atoires": [[7, "creation-de-sequences-aleatoires"]], "Exemples d\u2019ex\u00e9cution": [[7, "exemples-d-execution"]], "Analyse d\u2019acc\u00e9l\u00e9ration": [[8, "analyse-d-acceleration"]], "Exercice - Calcul d\u2019acc\u00e9l\u00e9ration et d\u2019efficacit\u00e9": [[8, "exercice-calcul-d-acceleration-et-d-efficacite"]], "Efficacit\u00e9 cible du calcul parall\u00e8le": [[8, "efficacite-cible-du-calcul-parallele"]], "Loi d\u2019Amdahl": [[8, "loi-d-amdahl"]], "Exercice - Taille maximale d\u2019une t\u00e2che parall\u00e8le": [[8, "exercice-taille-maximale-d-une-tache-parallele"]], "Estimation des besoins en m\u00e9moire-vive": [[9, "estimation-des-besoins-en-memoire-vive"]], "Stockage en m\u00e9moire selon les types de base": [[9, "stockage-en-memoire-selon-les-types-de-base"]], "Pour des textes": [[9, "pour-des-textes"]], "Pour des nombres entiers": [[9, "pour-des-nombres-entiers"]], "Pour des nombres \u00e0 virgule flottante": [[9, "pour-des-nombres-a-virgule-flottante"]], "Le Greedy Launcher Of Small Tasks, ou GLOST": [[10, "le-greedy-launcher-of-small-tasks-ou-glost"]], "Exercice - Liste de cas Blastn avec GLOST": [[10, "exercice-liste-de-cas-blastn-avec-glost"]], "META-Farm - Le meilleur de GNU Parallel et GLOST": [[10, "meta-farm-le-meilleur-de-gnu-parallel-et-glost"]], "Ma\u00eetriser l\u2019ordonnanceur Slurm": [[11, "maitriser-l-ordonnanceur-slurm"]], "T\u00e2ches en attente": [[11, "taches-en-attente"]], "Partition et autres sp\u00e9cifications d\u2019une t\u00e2che": [[11, "partition-et-autres-specifications-d-une-tache"]], "Politique d\u2019ordonnancement": [[11, "politique-d-ordonnancement"]], "T\u00e2ches actives": [[11, "taches-actives"]], "T\u00e2ches termin\u00e9es": [[11, "taches-terminees"]], "Notions avanc\u00e9es du stockage": [[12, "notions-avancees-du-stockage"]], "Caract\u00e9ristiques de vos donn\u00e9es": [[12, "caracteristiques-de-vos-donnees"]], "Taille": [[12, "taille"]], "Nombre": [[12, "nombre"]], "Transf\u00e9rabilit\u00e9": [[12, "transferabilite"]], "Regroupement dans un fichier archive": [[12, "regroupement-dans-un-fichier-archive"]], "Compression des fichiers": [[12, "compression-des-fichiers"]], "Fichiers \u00e9pars (sparse files)": [[12, "fichiers-epars-sparse-files"]], "Plan de gestion des donn\u00e9es actives": [[12, "plan-de-gestion-des-donnees-actives"]], "Vie des donn\u00e9es": [[12, "vie-des-donnees"]], "Niveaux d\u2019acc\u00e8s": [[12, "niveaux-d-acces"]], "Exemple de partage de dossier:": [[12, "exemple-de-partage-de-dossier"]]}, "indexentries": {}})