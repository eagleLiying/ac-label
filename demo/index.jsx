import { Con, Row, Col } from "bee-layout";
import { Panel } from "bee-panel";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "bee-button";
import "./demo.scss";
const pkg = require("../package.json");

const CARET = <i className="uf uf-arrow-down" />;

const CARETUP = <i className="uf uf-arrow-up" />;

import Demo1 from "./demolist/Demo1";
var DemoArray = [
  {
    example: <Demo1 />,
    title: " 标签",
    code: `
/**
 *
 * @title 标签
 *
 */

import React, { Component } from 'react';
import Label from '@yonyou/ac-label';
import '@yonyou/ac-label/dist/index.css'

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
        })
    }

    onClickTest() {
        this.setState({
            activeTest: !this.state.activeTest
        })
    }

    onClickPro() {
        this.setState({
            activePro: !this.state.activePro
        })
    }

    onClickStage() {
        this.setState({
            activeStage: !this.state.activeStage
        })
    }

    render() {
        return (
            <div className="demoPadding">
                <Label onClick={this.onClickDev} colors="#4CAF4F" active={this.state.activeDev}>开发环境</Label>
                <Label onClick={this.onClickTest} colors="#008BFA" active={this.state.activeTest}>测试环境</Label>
                <Label onClick={this.onClickPro} colors="#FF9700" active={this.state.activePro}>生产环境</Label>
                <Label onClick={this.onClickStage} colors="#9B9B9B" active={this.state.activeStage}>灰度环境</Label>
            </div>
        )
    }
}

export default Demo1;
`,
    desc: " "
  }
];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { title, example, code, desc } = this.props;
    let caret = this.state.open ? CARETUP : CARET;
    let text = this.state.open ? "隐藏代码" : "查看代码";

    const footer = (
      <Button shape="block" onClick={this.handleClick}>
        {caret}
        {text}
      </Button>
    );
    return (
      <Col md={12}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <Panel
          collapsible
          expanded={this.state.open}
          colors="bordered"
          header={example}
          footer={footer}
          footerStyle={{ padding: 0 }}
        >
          <pre>
            <code className="hljs javascript">{code}</code>
          </pre>
        </Panel>
      </Col>
    );
  }
}

export default class DemoGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        {DemoArray.map((child, index) => {
          return (
            <Demo
              example={child.example}
              title={child.title}
              code={child.code}
              desc={child.desc}
              key={index}
            />
          );
        })}
      </Row>
    );
  }
}
