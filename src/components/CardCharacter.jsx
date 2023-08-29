import styled from "styled-components";
import Label from "./Label";
import Tag from "./Tag";
import { Genders } from "../helpers/enums/genders";
import { Colors } from "../helpers/enums/colors";
import { useTranslation } from "react-i18next";

const { Male } = Genders;
const { BgPink, BgBlue, GreyLight } = Colors;

const CardContainer = styled.div`
  width: 300px;
  height: 380px;
  padding: 10px;
  margin: 6px auto;
  border: 1px solid ${GreyLight};
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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameText = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 0px 4px;
`;

const OccupationText = styled.p`
  margin-top: 4px;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 4px;
`;

function CardCharacter({ name, img, gender, occupation }) {
  const { t } = useTranslation();
  const bgGender = gender === Male ? BgBlue : BgPink;

  return (
    <CardContainer id={name}>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
      <HeaderContainer>
        <div>
          <Label text={t("character.name")} />
          <NameText>{name}</NameText>
        </div>
        <div>
          <Label text={t("character.gender.label")} />
          <Tag
            text={t(`character.gender.${gender}`)}
            background={bgGender}
            color="white"
          />
        </div>
      </HeaderContainer>

      <ContentContainer>
        <Label text={t("character.occupation")} />
        <OccupationText>{occupation}</OccupationText>
      </ContentContainer>
    </CardContainer>
  );
}

export default CardCharacter;
