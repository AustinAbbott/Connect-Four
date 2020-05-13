import React from "react";

// board is 7 across, 6 top to bottom

class Board extends React.Component {
  constructor() {
    super();
    (this.storage = [[], [], [], [], [], [], []]),
      (this.state = {
        1: 0,
        2: 6,
        3: 12,
        4: 18,
        5: 24,
        6: 30,
        7: 36,
        won: false,
      });
    this.onChange = this.onChange.bind(this);
    this.roundWon = this.roundWon.bind(this);
  }

  onChange(columnNum) {
    let newColor = this.state.color === "red" ? "blue" : "red";
    let newVal = this.state[columnNum] + 1;

    if (this.state[columnNum] < columnNum * 6) {
      this.storage[columnNum - 1].push(newColor);
      this.setState(
        { [columnNum]: newVal, color: newColor },
        () =>
          (document.getElementById(
            this.state[columnNum]
          ).style.backgroundColor = newColor)
      );
    }
    this.roundWon();
  }

  roundWon() {
    let inARow = 1;

    for (let i = 0; i < this.storage.length; i++) {
      for (let j = 0; j < this.storage[i].length; j++) {
        if (this.storage[i][j] === this.storage[i][j + 1]) {
          inARow++;
        } else {
          inARow = 1;
        }

        if (inARow > 3) {
          console.log('Yo!')
          break;
        }
      }
      if (inARow > 3) {
        break;
      }
    }
    if (inARow > 3) {
      this.setState({won: true})
      // console.log(this.state)
    }
  }

  render() {
    return (
      <div style={{ padding: "5em" }}>
        <table id="board" style={{transform: "rotate(270deg)"}}>
        <tbody>
          <tr onClick={() => this.onChange(1)}>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="1"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="2"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="3"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="4"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="5"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="6"></td>
          </tr>

          <tr onClick={() => this.onChange(2)}>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="7"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="8"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="9"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="10"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="11"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="12"></td>
          </tr>

          <tr onClick={() => this.onChange(3)}>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="13"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="14"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="15"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="16"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="17"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="18"></td>
          </tr>

          <tr onClick={() => this.onChange(4)}>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="19"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="20"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="21"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="22"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="23"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="24"></td>
          </tr>

          <tr onClick={() => this.onChange(5)}>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="25"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="26"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="27"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="28"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="29"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="30"></td>
          </tr>

          <tr onClick={() => this.onChange(6)}>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="31"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="32"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="33"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="34"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="35"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="36"></td>
          </tr>

          <tr onClick={() => this.onChange(7)}>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="37"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="38"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="39"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="40"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="41"></td>
            <td style={{backgroundColor: "white", border: 'black solid 0.15em', borderRadius: '50%', padding: "1em"}} id="42"></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
