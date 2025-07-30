import { useEffect, useState, useRef } from 'react';

export const About = () => {
  const paragraphs = [
    "Soy Agustín Marrero, estudiante de Ingeniería Informática en la Universidad Nacional de Avellaneda. Me apasiona la programación y me defino como una persona perseverante, autodidacta y empática.",
    "Actualmente participo en proyectos personales con Node.js, React y MySQL. Disfruto tanto del diseño visual como de la lógica detrás del código, y veo al desarrollo como un desafío creativo que combina disciplina, aprendizaje y resolución de problemas.",
    "Busco seguir creciendo como desarrollador full stack y formar parte de proyectos donde pueda seguir aprendiendo y aportando valor."
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Avanzar índice
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % paragraphs.length);
  };

  // Manejar ciclo automático
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        next();
      }, 10000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="mb-12">
      <div
        className="mb-4 cursor-pointer select-none flex gap-3"
        onClick={() => setIsPaused((prev) => !prev)}
      >
        <h2>_about_me </h2>
        {isPaused ? <img width={30}  src="src/assets/icons/pause.svg" alt="icono de pausa" /> : <img width={30}  src="src/assets/icons/play.svg" alt="icono de play" />}
      </div>

       <div className="space-y-4 w-11/12 pl-8 transition-all duration-300">
      {isPaused
        ? paragraphs.map((text, index) => (
            <p key={index} className="opacity-100 transition-opacity ">
              {text}
            </p>
          ))
        : paragraphs.map((text, index) => (
            <p
              key={index}
              className={`transition-opacity  duration-500 h-32 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
              }`}
            >
              {text}
            </p>
          ))}
    </div>
    </section>
  );
};
