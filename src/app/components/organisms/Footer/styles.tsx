import { media } from 'app/styles/media';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const SmallScreenWrapper = styled.footer`
  padding: 2rem 1rem;
  background: ${props => props.theme.palette.primary.default};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const MainNavLinks = (component: typeof NavLink) => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

export const MainNavLink = MainNavLinks(NavLink);

export const LinksWrapper = styled.div``;

export const SectionLabel = styled.div`
  color: ${props => props.theme.palette.secondary.default};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.875rem;
`;

export const SocialMedias = styled.div``;

export const SocialMediasOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PaymentMethods = styled.div``;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  gap: 0.5rem;
`;

export const TermsSmallScreen = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
`;

export const customizeTermLinks = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  font-size: 0.75rem;
  line-height: 1.5rem;
  white-space: nowrap;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

export const TermLinkStyled = customizeTermLinks(NavLink);

export const CompanyInfos = styled.span`
  font-size: 0.75rem;
  line-height: 1.5rem;
  text-align: center;
  max-width: 35rem;
  margin: 0 auto;

  ${media.medium`
    margin: initial;
  `}

  color: ${props => props.theme.palette.secondary.s300};
`;

export const MediumScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(12.5rem, max-content));
  justify-content: space-between;
`;

export const LinksMediumScreen = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const SectionTitleMediumScreen = styled.div`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const SectionWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

export const SectionNavLinks = (component: typeof NavLink) => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  text-transform: none;
  font-size: 0.75rem;
  font-weight: normal;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

export const SectionNavLink = SectionNavLinks(NavLink);

export const MultipleSectionsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

export const Hr = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.palette.primary.p600};
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: none;
  margin-inline-start: none;
`;

export const Container = styled.footer`
  padding: 2rem 2.5rem;
  background: ${props => props.theme.palette.primary.default};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TermsSectionMediumScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TermsLinksMediumScreen = styled.div`
  display: flex;
  gap: 4rem;
`;
