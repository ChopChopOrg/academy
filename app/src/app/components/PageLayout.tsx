/** @jsx jsx */

// focus visible polyfill
import "focus-visible/dist/focus-visible.min";

import { jsx, css, Global } from "@emotion/core";
import React, { ComponentProps, forwardRef } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

import { HamburgerMenu } from "../../lib/components/HamburgeMenu";
import { theme } from "../../theme";

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

  ${theme.mediaQueries.medium} {
    display: block;
  }
`;

const NavLink = forwardRef(
  (
    props: ComponentProps<"a">,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const { pathname } = useRouter();
    return (
      <a
        ref={ref}
        css={[
          {
            padding: "1em",
            textDecoration: "none",
            display: "block",

            color: theme.colors.black,
            outlineColor: theme.colors.blue,
            cursor: "pointer",

            borderBottom: "1px solid transparent",
          },
          pathname === props.href && {
            borderColor: theme.colors.black,
          },
        ]}
        {...props}
      />
    );
  }
);

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
            <NavLink
              css={{
                display: "inline-flex",
              }}
            >
              <em css={{ fontStyle: "normal" }}>
                <span role="img" aria-label="">
                  🎓
                </span>{" "}
                Chop-Chop Academy
              </em>
            </NavLink>
          </Link>
          <div css={{ flex: 1 }} />
          <nav
            css={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              a: {
                ":hover": {
                  borderColor: theme.colors.blue,
                },
              },
              [theme.mediaQueries.medium]: {
                display: "none",
              },
            }}
          >
            <Link href="/">
              <NavLink href="/">
                <span role="img" aria-label="">
                  ✅
                </span>{" "}
                To-Dos
              </NavLink>
            </Link>
            <Link href="/pomodoro">
              <NavLink href="/pomodoro">
                <span role="img" aria-label="">
                  🍅
                </span>{" "}
                Pomodoro
              </NavLink>
            </Link>
            <NavLink href="https://github.com/ChopChopOrg/academy">
              GitHub
            </NavLink>
            <NavLink href="https://www.meetup.com/Chop-Chop-Academy-Web-Apps/">
              Meetup
            </NavLink>
          </nav>
          {/* Warning: Failed prop type: Link: unknown props found: className, style, tabIndex */}
          {/* TODO: Next Link is super painful, I already have some code to fix it though */}
          <HamburgerMenu
            css={{
              display: "none",
              [theme.mediaQueries.medium]: {
                display: "unset",
              },
            }}
          >
            <Link href="/">
              <NavLink href="/">
                <span role="img" aria-label="">
                  ✅
                </span>{" "}
                To-Dos
              </NavLink>
            </Link>
            <Link href="/pomodoro">
              <NavLink href="/pomodoro">
                <span role="img" aria-label="">
                  🍅
                </span>{" "}
                Pomodoro
              </NavLink>
            </Link>
            <NavLink href="https://github.com/ChopChopOrg/academy">
              GitHub
            </NavLink>
            <NavLink href="https://www.meetup.com/Chop-Chop-Academy-Web-Apps/">
              Meetup
            </NavLink>
          </HamburgerMenu>
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
              a: {
                ":hover": {
                  textDecoration: "underline",
                },
              },
              [theme.mediaQueries.medium]: {
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
                Chop-Chop
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

const PageLayoutMargin: React.FC<ComponentProps<
  "div"
>> = props => (
  <div
    css={{
      margin: "auto",
      padding: "1em",
      width: "80ch",
      maxWidth: "100%",
      [theme.mediaQueries.medium]: {
        padding: 16,
      },
    }}
    {...props}
  />
);
PageLayout.Margin = PageLayoutMargin;
