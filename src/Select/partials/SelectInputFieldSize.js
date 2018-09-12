import styled from 'styled-components'
import SelectInputField from './SelectInputField';

export default styled(SelectInputField.withComponent('div'))`
  position: absolute;
  top: 0px;
  left: 0px;
  visibility: hidden;
  height: 0px;
  white-space: pre;
`;
