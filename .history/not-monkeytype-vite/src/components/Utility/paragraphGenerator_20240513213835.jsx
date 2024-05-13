const GenreDescription = (level) => {
  // Define paragraphs for each genre and expertise level
  const descriptions = {
    beginner: {
      marvel: [
        "The marvel cinematic universe is an american media franchise and shared universe centered on a series of superhero films produced by marvel studios",
        "The films are based on characters that appear in comic books published by marvel comics",
        "Ironman is the biggest superhero from the marvel cinematic universe",
      ],
      dc: [
        "The dc universe  is the shared universe in which most stories in american comic book titles published by dc comics take place",
        "The term dc multiverse refers to the collection of all continuities within dc comics publications",
        "Batman is the biggest superhero from the dc universe",
      ],
      starwars: [
        "Star wars is an epic space opera media franchise created by george lucas The franchise depicts the adventures of characters a long time ago in a galaxy far, far awayHumans and many species of aliens co-exist with droids which may be programmed for personal assistance or battle",
      ],
      cars: [
        "Cars are a mode of transportation powered by internal combustion engines or electric motors they come in various shapes and sizes and models serving different purposes from commuting to racingPeople customize and personalize cars according to their preferences which reflect individual styles and tastes",
      ],
      japanesecars: [
        "Japanese 90s cars were popular cars made in Japan during the 1990s They were known for their reliability and affordability, appealing to many driversModels like the Toyota Corolla and Honda Civic became household names, trusted for their performance and longevity",
      ],
    },
    intermediate: {
      marvel: [
        "The franchise also includes television series, short films, digital series, and literature.",
        "Protagonists harness their innate prowess to thwart formidable adversaries, weaving intricate narratives of heroism and redemption.",
        "Daredevil is the greatest hero in the marvel cinematic universe",
      ],
      dc: [
        "A sprawling tapestry of heroes, villains, and cosmic forces, is a realm where mythic legends and contemporary sagas converge",
        "Iconic characters such as superman, the flash and wonder woman are household names",
        "The dc universe serves as a timeless crucible where the extraordinary and the human collide",
      ],
      starwars: [
        "The eternal clash between the forces of light and dark reverberates across the cosmos and igniting epic conflicts",
        "From the desolate sands of Tatooine to the towering spires of coruscant",
        "Starwars transcends mere science fiction capturing the essence of timeless myth and galactic adventure",
      ],
      cars: [
        "In the automotive industry sleek designs and cutting-edge technology converge to propel humanity forward",
        "From the adrenaline fueled racetracks to the bustling city streets",
        "They evoke a sense of liberation seamlessly blending form and function to redefine the modern landscape of mobility",
      ],
      japanesecars: [
        "Japanese manufacturers ushered in an era of innovation and performance, crafting iconic vehicles that left a  mark on the industry",
        "From the timeless elegance of the toyota supra to the nimble agility of the mazda rx7,",
        "Models like the honda nsx and nissan skyline gtr captivated enthusiasts worldwide",
      ],
    },
    expert: {
      marvel: [
        "The first mcu film, Ironman began phase 1 which culminated in the 2012 crossover film the Avengers. Phase 2 began with Ironman 3 ",
        "Marvel Studios releases its films in groups called phases",
        "Each infinity stone embodies a fundamental aspect of existence which are space, reality, power, mind, time, and soul.",
      ],
      dc: [
        "dc's narrative canvas serves as a crucible for exploring the depths of heroism, villainy, and the intricate interplay of light and shadow within the human psyche. ",
        "Through an oeuvre of graphic novels, films, and multimedia experiences",
        "The dc universe serves as a timeless crucible where the extraordinary and the human collide, inspiring hope, introspection, and boundless imagination.",
      ],
      starwars: [
        "George Lucas's magnum opus unfolds across a cosmic tapestry woven with mythic motifs, galactic conflicts, and existential quandaries",
        "Star Wars transcends mere entertainment to become a cultural touchstone inspiring generations with its timeless tale of hope",
        "Luke skywalker holding the green saber to fight against his father, darth vader",
      ],
      cars: [
        "Cars epitomize the pinnacle of human ingenuity, blending advanced technology and aerodynamic prowess",
        "From the elegant curves of supercars to the utilitarian efficiency of everyday commuters",
        "Each vehicle represents a harmonious fusion of form and function, crafted with meticulous attention to detail",
      ],
      japanesecars: [
        "Japanese automotive prowess reached unparalleled heights",
        "From the turbocharged supremacy of the nissan skyline gtr to the rotary engine marvel of the mazda rx7",
        "Defined classics like the toyota supra and the honda nsx setting new benchmarks in speed, handling, and reliability",
      ],
    },
  };

  // Get random paragraph for the specified expertise level and genre
  const getRandomParagraph = () => {
    const genres = Object.keys(descriptions[level]);
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const paragraphs = descriptions[level][randomGenre];
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
  };

  return getRandomParagraph();
};

export default GenreDescription;