import { Heading, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//Se tiene que volver a tipar porque las props no heredan el tipado porque es un nuevo objeto
interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card:React.FC<CardProps> = ({ title, description, imageSrc }) => {

  return(
    <div >
      <Image src={imageSrc}/>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <div>
        see more
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </div>
    </div>
  )};

export default Card;
