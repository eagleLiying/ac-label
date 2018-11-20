/**
 *
 * @title 标签
 *
 */

import React, { Component } from "react";
import Label from "../../src/index";

class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDev: true,
      activeTest: false,
      activePro: false,
      activeStage: false,
    };

    this.onClickDev = this.onClickDev.bind(this);
    this.onClickTest = this.onClickTest.bind(this);
    this.onClickPro = this.onClickPro.bind(this);
    this.onClickStage = this.onClickStage.bind(this);
  }

  onClickDev() {
    this.setState({
      activeDev: !this.state.activeDev
    });
  }

  onClickTest() {
    this.setState({
      activeTest: !this.state.activeTest
    });
  }

  onClickPro() {
    this.setState({
      activePro: !this.state.activePro
    });
  }

  onClickStage() {
    this.setState({
      activeStage: !this.state.activeStage
    });
  }

  render() {
    return (
      <div className="demoPadding">
        <Label
          onClick={this.onClickDev}
          colors="#4CAF4F"
          active={this.state.activeDev}
        >
          开发环境
        </Label>
        <Label
          onClick={this.onClickTest}
          colors="#008BFA"
          active={this.state.activeTest}
        >
          测试环境
        </Label>
        <Label
          onClick={this.onClickPro}
          colors="#FF9700"
          active={this.state.activePro}
        >
          生产环境
        </Label>
        <Label
          onClick={this.onClickStage}
          colors="#9B9B9B"
          active={this.state.activeStage}
        >
          灰度环境
        </Label>
        <Label onClick={this.onClickStage} active={this.state.activeStage}>
          灰度环境
        </Label>
      </div>
    );
  }
}

export default Demo1;
