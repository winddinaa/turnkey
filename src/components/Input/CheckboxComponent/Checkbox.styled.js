import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Checkbox } from "@mui/material";
import { theme } from "../../../core/theme/theme";

export const StyledButton = styled(Checkbox, {
  shouldForwardProp: (prop) => prop !== "configTheme",
})`
  border-radius: 3px;
  height: 32px;
  padding: 6px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 87px;

  ${({ variant }) =>
    variant === "blank" &&
    css`
      box-shadow: none;
      span {
        text-decoration: underline;
      }
    `};

  &:hover,
  &:focus {
    border-color: ${theme.extend.colors.primary};
    color: ${theme.extend.colors.primary};
  }

  /* เปลี่ยน background ตอน checked */
  &.Mui-checked {
    border-color: ${theme.extend.colors.primary};
    color: ${theme.extend.colors.primary};
  }
`;
