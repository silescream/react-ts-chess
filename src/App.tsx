import { useEffect, useState } from 'react';
import './App.css';
import  BoardComponent  from './components/BoardComponent';
import { LostFigures } from './components/LostFigures';
import { RestartGame } from './components/RestartGame';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, []);

  function swapPlayer () {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  function restart () {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  return (
    <div className="app">
      <RestartGame restart = {restart}/>
      <BoardComponent board ={board}
                      setBoard = {setBoard}
                      currentPlayer ={currentPlayer}
                      swapPlayer = {swapPlayer}/>
        <div>
          <LostFigures title= {"Black Figures"} figures = {board.lostBlackFigures} />
          <LostFigures title= {"White Figures"} figures = {board.lostWhiteFigures} />
        </div>
        
    </div>
  );
}

export default App;
