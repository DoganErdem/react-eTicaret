import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Nortwind Mağazası</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/saveproduct">Ürün Ekle</Link>
                </NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
