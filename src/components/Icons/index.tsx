import { SIconWrapper, SIconImage, SIconTitle } from "./styles";

export const icons = (id: number, name: string, image: string, alt = "", width = 100) => (
  <SIconWrapper key={id}>
    <SIconTitle>{name}</SIconTitle>
    <SIconImage src={image} alt={alt} width={width} />
  </SIconWrapper>
);
