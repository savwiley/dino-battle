import styled from 'styled-components';
import { Link } from "react-router-dom";

export const IconLink = styled(Link)`
  color: var(--red);
  font-size: calc(1em + 8vmin);
  filter: drop-shadow(1px 1px 1px #000);
  fill-rule: #fff;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const RulesLink = styled(IconLink).attrs({
  as: "button"
})`
  background: transparent;
  border: none;
  outline: none;
`;