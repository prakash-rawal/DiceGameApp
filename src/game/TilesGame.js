import React, { useState } from 'react';

function TilesGame() {

    const [dice, setDice] = useState("")
    const [isActive, setIsActive] = useState('A')
    const [rollStepA, setRollStepA] = useState(0);
    const [rollStepB, setRollStepB] = useState(0);

    const rollDice = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        if (isActive === 'A' && rollStepA + randomNum <= 14) {
            setDice(randomNum);

            setRollStepA(rollStepA + randomNum)
            if (rollStepA + randomNum === 14) {
                setTimeout(() => {
                    alert(`A Won The Game🤩 and B lost the game by ${14 - rollStepB} tiles😤`)
                }, 500);
               
            }
        
        }

        if (isActive === 'B' && rollStepB + randomNum <= 14) {
            setDice(randomNum);

            setRollStepB(rollStepB + randomNum)
            if (rollStepB + randomNum === 14) {
                setTimeout(() => {
                    alert(`B Won The Game🤩 and A lost the game by ${14 - rollStepA} tiles😤`);
                }, 500);
            }
        }
        setIsActive(isActive === 'A' ? 'B' : 'A')
    }

    const handleReset = () => {
       
            setDice("");
            setIsActive('A');
            setRollStepA(0);
            setRollStepB(0);
        
      
    };

    return (
        <>
            <div className='destination'>
                <h4>Destination</h4>
            </div>
            <div className='game'>
                <div className='playerA'>
                    <div className={rollStepA === 14 ? "tiles purple" : "tiles"} >14</div>
                    <div className={rollStepA === 13 ? "tiles purple" : "tiles"} >13</div>
                    <div className={rollStepA === 12 ? "tiles purple" : "tiles"} >12</div>
                    <div className={rollStepA === 11 ? "tiles purple" : "tiles"} >11</div>
                    <div className={rollStepA === 10 ? "tiles purple" : "tiles"} >10</div>
                    <div className={rollStepA === 9 ? "tiles purple" : "tiles"} >9</div>
                    <div className={rollStepA === 8 ? "tiles purple" : "tiles"} >8</div>
                    <div className={rollStepA === 7 ? "tiles purple" : "tiles"} >7</div>
                    <div className={rollStepA === 6 ? "tiles purple" : "tiles"} >6</div>
                    <div className={rollStepA === 5 ? "tiles purple" : "tiles"} >5</div>
                    <div className={rollStepA === 4 ? "tiles purple" : "tiles"} >4</div>
                    <div className={rollStepA === 3 ? "tiles purple" : "tiles"} >3</div>
                    <div className={rollStepA === 2 ? "tiles purple" : "tiles"} >2</div>
                    <div className={rollStepA === 1 ? "tiles purple" : "tiles"} >1</div>
                    <div className='player'>Player A</div>
                    {
                        rollDice ?
                            <button onClick={rollDice} disabled={isActive === 'B'}>Roll</button>
                            : ""
                    }
                </div>


                <div className='winner'>
                    <div className='dice'>{dice}</div>
                    <button onClick={handleReset}>Reset Game</button>
                </div>

                <div className='playerB'>
                    <div className={rollStepB === 14 ? "tiles purple" : "tiles"} >14</div>
                    <div className={rollStepB === 13 ? "tiles purple" : "tiles"} >13</div>
                    <div className={rollStepB === 12 ? "tiles purple" : "tiles"} >12</div>
                    <div className={rollStepB === 11 ? "tiles purple" : "tiles"} >11</div>
                    <div className={rollStepB === 10 ? "tiles purple" : "tiles"} >10</div>
                    <div className={rollStepB === 9 ? "tiles purple" : "tiles"}  >9</div>
                    <div className={rollStepB === 8 ? "tiles purple" : "tiles"}  >8</div>
                    <div className={rollStepB === 7 ? "tiles purple" : "tiles"}  >7</div>
                    <div className={rollStepB === 6 ? "tiles purple" : "tiles"}  >6</div>
                    <div className={rollStepB === 5 ? "tiles purple" : "tiles"}  >5</div>
                    <div className={rollStepB === 4 ? "tiles purple" : "tiles"}  >4</div>
                    <div className={rollStepB === 3 ? "tiles purple" : "tiles"}  >3</div>
                    <div className={rollStepB === 2 ? "tiles purple" : "tiles"}  >2</div>
                    <div className={rollStepB === 1 ? "tiles purple" : "tiles"}  >1</div>
                    <div>Player B</div>

                    {
                        rollDice ?
                            <button onClick={rollDice} disabled={isActive === 'A'}>Roll</button>
                            : ""
                    }
                </div>

            </div>
            {/* <div className='winner'>{winner}</div> */}


        </>
    )
}
export default TilesGame;