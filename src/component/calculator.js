import React from "react";
import Screen from "./screen.js";
import Button from "./button.js";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberone: null,
      numbertwo: null,
      action: null,
      result: null,
    };
    this.clickbutton = this.clickbutton.bind(this);
  }
  clickbutton(event) {
    const value = event.target.value;
    const func =
      value === "+" || value === "-" || value === "*" || value === "/";
    const equal = value === "=";
    const cle = value === "CE";
    const del = value === "Del";

    if (
      this.state.numbertwo === null &&
      !del &&
      !func &&
      !equal &&
      !cle &&
      this.state.action === null
    ) {
      let temp1 =
        this.state.numberone === null
          ? "" + value
          : this.state.numberone + value;
      this.setState({ numberone: temp1, result: temp1 }, () => {
        console.log("numberone", this.state.numberone);
        console.log("result", this.state.result);
      });
    } else if (
      func &&
      !equal &&
      !cle &&
      !del &&
      this.state.numberone !== null &&
      this.state.action === null
    ) {
      let temp2 = this.state.action === null ? "" + value : this.state.action;
      let temp3 = this.state.result + temp2;
      this.setState({ action: temp2, result: temp3 }, () => {
        console.log("action", temp2);
        console.log("temp3", temp3);
      });
    } else if (
      this.state.numberone != null &&
      this.state.action != null &&
      !func &&
      !del &&
      !equal &&
      !cle
    ) {
      let temp4 =
        this.state.numbertwo === null
          ? "" + value
          : this.state.numbertwo + value;
      let temp5 = this.state.result + value;
      this.setState({ numbertwo: temp4, result: temp5 }, () => {
        console.log("numbertwo", temp4);
        console.log("result", temp5);
      });
    } else if (
      this.state.numberone != null &&
      this.state.numbertwo != null &&
      this.state.action != null &&
      equal
    ) {
      var tong =
        parseFloat(this.state.numberone) + parseFloat(this.state.numbertwo);
      if (this.state.action === "+") {
        this.setState(
          { result: tong, numberone: tong, numbertwo: null, action: null },
          () => {}
        );
      } else if (this.state.action === "-") {
        var hieu =
          parseFloat(this.state.numberone) - parseFloat(this.state.numbertwo);

        this.setState({
          result: hieu,
          numberone: hieu,
          numbertwo: null,
          action: null,
        });
      } else if (this.state.action === "*") {
        var nhan =
          parseFloat(this.state.numberone) * parseFloat(this.state.numbertwo);

        this.setState({
          result: nhan,
          numberone: nhan,
          numbertwo: null,
          action: null,
        });
      } else if (this.state.action === "/") {
        var chia =
          parseFloat(this.state.numberone) / parseFloat(this.state.numbertwo);

        this.setState({
          result: chia,
          numberone: chia,
          numbertwo: null,
          action: null,
        });
      }
    } else if (cle) {
      console.log("xoa");
      this.setState({
        result: null,
        numberone: null,
        numbertwo: null,
        action: null,
      });
    } else if (del) {
      console.log("xoa 1");
      if (
        this.state.numberone != null &&
        this.state.numbertwo === null &&
        this.state.action === null
      ) {
        console.log("xoa number one");
        console.log("result", this.state.result.length);
        let strResult;
        let result = this.state.result;
        strResult = result.substring(0, result.length - 1);
        console.log("strResult", strResult.length);
        let strnumberone;
        let numberone1 = this.state.numberone;
        strnumberone = numberone1.substring(0, numberone1.length - 1);
        this.setState({ result: strResult, numberone: strnumberone });
      } else if (
        this.state.numberone != null &&
        this.state.numbertwo !== null &&
        this.state.action !== null
      ) {
        console.log("xoa number two");
        console.log("result", this.state.result.length);
        let strResult;
        let result = this.state.result;
        strResult = result.substring(0, result.length - 1);
        console.log("strResult", strResult.length);
       let numbertwo2 = this.state.numbertwo

      } else if (
        this.state.numberone != null &&
        this.state.numbertwo === null &&
        this.state.action !== null
      ) {
        console.log("xoa action");
      }
    }
  }
  render() {
    return (
      <div className="mainCalculator">
        <Screen result={this.state.result} />
        <div className="button-row">
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"7"}
          />
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"8"}
          />
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"9"}
          />
          <Button
            className="butun-function"
            label={"+"}
            clickbutton={this.clickbutton}
          />
        </div>
        <div className="button-row">
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"4"}
          />
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"5"}
          />
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"6"}
          />
          <Button
            className="butun-function"
            clickbutton={this.clickbutton}
            label={"-"}
          />
        </div>
        <div className="button-row">
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"1"}
          />
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"2"}
          />
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"3"}
          />
          <Button
            className="butun-function"
            clickbutton={this.clickbutton}
            label={"*"}
          />
        </div>
        <div className="button-row">
          <Button
            className="butun-clear"
            clickbutton={this.clickbutton}
            label={"CE"}
          />
          <Button
            className="butun-number"
            clickbutton={this.clickbutton}
            label={"0"}
          />
          <Button
            className="butun-function"
            clickbutton={this.clickbutton}
            label={"="}
          />
          <Button
            className="butun-function"
            clickbutton={this.clickbutton}
            label={"/"}
          />
        </div>
        <div>
          <Button
            className="butun-function"
            clickbutton={this.clickbutton}
            label={"Del"}
            size="10"
          />
          <Button
            className="butun-function"
            clickbutton={this.clickbutton}
            label={"."}
          />
        </div>
      </div>
    );
  }
}
export default Calculator;
