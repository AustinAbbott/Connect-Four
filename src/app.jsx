import React from "react";
import roundChecker from "./utilities/roundChecker.js";

// board is 7 across, 6 top to bottom
// 0 = blank
// 1 = red
// 2 = yellow

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
        [0, 0, 0, 0, 0, 0],
      ],
      turn: 1,
      winner: 0,
    };
    this.playerMove = this.playerMove.bind(this);
  }

  playerMove(columnNum) {
    let column = this.state.board[columnNum];

    for (let i = column.length - 1; i > -1; i--) {
      let newGrid = this.state.board;

      if (column[i] === 0) {
        newGrid[columnNum][i] = this.state.turn;
        this.setState({
          board: newGrid,
        });

        if (this.state.turn === 1) {
          this.setState({ turn: 2 });
        } else {
          this.setState({ turn: 1 });
        }
        break;
      }
    }
    this.setState({ winner: roundChecker(this.state.board) });
  }

  render() {
    return (
      <div
        style={{ padding: "150px", textAlign: "center", fontFamily: "Verdana" }} 
      >
        <div style={{ margin: "0" }} key={Math.random()}>
          <h1>Connect Four</h1>
        </div>
        <div
          style={{
            display: "grid",
            backgroundColor: "#2367ed",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            textAlign: "center",
            height: "50vh",
            width: "auto"
          }}
          key={Math.random()}
        >
          {this.state.board.map((column, index) => (
            <div
              onClick={this.state.winner ? null : () => this.playerMove(index)} key={Math.random()}
            >
              {column.map(function (tile) {
                if (!tile) {
                  return (
                    <div
                      style={{
                        backgroundColor: "white",
                        margin: "5px",
                        height: "75px",
                        width: "75px",
                        boxShadow: "5px 1.5px #363b3f",
                        borderRadius: "50%",
                        gridColumn: `${index + 1}`,
                      }}
                      key={Math.random()}
                    ></div>
                  );
                } else if (tile === 1) {
                  return (
                    <div
                      style={{
                        backgroundColor: "#d22636",
                        margin: "5px",
                        height: "75px",
                        width: "75px",
                        boxShadow: "5px 1.5px #363b3f",
                        borderRadius: "50%",
                        gridColumn: `${index + 1}`,
                      }}
                      key={Math.random()}
                    ></div>
                  );
                } else {
                  return (
                    <div
                      style={{
                        backgroundColor: "#fcd332",
                        margin: "5px",
                        height: "75px",
                        width: "75px",
                        boxShadow: "5px 1.5px #363b3f",
                        borderRadius: "50%",
                        gridColumn: `${index + 1}`,
                      }}
                      key={Math.random()}
                    ></div>
                  );
                }
              })}
            </div>
          ))}
        </div>
        <div key={Math.random()}>
          {this.state.winner ? (
            <div>
              <h3>
                {this.state.winner === 2
                  ? "Yellow is the winner!"
                  : "Red is the winner!"}
              </h3>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Board;
``;
