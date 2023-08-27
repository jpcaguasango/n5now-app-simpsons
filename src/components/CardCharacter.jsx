import styled from "styled-components";
import Label from "./Label";
import Tag from "./Tag";
import { FaReddit, FaUserCircle } from "react-icons/fa";
import { Genders } from "../helpers/enums/genders";
import { Species } from "../helpers/enums/species";
import { Colors } from "../helpers/enums/colors";
import { cleanSpaces } from "../helpers/string";
import { useTranslation } from "react-i18next";

const { Male } = Genders;
const { Alien } = Species;
const { BgPink, Pink, BgBlue, Blue } = Colors;

const CardContainer = styled.div`
  width: 220px;
  height: 340px;
  padding: 10px;
  margin: 6px auto;
  border: 1px solid #383838;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 8px;
`;

const SpeciesIcon = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;

  min-width: 50px;
  display: flex;
  align-items: center;

  background-color: black;
  padding: 4px 8px;
  border-radius: 4px;

  font-size: 18px;
  color: white;
  font-weight: bold;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 0px 4px;
`;

function CardCharacter({ name, img, gender, species }) {
  const { t } = useTranslation();
  const bgGender = gender === Male ? BgBlue : BgPink;
  const colorGender = gender === Male ? Blue : Pink;
  const speciesIcon = species === Alien ? <FaReddit /> : <FaUserCircle />;

  return (
    <CardContainer id={name}>
      <ImageContainer>
        <Image src={img} />
        <SpeciesIcon>
          {speciesIcon}
          <Label
            text={t(`character.species.${cleanSpaces(species.toLowerCase())}`)}
          />
        </SpeciesIcon>
      </ImageContainer>
      <HeaderContainer>
        <div>
          <Label text={t("character.name")} />
          <Name>{name}</Name>
        </div>
        <div>
          <Label text={t("character.gender.label")} />
          <Tag
            text={t(`character.gender.${gender.toLowerCase()}`)}
            background={bgGender}
            color={colorGender}
          />
        </div>
      </HeaderContainer>
    </CardContainer>
  );
}

export default CardCharacter;
