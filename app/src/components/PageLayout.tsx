/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";

import { theme } from "../theme";

const globalStyles = {
  "html, body, #__next": { height: "100%" },
  body: { margin: 0 },
};

const PageContainer = styled.div`
  color: ${theme.colors.black};
  background: ${theme.colors.white};

  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const PageHeader = styled.header`
  display: flex;
  flex-direction: row;

  box-shadow: 0 0 25px ${theme.colors.shadow};
  padding: 1em;
`;

const NavLink = styled.a`
  margin-left: 1em;
  text-decoration: none;

  color: ${theme.colors.black};

  :focus,
  :hover {
    text-decoration: underline;
  }
`;

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <PageContainer>
        <PageHeader>
          <em css={{ fontStyle: "normal", display: "block", flex: 1 }}>
            <span role="img" aria-label="">
              ✅
            </span>{" "}
            Todo App
          </em>
          <nav>
            <NavLink href="https://chop-chop.org/academy-web-apps">
              Chop-Chop Academy
            </NavLink>
            <NavLink href="https://github.com/ChopChopOrg/academy">
              GitHub
            </NavLink>
            <NavLink href="https://www.meetup.com/Chop-Chop-Academy-Web-Apps/">
              Meetup
            </NavLink>
          </nav>
        </PageHeader>
        <main css={{ minHeight: "75vh" }}>{children}</main>
        <footer
          css={{
            padding: "2em",
            background: theme.colors.yellow,
          }}
        >
          <ul
            css={{
              listStyle: "none",
              display: "flex",
              flexDirection: "row",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <NavLink href="https://chop-chop.org/">Chop-Chop Academy</NavLink>
            </li>
            <li>
              <NavLink href="https://github.com/ChopChopOrg/academy">
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink href="https://www.meetup.com/Chop-Chop-Academy-Web-Apps/">
                Meetup
              </NavLink>
            </li>
          </ul>
        </footer>
      </PageContainer>
    </>
  );
};
