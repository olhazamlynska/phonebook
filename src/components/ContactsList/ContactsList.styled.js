import styled from 'styled-components';

export const ContactsListSTyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Notification = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.accentColor};
`;
