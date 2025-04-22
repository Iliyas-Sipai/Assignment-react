import React, { Component } from "react";

export default class ClassCompo extends Component {
  constructor() {
    console.log("constructor are called");
    super();
    this.state = {
      num: 1,
    };
  }
  componentDidMount() {
    console.log("componentDidMount are called");

    setTimeout(() => {
      this.setState({
        num: this.state.num + 20,
      });
    }, 2000);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps");
    console.log(state);
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(preveProps, preveState) {
    console.log("old value");
    console.log(preveState);
    return null;
  }
  componentDidUpdate() {
    console.log("Finally updated...");
  }

  render() {
    return <div></div>;
  }
}
