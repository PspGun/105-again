import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  selectedDish() {
    this.renderDish(this.props.dishes[this.props.selectedDish]);
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        <Header />
        <Menu
          dishes={this.state.dishes}
          selectedDish={this.state.selectedDish}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
