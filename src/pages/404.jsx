import * as React from "react";
import ButtonLink from "../ui/components/buttons/ButtonLink";
import { IntlProvider } from "react-intl";
import AnimatedGrid from "../ui/components/AnimatedGrid";
import logo from "../assets/images/logo.svg";
import Link from "../ui/components/LinkLocalized";

const NotFoundPage = () => {
  return (
    <IntlProvider>
      <div className="not-found-page">
        <AnimatedGrid />
        <div className="content">
          <Link to="/" className="logo">
            <img className="logo" alt="Bonsai" src={logo} />
          </Link>
          <h1 className="alpha">Page not found</h1>
          <p className="intro-text">
            Sorry, we couldn’t find what you were looking for.
          </p>
          <ButtonLink to="/" label="Go home" />
        </div>
      </div>
    </IntlProvider>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
