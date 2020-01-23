/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  bubble as Menu,
  Props as MenuProps,
} from "react-burger-menu";

import { theme } from "../../theme";

export interface HamburgerMenuProps
  extends Omit<MenuProps, "styles"> {}

const overlayStylesOverride = {
  bmOverlay: {
    background: "rgba(255,255,255,0.8)",
  },
  bmBurgerBars: {},
  bmBurgerButton: {},
  bmCross: {},
  bmCrossButton: {},
  bmItemList: {},
  bmMenu: {},
  bmMenuWrap: {},
  bmMorphShape: {},
};

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  ...rest
}) => (
  <nav
    css={css`
      .bm-burger-button {
        position: fixed;
        width: 28px;
        height: 24px;
        right: 22px;
        top: 22px;
      }
      .bm-burger-bars {
        border: 1px solid ${theme.colors.gray};
        background: ${theme.colors.shadow};
      }
      .bm-burger-bars-hover {
        border: 1px solid ${theme.colors.black};
        background: ${theme.colors.black};
      }
      .bm-cross-button {
        height: 24px;
        width: 24px;
      }
      .bm-cross {
        background: ${theme.colors.gray};
      }
      .bm-menu-wrap {
        position: fixed;
        height: 100%;
      }
      .bm-menu {
        background: ${theme.colors.white};
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
      }
      .bm-morph-shape {
        fill: ${theme.colors.white};
      }
      .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
      }
      .bm-item {
        display: inline-block;
      }
    `}
    className={className}
  >
    <Menu styles={overlayStylesOverride} {...rest} />
  </nav>
);
