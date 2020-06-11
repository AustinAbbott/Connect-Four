import React from "react";
// import "./style.css";

// board is 7 across, 6 top to bottom
// 0 = blank
// 1 = red
// 2 = blue

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0]
      ],
      turn: 1,
      winner: 0
    };
    this.playerMove = this.playerMove.bind(this)
  }

  playerMove(columnNum){

    let column = this.state.board[columnNum]
    
    for (let i = column.length - 1; i > -1; i--) {

      let newGrid = this.state.board

      if (column[i] === 0) {
        newGrid[columnNum][i] = this.state.turn;
        this.setState({
          board: newGrid
        })

        if (this.state.turn === 1) {
          this.setState({turn: 2});
        } else {
          this.setState({turn: 1});
        }
        break;
      }
    }
    this.roundChecker(this.state.board)
  }

  roundChecker(board) {
    
    let count = 0;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (count >= 3) {
          return count;
        }
        if (board[i][j] === board[i][j + 1] && board[i][j] !== 0) {
          count++
        } else {
          count = 0;
        }
      }
    }

    count = 0;

    for (let i = 0; i < board[0].length; i++) {
      for (let j = 0; j < board.length - 1; j++) {
        if (count >= 3) {
          return count;
        }
        if (board[j][i] === board[j + 1][i] && board[j][i] !== 0) {
          count++
        } else {
          count = 0;
        }
      }
    }

    // DIAGONALS
    let index = 0;
    let majorFinished = false;

    // MAJOR DIAGONALS
    while (!majorFinished) {

      for (let i = 0; i < 3; i++) {
        let value = board[index][i] 
        if (value !== 0 && value === board[index + 1][i + 1] && value === board[index + 2][i + 2] && value === board[index + 3][i + 3]) {
          this.setState({winner: {value}})
          majorFinished = true;
        }

        if (index === 3 && i === 3 ) {
          majorFinished = true;
        } 
      }
        index++ 
      }

      // MINOR DIAGONALS
      index = 0;
      let minorFinished = false;

      while (!minorFinished) {

        for (let i = 5; i > 2; i--) {
          let value = board[index][i] 
          if (value !== 0 && value === board[index + 1][i - 1] && value === board[index + 2][i - 2] && value === board[index + 3][i - 3]) {
            this.setState({winner: {value}})
            minorFinished = true;
          }
  
          if (index === 3 && i === 3) {
           minorFinished = true;
         } 
        }
        index++ 
      }
  }

  render() {
    return (
      <div>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", textAlign: "center"}}>
        {this.state.board.map((column, index) => (
          <div onClick={() => this.playerMove(index)} style={{border: "2px solid black"}}> 
            {column.map(function(tile) {
              if (!tile) {
                return <div style={{color: "grey", fontSize: "5em", padding: "0", gridColumn: `${index + 1}`}}>.</div>;
              } else if (tile === 1) {
                return <div style={{color: "red",  fontSize: "5em", padding: "0", gridColumn: `${index + 1}`}}>.</div>;
              } else {
                return <div style={{color: "blue", fontSize: "5em", padding: "0", gridColumn: `${index + 1}`}}>.</div>;
              }
            })}
          </div>
        ))}
      </div>
      <div>{this.state.winner ? <div>Hello!</div> : null}</div>
      </div>
    );
  }
}

export default Board;
