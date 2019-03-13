import React from "react";
import { Template, Item } from "./template";
import { Component, ComponentID, componentsByID } from "./component";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { Builder } from "./template";
import { PDF } from "./renderer/pdf";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

interface State {
  template: Template;
}

const items = [
  {
    id: randID(),
    component: ComponentID.Heading
  },
  {
    id: randID(),
    component: ComponentID.Paragraph
  },
  {
    id: randID(),
    component: ComponentID.Heading
  },
  {
    id: randID(),
    component: ComponentID.Paragraph
  },
  {
    id: randID(),
    component: ComponentID.Heading
  },
  {
    id: randID(),
    component: ComponentID.Paragraph
  }
].map(component => ({
  ...component,
  value: componentsByID[component.component].defaultValue
}));

export default class App extends React.Component<any, State> {
  state: State = {
    template: {
      page: {
        margin: {
          left: 15,
          top: 25,
          right: 15,
          bottom: 25
        }
      },
      items
    }
  };

  setTemplateItemValue = (id: string, value: string) => {
    const items = this.state.template.items.map(item => {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
    this.setState({
      template: {
        ...this.state.template,
        items
      }
    });
  };

  addItem = (component: Component, after?: Item): Item => {
    const item: Item = {
      id: randID(),
      component: component.id,
      value: componentsByID[component.id].defaultValue
    };

    const items: Item[] = [];
    this.state.template.items.forEach(i => {
      items.push(i);
      if (after && i.id === after.id) {
        items.push(item);
      }
    });
    if (!after) {
      items.push(item);
    }

    this.setState({
      template: {
        ...this.state.template,
        items
      }
    });

    return item;
  };

  removeItem = (item: Item) => {
    const items = this.state.template.items.filter(i => item.id !== i.id);
    this.setState({
      template: {
        ...this.state.template,
        items
      }
    });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <CssBaseline />
                <Grid
                  container
                  style={{
                    minWidth: "100vw",
                    minHeight: "100vh"
                  }}
                >
                  <Builder
                    template={this.state.template}
                    setTemplateItemValue={this.setTemplateItemValue}
                    addItem={this.addItem}
                    removeItem={this.removeItem}
                  />
                </Grid>
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/pdf"
            render={() => (
              <PDFViewer
                style={{
                  width: "100vw",
                  height: "100vh"
                }}
              >
                <PDF template={this.state.template} />
              </PDFViewer>
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

function randID() {
  return (Math.random() * 1e7).toFixed().toString();
}
