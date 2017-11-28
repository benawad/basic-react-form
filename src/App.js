import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

injectTapEventPlugin();

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [
      {
        firstName: "Tann",
        lastName: "Gounin",
        username: "tgounin0",
        email: "tgounin0@wordpress.com",
        passsword: "yJG2MuL5piY"
      },
      {
        firstName: "Elana",
        lastName: "Ricioppo",
        username: "ericioppo1",
        email: "ericioppo1@timesonline.co.uk",
        passsword: "S7p9ReUoQe"
      },
      {
        firstName: "Bentlee",
        lastName: "Decourt",
        username: "bdecourt2",
        email: "bdecourt2@about.me",
        passsword: "MWU9hc"
      },
      {
        firstName: "Hyacintha",
        lastName: "Choudhury",
        username: "hchoudhury3",
        email: "hchoudhury3@va.gov",
        passsword: "kRtWP1"
      },
      {
        firstName: "Ari",
        lastName: "Spedroni",
        username: "aspedroni4",
        email: "aspedroni4@sun.com",
        passsword: "o78ibUPPmDlZ"
      },
      {
        firstName: "Abelard",
        lastName: "Rodriguez",
        username: "arodriguez5",
        email: "arodriguez5@shutterfly.com",
        passsword: "g2jd4AwfpA"
      },
      {
        firstName: "Ikey",
        lastName: "Latek",
        username: "ilatek6",
        email: "ilatek6@berkeley.edu",
        passsword: "GAsgPpKvJx"
      },
      {
        firstName: "Justis",
        lastName: "Habbeshaw",
        username: "jhabbeshaw7",
        email: "jhabbeshaw7@simplemachines.org",
        passsword: "GN2aQt3ZPq"
      },
      {
        firstName: "Maddie",
        lastName: "Bayne",
        username: "mbayne8",
        email: "mbayne8@constantcontact.com",
        passsword: "H1GmQcyG6"
      },
      {
        firstName: "Gerrie",
        lastName: "Rulton",
        username: "grulton9",
        email: "grulton9@reverbnation.com",
        passsword: "tcwp6oONe"
      }
    ],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc"
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleSave={this.handleSave}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
              {
                name: "Username",
                prop: "username"
              },
              {
                name: "Email",
                prop: "email"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
