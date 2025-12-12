import { SIconWrapper, SIconImage, SIconTitle } from "./styles";

export const icons = (name: string, image: string, alt = "", width = 100) => (
  <SIconWrapper>
    <SIconTitle>{name}</SIconTitle>
    <SIconImage src={image} alt={alt} width={width} />
  </SIconWrapper>
);
