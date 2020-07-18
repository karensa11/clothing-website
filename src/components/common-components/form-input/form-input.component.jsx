import React, {Component} from "react";
import "./form-input.styles.scss";
import viewIcon from "../../../assets/view.png";
import hideIcon from "../../../assets/hide.png";

const PASSWORD_TYPE = "password";

export default class FormInput extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            passwordHidden: true
        }
    }

    setShowPassword = (value) => {
        this.setState({passwordHidden: value});
    };

    render() {
        const {type} = this.props;
        const otherProps = {...this.props};
        delete otherProps.type;
        delete otherProps.handleChange;
        const inputType = type === PASSWORD_TYPE && !this.state.passwordHidden ?
            "" : type;
        return (
            <div className="group">
                <input className={`${type} ${this.state.passwordHidden ? "hidden":""} form-input`}
                       type={inputType}
                       onChange={this.props.handleChange} {...otherProps} />
                {this.props.label &&
                    <label className={`${this.props.value.length ? 'shrink' : ''} form-input-label`}>
                        {this.props.label}
                    </label>
                }
                {type === PASSWORD_TYPE &&
                    <span>
                        &nbsp;&nbsp;
                        {this.state.passwordHidden ?
                            <img src={viewIcon} alt="" width="25" height="25" onClick={() => this.setShowPassword(false)}/>
                            :
                            <img src={hideIcon} alt="" width="25" height="25" onClick={() => this.setShowPassword(true)}/>
                        }
                    </span>

                }
            </div>
        )
    }
}