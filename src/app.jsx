import React from "react";

// board is 7 across, 6 top to bottom

class Board extends React.Component {

  constructor() {
    super()
    this.state = {
      color: "blue",
      columnOne: 0,
      columnTwo: 6,
    }
    this.columnOneFunc = this.columnOneFunc.bind(this)
    this.columnTwoFunc = this.columnTwoFunc.bind(this)
  }

  columnOneFunc() {
    let newColor = this.state.color === 'red' ? 'yellow' : 'red'
    let newVal = this.state.columnOne + 1

    if (this.state.columnOne < 6) {
    this.setState({columnOne: newVal, color: newColor}, () => document.getElementById(this.state.columnOne).style.backgroundColor = newColor)
    }
  }

  columnTwoFunc() {
    let newColor = this.state.color === 'red' ? 'yellow' : 'red'
    let newVal = this.state.columnTwo + 1

    if (this.state.columnTwo < 12) {
    this.setState({columnTwo: newVal, color: newColor}, () => document.getElementById(this.state.columnTwo).style.backgroundColor = newColor)
    }
  }

  render() {
    return (
      <div style={{padding: '5em'}}>
      <div>{this.state.columnOne}</div>
        <table id="board" style={{transform: "rotate(270deg)"}}>
        <tbody>
          <tr onClick={this.columnOneFunc}>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="1">1</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="2">2</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="3">3</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="4">4</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="5">5</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="6">6</td>
          </tr>

          <tr onClick={this.columnTwoFunc}>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="7">7</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="8">8</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="9">9</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="10">10</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="11">11</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="12">12</td>
          </tr>

          <tr>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="13">13</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="14">14</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="15">15</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="16">16</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="17">17</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="18">18</td>
          </tr>

          <tr>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="19">19</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="20">20</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="21">21</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="22">22</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="23">23</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="24">24</td>
          </tr>

          <tr>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="25">25</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="26">26</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="27">27</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="28">28</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="29">29</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}} id="30">30</td>
          </tr>

          <tr>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>31</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>32</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>33</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>34</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>35</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>36</td>
          </tr>

          <tr>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>37</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>38</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>39</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>40</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>41</td>
            <td style={{backgroundColor: "black", borderRadius: '50%', padding: "1em"}}>42</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
