import { SGridContainer, SGridWrapper } from "../pages/Androids/styles";

interface GridLayoutProps {
  title_1: string;
  title_2?: string;
  title_3?: string;
  title_4?: string;
  content_block_1: React.ReactNode;
  content_block_2?: React.ReactNode;
  content_block_3?: React.ReactNode;
  content_block_4?: React.ReactNode;
}

export const GridLayout = ({
  title_1,
  title_2,
  title_3,
  title_4,
  content_block_1,
  content_block_2,
  content_block_3,
  content_block_4,
}: GridLayoutProps) => {
  return (
    <SGridWrapper>
      <h2>{title_1}</h2>
      <SGridContainer>{content_block_1}</SGridContainer>
      {content_block_2 && title_2 && (
        <>
          <h2>{title_2}</h2>
          <div className="grid-container">{content_block_2}</div>
        </>
      )}
      {content_block_3 && title_3 && (
        <>
          <h2>{title_3}</h2>
          <div className="grid-container">{content_block_3}</div>
        </>
      )}
      {content_block_4 && title_4 && (
        <>
          <h2>{title_4}</h2>
          <div className="grid-container">{content_block_4}</div>
        </>
      )}
    </SGridWrapper>
  );
};
