import { Box, HStack } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Importación necesaria para tipar los íconos IconDefinition es el tipo de objeto de los iconos

// Definimos la estructura exacta de un objeto dentro de redesSociales
// La linea interface en typeScript se usa para definir la estructura de un objeto, le decimos al codigo "Cualquier objeto que use esta interface debe tener estas propiedades con estos tipos".
interface SocialLink {
  icon: IconDefinition; // Tipo específico para íconos de FontAwesome
  url: string; // La URL de la red social
}

// SocialLink[] representa un array de objetos del tipo SocialLink, con el que especificamos la siguiente estructura:
// SocialLink[
//   {
//     icon: IconDefinition; // Tipo específico para íconos de FontAwesome
//     url: string; // La URL de la red social
//   }
// ]
const redesSociales: SocialLink[] = [
  {
    icon: faEnvelope,
    url: "mailto:tiagosanabria03@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ZxThiagoZx17",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

// Tipamos la función handleClick correctamente
const Header: React.FC = () => { //Si el componente no tiene props no es necesario tiparlo, pero se puede hacer, añadira implicitamente children como prop

  // Funcion que da el efecto de animacion al pasar el cursor por encima
  const handleClick = (anchor: string) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={`${0}`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181c"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            {/* Agregamos los enlaces de redes sociales con el tipado correcto */}
            <HStack gap={`${8}`}>
              {redesSociales.map(({ icon, url }) => (
                <a key={url} 
                   href={url}
                   target="_blank" 
                   rel="noopener noreferrer">

                  <FontAwesomeIcon icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack gap="8">
              {/* Enlaces a Projects y Contact Me con eventos de click tipados */}
              <a id="projects-section" onClick={handleClick("projects")} href="/#projects">
                Projects
              </a>
              <a id="contactme-section" onClick={handleClick("contactme")} href="/#contact-me">
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

