/** @jsx jsx */

// focus visible polyfill
import "focus-visible/dist/focus-visible.min";

import { jsx, css, Global } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";

import { theme } from "../theme";

const globalStyles = css`
  html,
  body,
  #__next {
    height: 100%;
  }
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

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
  flex-wrap: wrap;

  border-bottom: 1px solid ${theme.colors.shadow};
  padding: 1em;

  ${theme.mediaQueries.small} {
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  margin-left: 1em;
  text-decoration: none;
  display: block;

  color: ${theme.colors.black};
  outline-color: ${theme.colors.blue};

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
          <em
            css={{
              fontStyle: "normal",
              display: "block",
              flex: 1,
            }}
          >
            <span role="img" aria-label="">
              ✅
            </span>{" "}
            Todo App
          </em>
          <nav
            css={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              [theme.mediaQueries.small]: {
                flexDirection: "column",
                a: {
                  width: "100%",
                  marginLeft: 0,
                },
              },
            }}
          >
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
        <main css={{ minHeight: "90vh" }}>{children}</main>
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
              [theme.mediaQueries.small]: {
                flexDirection: "column",
                li: {
                  marginBottom: "1em",
                  a: {
                    width: "100%",
                    marginLeft: 0,
                  },
                },
              },
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
