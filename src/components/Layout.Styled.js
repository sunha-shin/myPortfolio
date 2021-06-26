import styled from 'styled-components';

export const SectionContainer = styled.div`
  padding: 100px 0;
  background: ${props => props.grey ? '#f5f5f5' : '#fff'};
`;

export const ContentContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;


export const Overlay = styled.div`
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, ${props => props.alpha || 0.6});
`;

