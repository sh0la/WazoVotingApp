window.Seed = (function () {
  function CountVotes() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const vacationSpots = [
    {
      id: 1,
      location: 'Rome, Italy',
      description: 'Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus – twin brothers who were nursed by a she-wolf and fathered by a war god – reportedly founded the Eternal City. And although historians are a little skeptical about this epic entry into the world, most travelers are absolutely certain that there is something magical about Rome. Whether it\'s the mystery of nearby Vatican City or the ghosts of the Colosseum, an afternoon caffè on Piazza Navona or a piled-high plate of pasta at a trattoria, Roma is sure to enchant.',
      url: 'https://travel.usnews.com/Rome_Italy/',
      votes: CountVotes(),
      submitterAvatarUrl: 'images/girl.jpg',
      productImageUrl: 'images/cat.jpg',
    },
    {
      id: 2,
      location: 'Cancun, Mexico',
      description: 'The City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture, further enhanced by cascading trees and glowing streetlamps. Peppering the Seine\'s cobbled walks and graceful bridges are impossibly chic Parisians, probably on their way to the market, cafe or cinema.',
      url: 'https://travel.usnews.com/Paris_France/',
      votes: CountVotes(),
      submitterAvatarUrl: 'images/boy.jpg',
      productImageUrl: 'images/cat.jpg',
    },
    {
      id: 3,
      location: 'Bora Bora, Tahiti',
      description: 'The small island of Bora Bora (just about 6 miles long and a little more than 2 miles wide) overflows with beauty. A dormant volcano rises up at its center and fans out into lush jungle before spilling into an aquamarine lagoon.',
      url: 'https://travel.usnews.com/Bora_Bora/',
      votes: CountVotes(),
      submitterAvatarUrl: 'images/girl.jpg',
      productImageUrl: 'images/cat.jpg',
    },
    {
      id: 4,
      location: 'Argentine Patagonia, Argentina',
      description: 'Cobalt lakes, azure-tinted glaciers, emerald trees, and turquoise skies stretch as far as the eye can see. In fact, Argentine Patagonia\'s vistas are so sweeping that Charles Darwin once described the region as "boundless." ',
      url: 'https://travel.usnews.com/Argentine_Patagonia/',
      votes: CountVotes(),
      submitterAvatarUrl: 'images/boy.jpg',
      productImageUrl: 'images/cat.jpg',
    },
    {
      id: 5,
      location: 'Santorini, Greece',
      description: 'the black and red sands make for a memorable visit. Next up, indulge in the archaeological delights of the impressively preserved Ancient Akrotiri or hike to Ancient Thera to see the ruins of three empires, including the Romans. From there, catch a breathtaking view of the caldera, a brilliant turquoise pool of water that serves as the nucleus for the varied isles of this archipelago.',
      url: 'https://travel.usnews.com/Santorini_Greece/',
      votes: CountVotes(),
      submitterAvatarUrl: 'images/boy.jpg',
      productImageUrl: 'images/cat.jpg',
    },
    {
      id: 6,
      location: 'St Lucia,',
      description: 'Lush, unspoiled St. Lucia has a growing fan base. Some of its vacationers are music lovers, letting loose at the springtime St. Lucia Jazz & Arts Festival, or adrenaline junkies, testing their limits climbing The Pitons or zip lining through the Chassin region\'s rain forest.',
      url: 'https://travel.usnews.com/St_Lucia/',
      votes: CountVotes(),
      submitterAvatarUrl: 'images/boy.jpg',
      productImageUrl: 'images/cat.jpg',
    },
  ];

  return { products: products };
}());
