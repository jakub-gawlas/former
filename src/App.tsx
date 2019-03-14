import React, { useReducer, SFC } from "react";
import { createReducer, initialState, createActions } from "./template";
import { context } from "./context";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { Builder } from "./template";
import { PDF } from "./renderer/pdf";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

export const App: SFC<{}> = () => {
  const reducer = createReducer();
  const [template, dispatch] = useReducer(reducer, initialState);
  const actions = createActions(dispatch);

  return (
    <context.Provider
      value={{
        template: {
          state: template,
          actions
        }
      }}
    >
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
                    template={template}
                    setTemplateItemValue={actions.setTemplateItemValue}
                    addItem={actions.addTemplateItem}
                    removeItem={actions.removeTemplateItem}
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
                <PDF template={template} />
              </PDFViewer>
            )}
          />
        </React.Fragment>
      </Router>
    </context.Provider>
  );
};
