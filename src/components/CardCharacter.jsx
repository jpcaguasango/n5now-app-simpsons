import styled from "styled-components";
import { Genders } from "../helpers/enums/genders";
import { Colors } from "../helpers/enums/colors";
import { Species } from "../helpers/enums/species";
import { useMemo } from "react";
import Label from "./Label";
import Tag from "./Tag";
import { FaReddit, FaUserCircle } from "react-icons/fa";

const { Male } = Genders;
const { Alien } = Species;
const { BgPink, Pink, BgBlue, Blue } = Colors;

function CardCharacter({ name, img, gender, species }) {
  const getBgGender = useMemo(() => {
    return gender === Male ? BgBlue : BgPink;
  }, [gender]);

  const getColorGender = useMemo(() => {
    return gender === Male ? Blue : Pink;
  }, [gender]);

  const speciesIcon = species === Alien ? <FaReddit /> : <FaUserCircle />;

  const CardContainer = styled.div`
    width: 270px;
    height: 320px;
    padding: 10px;
    margin: 6px auto;
    border: 1px solid #383838;
    border-radius: 8px;
  `;

  const ContainerImage = styled.div`
    position: relative;
    display: inline-block;
  `;

  const Image = styled.img`
    width: 100%;
    height: 260px;
    border-radius: 8px;
  `;

  const Species = styled.div`
    position: absolute;
    bottom: 0%;
    left: 10%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: white;
    font-weight: bold;
  `;

  const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Name = styled.p`
    margin-top: 4px;
    font-size: 16px;
    font-weight: bold;
  `;

  return (
    <CardContainer>
      <ContainerImage>
        <Image src={img} />
        <Species>{speciesIcon}</Species>
      </ContainerImage>
      <ContainerHeader>
        <div>
          <Label text="Nombre" />
          <Name>{name}</Name>
        </div>
        <div>
          <Label text="Genero" />
          <Tag text={gender} bg={getBgGender} color={getColorGender} />
        </div>
      </ContainerHeader>
    </CardContainer>
  );
}

export default CardCharacter;
