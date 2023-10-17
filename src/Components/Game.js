import React from "react";
import { css } from "@emotion/css";

class Square extends React.Component {
  render() {
    return (
      <button
        className={css`
          background: #fff;
          border: 1px solid 999;
          float: left;
          font-size: 40px;
          font-weight: bold;
          line-height: 50px;
          height: 50px;
          margin-right: -1px;
          margin-top: -1px;
          padding: 0;
          text-align: center;
          width: 50px;
          font-display: center;
          align-items: center;
        `}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    isPlayerX: true
  };
  handleClick = (index) => {
    const squares = this.state.squares.slice();
    if (squares[index] || calcwinner(squares)) return;
    squares[index] = this.state.isPlayerX ? "X" : "O";
    this.setState({ squares: squares, isPlayerX: !this.state.isPlayerX });
  };
  render() {
    const winner = calcwinner(this.state.squares);
    let status = "";
    if (winner) {
      status = "winner is :" + winner;
    } else if (this.state.isPlayerX) {
      status = "Next player is : X";
    } else {
      status = "Next player is: O";
    }
    return (
      <div>
        <div
          className={css`
            position: flex;
            margin-bottom: 5px;
          `}
        >
          {status}
        </div>
        <div
          className={css`
            ::after {
              clear: both;
              content: " ";
              display: table;
            }
          `}
        >
          <Square
            value={this.state.squares[0]}
            onClick={() => this.handleClick(0)}
          />
          <Square
            value={this.state.squares[1]}
            onClick={() => this.handleClick(1)}
          />
          <Square
            value={this.state.squares[2]}
            onClick={() => this.handleClick(2)}
          />
        </div>
        <div
          className={css`
            ::after {
              clear: both;
              content: " ";
              display: table;
            }
          `}
        >
          <Square
            value={this.state.squares[3]}
            onClick={() => this.handleClick(3)}
          />
          <Square
            value={this.state.squares[4]}
            onClick={() => this.handleClick(4)}
          />
          <Square
            value={this.state.squares[5]}
            onClick={() => this.handleClick(5)}
          />
        </div>
        <div
          className={css`
            ::after {
              clear: both;
              content: " ";
              display: table;
            }
          `}
        >
          <Square
            value={this.state.squares[6]}
            onClick={() => this.handleClick(6)}
          />
          <Square
            value={this.state.squares[7]}
            onClick={() => this.handleClick(7)}
          />
          <Square
            value={this.state.squares[8]}
            onClick={() => this.handleClick(8)}
          />
        </div>
      </div>
    );
  }
}
function calcwinner(square) {
  const winningSqr = [
    [0, 3, 6],
    [0, 1, 2],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningSqr.length; i++) {
    const [a, b, c] = winningSqr[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default function Game() {
  return (
    <>
      <h3
        className={css`
          color: grey;
          font-size: 40px;
          text-align: center;
          padding: 5px;
        `}
      >
        Tic Tac Toe{" "}
      </h3>
      <div className="game">
        <div className="game=info">
          <Board className="board" />
        </div>
      </div>
      
        <h3
          className={css`
            color: lightseagreen;
            text-align: center;
            margin-top: 17%;
          `}
        >
          

        </h3>
      
      
    </>
  );
}