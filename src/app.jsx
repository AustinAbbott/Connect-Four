import React from "react";



// board is 7 across, 6 top to bottom

class Board extends React.Component {

  constructor() {
    super()
    this.state = {
      color: "blue",
      columnOne: 0,
    }
    this.columnOneFunc = this.columnOneFunc.bind(this)
  }

  columnOneFunc() {
    this.setState({columnOne: this.state.columnOne++})
    console.log(this.state.columnOne)
  }

  render() {
    console.log(this.state.columnOne)
    return (
      <div style={{padding: '5em'}}>
        <table id="board" style={{transform: "rotate(270deg)"}}>
          <tr onClick={this.columnOneFunc}>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>1</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>2</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>3</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>4</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>5</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>6</td>
          </tr>

          <tr>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>1</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>2</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>3</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>4</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>5</td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}>6</td>
          </tr>

          <tr>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
          </tr>

          <tr>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
          </tr>

          <tr>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
          </tr>

          <tr>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
          </tr>

          <tr>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
            <td style={{backgroundColor: this.state.color, borderRadius: '50%', padding: "1em"}}></td>
          </tr>

        </table>
      </div>
    );
  }
}

export default Board;
