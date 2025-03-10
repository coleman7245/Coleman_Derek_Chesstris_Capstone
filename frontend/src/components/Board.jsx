function Board({width, height}) {
    let squares = [];

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            squares.push(<div className='square'></div>);
        }
    }

    return (
        <div className='board'>
            squares
        </div>
    )
}

export default Board