import React from "react";


class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "name",
    };
  }


  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={(e) => this.props.search(e.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>


          <button
            className={
              this.state.filter === "name"
                ? "filters__item is-selected"
                : "filters__item"
            }

            onClick={() => {
              this.setState({ filter: "name" });
              this.props.sort("name");
            }}
          >Nome <i className="fas fa-sort-down" />
          </button>


          <button
            className={
              this.state.filter === "country"
                ? "filters__item is-selected"
                : "filters__item"
            }
            onClick={() => {
              this.setState({ filter: "country" });
              this.props.sort("country");
            }}
          > País <i className="fas fa-sort-down" />
          </button>


          <button
            className={
              this.state.filter === "company"
                ? "filters__item is-selected"
                : "filters__item"
            }
            onClick={() => {
              this.setState({ filter: "company" });
              this.props.sort("company");
            }}
          >Empresa <i className="fas fa-sort-down" />
          </button>


          <button
            className={
              this.state.filter === "department"
                ? "filters__item is-selected"
                : "filters__item"
            }
            onClick={() => {
              this.setState({ filter: "department" });
              this.props.sort("department");
            }}
          > Departamento <i className="fas fa-sort-down" />
          </button>


          <button
            className={
              this.state.filter === "admissionDate"
                ? "filters__item is-selected"
                : "filters__item"
            }
            onClick={() => {
              this.setState({ filter: "admissionDate" });
              this.props.sort("admissionDate");
            }}

          >Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}


export default Filters;