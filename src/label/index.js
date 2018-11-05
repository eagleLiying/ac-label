import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Label extends Component {
  static defaultProps = {
    children: '标签名',
    colors: "#41B883",
    active: false,
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.children)
  } 

  render() {
    const { colors, active, children, className } = this.props;
    const containerStyle = {
      borderColor: active && colors
    };
    const contentStyle = {
      backgroundColor: active && colors,
      color: !active && "#555", 
      borderColor: !active && "#D6D6D6" ,
    };


    return (
      <div onClick={this.handleClick} className={`labelContainer ${active && 'active'} ${className}`} style={containerStyle} >
        <div className="labelContent" style={contentStyle}>{children}</div>
      </div>
    );
  }
}

Label.prototypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.boolean,
  colors: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
