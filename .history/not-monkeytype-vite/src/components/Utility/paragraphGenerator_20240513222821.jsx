const GenreDescription = (level) => {
  // Define paragraphs for each genre and expertise level
  const descriptions = {
    beginner: {
      marvel: [
        "The marvel cinematic universe is an american media franchise and shared universe centered on a series of superhero films produced by marvel studios. The mcu has revolutionized modern cinema becoming a cultural phenomenon",
        "Over the span of more than a decade, the mcu has entranced audiences across the globe. its ability to seamlessly blend heart-pounding action with nuanced storytelling has set an unparalleled benchmark for superhero narratives",
        "Ironman is the biggest superhero from the marvel cinematic universe and was portrayed by robert downey jr, stands as a symbol of innovation and heroism his charismatic portrayal helping launch the mcu into cinematic history",
      ],
      dc: [
        "The dc universe is the shared universe in which most stories in american comic book titles published by dc comics take place they a a subsidiary of warner brothers and dc is an initialism for detective comics",
        "The term dc multiverse refers to the collection of all continuities within dc comics publications delves into the lives of characters, exploring their lives and the complex relationships that bind them together.",
        "Batman is the biggest superhero from the dc universe and has been portrayed by many actors such as ben affleck, robert pattinson and the best for last, christian bale",
      ],
      starwars: [
        "Starwars is an iconic and expansive epic space opera media franchise created by george lucas. it has captivated audiences worldwide with its richly imaginative universe and timeless storytelling",
        "The franchise intricately depicts the thrilling adventures of a diverse array of characters in a time long ago, in a galaxy far, far away.",
        "Humans and many species of aliens co-exist with droids which may be programmed for personal assistance or battle. Droid r2d2 and c3po, droids play integral roles in the galaxy",
      ],
      cars: [
        "Cars are vehicles propelled by internal combustion engines or electric motors they are serving as essential modes of transportation for individuals and goods alike",
        "They come in various shapes and sizes and models serving different purposes from commuting to racing from compact city cars designed for efficient commuting to high-performance sports cars",
        "People customize and personalize cars according to their preferences which reflect individual styles and tastes from sleek exterior modifications to intricate interior enhancements",
      ],
      japanesecars: [
        "Japanese 90s cars were popular cars made in Japan during the 1990s these vehicles captured the imaginations of drivers worldwide with their innovative designs and cutting-edge technologies.",
        "They were known for their reliability and affordability, appealing to many drivers these vehicles instilled confidence with their steadfast performance and economical operation",
        "Models like the Toyota Corolla and Honda Civic became household names, trusted for their performance and longevity these iconic cars left an indelible mark on automotive history",
      ],
    },
    intermediate: {
      marvel: [
        "The franchise also includes television series, short films, digital series, and literature the franchise extends beyond the silver screen, encompassing a diverse array of entertainment mediums.",
        "Protagonists harness their innate prowess to thwart formidable adversaries, weaving intricate narratives of heroism and redemption. from battling cosmic threats to confronting inner demons, these iconic heroes embark on epic journeys",
        "Daredevil is the greatest hero in the marvel cinematic universe endowed with heightened senses and unparalleled martial prowesshe prowls the streets of hells kitchen, tirelessly defending the innocent and confronting injustice head on",
      ],
      dc: [
        "A sprawling tapestry of heroes and villains and cosmic forces, is a realm where mythic legends and contemporary sagas converge within this vast universe tales of epic battles and profound struggles unfold shaping the very fabric of existence",
        "Iconic characters such as superman, the flash, and wonder woman have transcended mere fiction to become household names. their legendary exploits symbolises the eternal struggle between good and evil.",
        "The dc universe serves as a timeless crucible where the extraordinary and the human collide amidst the grandeur of cosmic conflicts and the grittiness of urban landscapes, heroes rise to confront unimaginable threats",
      ],
      starwars: [
        "The eternal clash between the forces of light and dark reverberates across the cosmos, sparking epic conflicts that echo through the stars, shaping the very fate of galaxies",
        "From the desolate sunscorched sands of Tatooine to the gleaming towering spires of Coruscant, the starwars saga unfolds against a backdrop of breathtaking diversity each location offering new challenges and adventures for our heroes",
        "Starwars transcends mere science fiction capturing the essence of timeless myth and galactic adventure it captivates audiences with its sweeping narrative of heroes and villains, courage and sacrifice",
      ],
      cars: [
        "In the automotive industry sleek designs and cutting-edge technology converge to propel humanity forward each vehicle represents a testament to human ingenuity, combining style and performance to shape the future of transportation",
        "From the adrenaline fueled racetracks where speed reigns supreme to the vibrant, bustling city streets teeming with life, cars traverse diverse landscapes, embodying the spirit of adventure and exploration",
        "They evoke a sense of liberation seamlessly blending form and function to redefine the modern landscape of mobility seamlessly blending form and function",
      ],
      japanesecars: [
        "Japanese manufacturers ushered in an era of innovation and performance, crafting iconic vehicles that left a  mark on the industry their commitment to excellence and attention to detail set new standards",
        "From the timeless elegance of the toyota supra to the nimble agility of the mazda rx7 each model represents a masterpiece of design and engineering captivating enthusiasts with its unique personality and performance",
        "Models like the honda nsx and nissan skyline gtr captivated enthusiasts worldwide their presence on the road ignites passion and excitement, uniting enthusiasts around the globe in admiration and awe",
      ],
    },
    expert: {
      marvel: [
        "The first mcu film, ironman began phase 1 which culminated in the 2012 crossover film the Avengers. Phase 2 began with Ironman 3 ushering in a new era of superhero storytelling and interconnectivity within the mcu",
        "Marvel Studios releases its films in groups called phases This structural framework allows for the seamless integration of individual character arcs and overarching storylines, enriching the viewing experience for audiences worldwide",
        "Each infinity stone embodies a fundamental aspect of existence which are space, reality, power, mind, time, and soul.",
      ],
      dc: [
        "dc's narrative canvas serves as a crucible for exploring the depths of heroism, villainy, and the intricate interplay of light and shadow within the human psyche.",
        "Through an oeuvre of graphic novels, films, and multimedia experiences from the iconic pages of comic books to the silver screen, dc's diverse narratives captivate audiences inviting them to explore the limitless possibilities of the human imagination",
        "The dc universe serves as a timeless crucible where the extraordinary and the human collide, inspiring hope, introspection, and boundless imagination.",
      ],
      starwars: [
        "George Lucas's magnum opus unfolds across a cosmic tapestry woven with mythic motifs, galactic conflicts, and existential quandaries",
        "Star Wars transcends mere entertainment to become a cultural touchstone inspiring generations with its timeless tale of hope within this vast universe, characters embark on epic quests, confronting their destinies amidst the turmoil of interstellar warfare",
        "Luke skywalker holding the green saber to fight against his father, darth vader their conflict symbolizes the eternal struggle between good and evil, as well as the complex dynamics of family, redemption, and the quest for identity. ",
      ],
      cars: [
        "Cars epitomize the pinnacle of human ingenuity, blending advanced technology and aerodynamic prowess these marvels of engineering represent the culmination of decades of innovation and craftsmanship, embodying the relentless pursuit of perfection in motion.",
        "From the elegant curves of supercars to the utilitarian efficiency of everyday commuters each design reflects a unique blend of style and functionality, offering drivers an unparalleled driving experience tailored to their individual lifestyles.",
        "Each vehicle represents a harmonious fusion of form and function, crafted with meticulous attention to detail every aspect of a car is meticulously designed to enhance performance ensuring an exhilarating and rewarding driving experience for enthusiasts around the globe.",
      ],
      japanesecars: [
        "Japanese automotive prowess reached unparalleled heights propelling the nation to the forefront of the global car industry with a relentless commitment to innovation and quality, Japanese manufacturers elevated the standards of performance and reliability",
        "From the turbocharged supremacy of the nissan skyline gtr to the rotary engine marvel of the mazda rx7 these iconic models push the boundaries of automotive engineering, captivating enthusiasts with their raw power and precise handling",
        "Defined classics like the toyota supra and the honda nsx setting new benchmarks in speed, handling, and reliability their sleek designs, groundbreaking technology, and exhilarating performance, these iconic cars continue to inspire admiration",
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