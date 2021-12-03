import styled from 'styled-components';

const ContactsMap = styled.div.attrs(props => ({
  ref: props.ref
}))`
  position: relative;
  display: flex;
  width: 649px;
  height: 336px;
  margin-left: auto;
`;

export {
  ContactsMap,
};
