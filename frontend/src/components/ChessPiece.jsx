import { useState } from 'react';

import '../styles/ChessPiece.css';

function ChessPiece({source}) {
    const [pos, setPos] = useState([0, 0]);
    const vel = 30;

    function handleInput(event) {
        // event.preventDefault();
        let newPos = [...pos];

        switch (event.key) {
            case 'w':
                newPos[1] -= vel;
                break;
            case 'a':
                newPos[0] -= vel;
                break;
            case 's':
                newPos[1] += vel;
                break;
            case 'd':
                newPos[0] += vel;
                break;
            default:
                break;
        }

        setPos(newPos);
    }

    return (
        <div className='chesspiece' style={{'left': `${pos[0]}px`, 'top': `${pos[1]}px`}} tabIndex='0' onKeyDown={(e) => handleInput(e)}>
            <img src={source} />
        </div>
    );
}

// function ChessPiece({source}) {
//     const [state, setState] = useState({style : {}, pos : [0, 0]});
//     const vel = 5;

//     function handleInput(event) {
//         // event.preventDefault();
//         let newState = {...state};

//         switch (event.key) {
//             case 'w':
//                 newState.pos[1] -= vel;
//                 break;
//             case 'a':
//                 newState.pos[0] -= vel;
//                 break;
//             case 's':
//                 newState.pos[1] += vel;
//                 break;
//             case 'd':
//                 newState.pos[0] += vel;
//                 break;
//             default:
//                 break;
//         }

//         newState.style = {'position': 'absolute', 'left': `${newState.pos[0]}px`, 'top': `${newState.pos[1]}px`};

//         setState(newState);
//     }

//     console.log(state.pos);

//     return (
//         <div className='chesspiece' style={state.style} tabIndex='0' onKeyDown={(e) => handleInput(e)}>
//             <img src={source} />
//         </div>
//     );
// }

export default ChessPiece;