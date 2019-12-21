import React from "react";
import { connect } from "react-redux";

import Hello from "../../component/Hello";
import { ActionTypes } from "../../constant/hello";

class MainPage extends React.Component<any> {
  public componentDidMount() {
    this.props.dispatch({ type: ActionTypes.HELLO_REQUEST });
  }

  public render() {
    return <Hello />;
  }
}

export default connect(state => state)(MainPage);
