/** @jsx jsx */

// focus visible polyfill
import "focus-visible/dist/focus-visible.min";

import { jsx, css, Global } from "@emotion/core";
import React, { ComponentProps } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

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
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
`;

const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border-bottom: 1px solid ${theme.colors.shadow};

  ${theme.mediaQueries.small} {
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  padding: 1em;
  text-decoration: none;
  display: block;

  color: ${theme.colors.black};
  outline-color: ${theme.colors.blue};
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

interface PageLayoutProps {
  children: React.ReactNode;
}
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <PageContainer>
        <PageHeader>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <NavLink
              css={{ ":hover": { textDecoration: "none" } }}
            >
              <em css={{ fontStyle: "normal" }}>
                <span role="img" aria-label="">
                  ✅
                </span>{" "}
                Todo App
              </em>
            </NavLink>
          </Link>
          <div css={{ flex: 1 }} />
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
              <NavLink href="https://chop-chop.org/">
                Chop-Chop Academy
              </NavLink>
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
}

const PageLayoutMargin: React.FC<
  ComponentProps<"div">
> = props => (
  <div
    css={{
      margin: "auto",
      padding: "1em",
      width: "80ch",
      maxWidth: "100%",
      [theme.mediaQueries.small]: {
        padding: 4,
      },
    }}
    {...props}
  />
);
PageLayout.Margin = PageLayoutMargin;
