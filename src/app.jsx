import React from "react";

// board is 7 across, 6 top to bottom

class Board extends React.Component {
  render() {
    return (
      <div>
        <table id="board">
       
          <tr>
            <td>one</td>
            <td>two</td>
            <td>three</td>
          </tr>
          
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Board;
