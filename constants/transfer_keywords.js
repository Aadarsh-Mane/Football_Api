const generalTransferKeywords = [
    "transfer",
    "signing",
    "contract",
    "loan",
    "permanent deal",
    "bid",
    "rumor",
    "speculation",
    "negotiation",
  ];
  
  const dealStatusKeywords = [
    "completed deal",
    "pending deal",
    "rejected deal",
    "completed medical",
    "personal terms",
  ];
  
  const injuryKeywords = [
    "injury",
    "medical examination",
    "fitness test",
    "recovery",
    "medical assessment",
  ];
  
  const contractKeywords = ["contract length", "release clause", "wages"];
  
  const negotiationKeywords = ["fee", "valuation", "offer", "counter-offer"];
  
  const loanKeywords = ["loan move", "loan deal", "loan spell", "recall option"];
  
  const youthKeywords = ["youth prospect", "academy player", "development"];
  
  const internationalTransferKeywords = ["international transfer", "work permit"];
  
  const clubStrategyKeywords = ["rebuild", "strengthen", "reinforce"];
  
  const squadKeywords = [
    "squad",
    "depth",
    "competition for places",
    "starting lineup",
  ];
  
  const announcementKeywords = ["official statement", "press release"];
  export const asianTeams=[
    "Afghanistan",
  "Australia",
  "Bahrain",
  "Bangladesh",
  "Brunei",
  "Cambodia",
  "China",
  "East Timor",
  "Hong Kong",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Japan",
  "Jordan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Macau",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Tajikistan",
  "Thailand",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen"
  ]
  // Team Names
  // Team Names
 export  const teamNames = [

  //international team names
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Paraguay",
  "Peru",
  "Uruguay",
  "Venezuela",
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "England",
  "Estonia",
  "Faroe Islands",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Gibraltar",
  "Greece",
  "Hungary",
  "Iceland",
  "Israel",
  "Italy",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Montenegro",
  "Netherlands",
  "Northern Ireland",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Republic of Ireland",
  "Romania",
  "Russia",
  "San Marino",
  "Scotland",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "Wales",
  //asian team names
  "Afghanistan",
  "Australia",
  "Bahrain",
  "Bangladesh",
  "Brunei",
  "Cambodia",
  "China",
  "East Timor",
  "Hong Kong",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Japan",
  "Jordan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Macau",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Tajikistan",
  "Thailand",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
    // La Liga Teams
    "Alavés",
    "Athletic Bilbao",
    "Atlético Madrid",
    "Crawley",
    "Leverkusen",
    "Barcelona",
    "Cádiz",
    "Celta Vigo",
    "Elche",
    "Espanyol",
    "Getafe",
    "Granada",
    "Levante",
    "Mallorca",
    "Osasuna",
    "Rayo Vallecano",
    "Real Betis",
    "Real Madrid",
    "Real Sociedad",
    "Sevilla",
    "Valencia",
    "Villarreal",
    
    // Bundesliga Teams
    "Arminia Bielefeld",
    "Augsburg",
    "Bayer Leverkusen",
    "Bayern Munich",
    "Bochum",
    "Borussia Dortmund",
    "Borussia Mönchengladbach",
    "Cologne",
    "Eintracht Frankfurt",
    "Freiburg",
    "Greuther Fürth",
    "Hertha BSC",
    "Mainz 05",
    "RB Leipzig",
    "Stuttgart",
    "Union Berlin",
    "VfL Wolfsburg",
    "Werder Bremen",
  
    // Premier League Teams
    "Arsenal",
    "Aston Villa",
    "Brentford",
    "Brighton & Hove Albion",
    "Burnley",
    "Chelsea",
    "Crystal Palace",
    "Everton",
    "Leeds United",
    "Leicester City",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Newcastle United",
    "Norwich City",
    "Southampton",
    "Tottenham Hotspur",
    "Watford",
    "West Ham United",
    "Wolverhampton Wanderers",
    "Chelsea Women",

    // saudi league team names
    "Al-Ahli",
  "Al-Faisaly",
  "Al-Hilal",
  "Al-Ittihad",
  "Al-Nassr",
  "Al-Shabab",
  "Al-Taawoun",
  "Al-Raed",
  "Al-Wehda",
  "Al-Ettifaq",
  "Al-Hazm",
  "Abha",
  "Al-Qadisiyah",
  "Al-Batin"
  ];
  
  // Manager Names
  // Manager Names
  const managerNames = [
    // La Liga Managers
    "Diego Simeone", // Atlético Madrid
    "Ronald Koeman", // Barcelona
    "Eduardo Coudet", // Celta Vigo
    "Vicente Moreno", // Espanyol
    "Michel", // Getafe
    "Robert Moreno", // Granada
    "Javi Gracia", // Valencia
    "Unai Emery", // Villarreal
  
    // Bundesliga Managers
    "Florian Kohfeldt", // Werder Bremen
    "Adi Hütter", // Borussia Mönchengladbach
    "Julian Nagelsmann", // Bayern Munich
    "Markus Gisdol", // Cologne
    "Oliver Glasner", // VfL Wolfsburg
    "Jesse Marsch", // RB Leipzig
  
    // Premier League Managers
    "Mikel Arteta", // Arsenal
    "Dean Smith", // Aston Villa
    "Thomas Frank", // Brentford
    "Graham Potter", // Brighton & Hove Albion
    "Sean Dyche", // Burnley
    "Thomas Tuchel", // Chelsea
    "Patrick Vieira", // Crystal Palace
    "Rafael Benítez", // Everton
    "Marcelo Bielsa", // Leeds United
    "Brendan Rodgers", // Leicester City
    "Jürgen Klopp", // Liverpool
    "Pep Guardiola", // Manchester City
    "Ole Gunnar Solskjær", // Manchester United
    "Steve Bruce", // Newcastle United
    "Daniel Farke", // Norwich City
    "Ralph Hasenhüttl", // Southampton
    "Nuno Espírito Santo", // Tottenham Hotspur
    "Xisco Muñoz", // Watford
    "David Moyes", // West Ham United
    "Bruno Lage", // Wolverhampton Wanderers
  ];
  
  // Combine all arrays
  export const transferKeywords = [
    ...generalTransferKeywords,
    ...dealStatusKeywords,
    ...injuryKeywords,
    ...contractKeywords,
    ...negotiationKeywords,
    ...loanKeywords,
    ...youthKeywords,
    ...internationalTransferKeywords,
    ...clubStrategyKeywords,
    ...squadKeywords,
    ...announcementKeywords,
    ...teamNames,
    ...managerNames,
  ];