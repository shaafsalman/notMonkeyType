const GenreDescription = (level) => {
    // Define paragraphs for each genre and expertise level
    const descriptions = {
      beginner: {
        music: [
          "Music has been a significant part of human culture for centuries. As a beginner, you'll explore the basics of rhythm, melody, and harmony.",
          "Starting your journey in music, you'll learn about different genres, musical instruments, and simple musical structures.",
          "As a beginner in music, you'll focus on developing your listening skills, understanding musical notation, and exploring basic music theory concepts.",
        ],
        literature: [
          "Literature encompasses a wide range of written works, including novels, poems, and plays. As a beginner, you'll dive into the world of storytelling and language.",
          "In the realm of literature, beginners often explore classic works from different time periods and cultures, discovering themes, characters, and literary techniques.",
          "As a beginner in literature, you'll learn how to analyze texts, identify literary devices, and interpret the meanings behind various literary works.",
        ],
        art: [
          "Art is a diverse and expressive form of human creativity. As a beginner, you'll embark on a journey to discover different artistic styles, techniques, and mediums.",
          "Beginning your exploration of art, you'll learn about famous artists, art movements, and the elements and principles of design.",
          "As a beginner in art, you'll experiment with various art materials and tools, practicing fundamental drawing, painting, and sculpting techniques.",
        ],
      },
      intermediate: {
        music: [
          "As an intermediate musician, you'll deepen your understanding of musical concepts and techniques, exploring more complex rhythms, melodies, and harmonies.",
          "In the realm of music, intermediates often delve into specific genres or styles, honing their skills through practice, analysis, and experimentation.",
          "As an intermediate in music, you'll work on developing your musicality, improvisation abilities, and performance techniques.",
        ],
        literature: [
          "Moving beyond the basics, intermediate readers delve deeper into literary analysis, examining texts through various critical lenses and interpretations.",
          "In the world of literature, intermediates explore a wider range of genres and authors, critically analyzing themes, characters, and narrative structures.",
          "As an intermediate in literature, you'll engage in discussions, write analytical essays, and explore the historical and cultural contexts of literary works.",
        ],
        art: [
          "Intermediate artists refine their technical skills and artistic vision, experimenting with advanced techniques, compositions, and creative concepts.",
          "Building upon foundational knowledge, intermediates explore diverse art forms and styles, finding inspiration from both traditional and contemporary art movements.",
          "As an intermediate in art, you'll develop your unique artistic voice, exploring personal themes, concepts, and visual narratives in your artwork.",
        ],
      },
      expert: {
        music: [
          "At the expert level, musicians demonstrate mastery of their craft, pushing the boundaries of musical expression and innovation.",
          "Expert musicians often specialize in specific genres or instruments, showcasing virtuosic skill, creativity, and musical interpretation.",
          "As an expert in music, you'll contribute to the evolution of musical culture through composition, performance, education, and collaboration.",
        ],
        literature: [
          "Experts in literature possess a deep understanding of literary traditions, theories, and movements, making significant contributions to critical scholarship and creative expression.",
          "At the expert level, literary scholars and writers engage in advanced research, analysis, and interpretation of literary texts, shaping the discourse on literature and culture.",
          "As an expert in literature, you'll publish scholarly works, mentor aspiring writers and scholars, and participate in intellectual dialogues that influence the literary landscape.",
        ],
        art: [
          "Expert artists are masters of their chosen medium, producing visionary works that inspire and challenge audiences around the world.",
          "At the expert level, artists innovate and redefine artistic boundaries, exploring conceptual, aesthetic, and cultural dimensions in their practice.",
          "As an expert in art, you'll leave a lasting impact on the art world, exhibiting your work in prestigious galleries, museums, and institutions, and shaping the direction of contemporary art.",
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
  