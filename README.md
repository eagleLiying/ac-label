## @yonyou/ac-label

### 1. 效果

![image](https://raw.githubusercontent.com/eagleLiying/ac-label/HEAD/docs/assets/img/label.png)

### 2. 安装

通过ynpm下载使用 `npm install @yonyou/ac-label --save-dev`
通过npm下载使用 `npm install ac-label --save-dev`


### 3. 使用

```js
import React, { Component } from 'react';
import Label from '@yonyou/ac-label';
import '@yonyou/ac-label/dist/index.css';

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
```
### 4. API

参数 | 类型 | 说明 | 默认值
---|---|---|---
className|String| 类名 | ''
children|String| 标签名字，必填 | '标签名'
colors|String|标签的颜色| '#41B883'
onChange|Function| -- | undefined
