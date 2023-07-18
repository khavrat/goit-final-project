import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 16px 100px 16px;

  @media screen and (min-width: 768px) {
    padding: 0 32px 200px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1240px;
    display: flex;
    gap: 50px;
    flex-direction: row;  
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 28px;
  color: var(--secondary-text-color);
  @media screen and (min-width: 768px) {
    letter-spacing: -0.24px;
  }
`;

export const InstructionsList = styled.ul`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    gap: 18px;
  }
`;

export const ListItem = styled.li`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
  display: flex;
  gap: 14px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 1280px) {
    max-width: 757px;
  }
`;

export const GreenCircle = styled.div`
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: var(--white-color);
  flex-shrink: 0;
`;

export const ImageWrapper = styled.div`

  @media screen and (min-width: 768px) {
    max-width: 433px;
  }
`;

export const ImageRecipe = styled.img`
  display: block;
  object-fit: contain;
  width:100%;
  border-radius: 8px;
`;