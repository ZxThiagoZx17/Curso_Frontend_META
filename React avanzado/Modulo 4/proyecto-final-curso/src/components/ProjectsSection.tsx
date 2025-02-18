import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg"; //Importando las fotos de esta manera es mejor que con require en TSX
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

interface typeProjects {
  title: string;
  description: string;
  getImageSrc: string; // Podriamos poner Function a secas pero aca especificamos que es una funcion que devuelve un string que es la ruta de la imagen
}

const projects: typeProjects[] = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware",
    getImageSrc: photo1, // () => require("../images/photo1.jpg"), Require puede dar problemas con TypeScript
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: photo2, //Importando las fotos de esta manera es mejor que con require en TSX
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: photo3,
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground //Cuando se define asi sin nada, implicitamente es True
      p={8}
      alignItems="flex-start"
      gap={"8"}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))" // Crea dos columnas en la grilla,  Cada columna tendrá un ancho mínimo de 0px y un máximo de 1fr (una fracción del espacio disponible).
        gridGap={8}
      >
        {projects.map((project) => {
          // const imageSrc = project.getImageSrc(); //Mejor llamar la funcion antes
          return (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc}
              // imageSrc={project.getImageSrc()} //Haciendo esto lo que hacemos es ejecutar getImageSrc() en cada render
            />
          );
        })}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
