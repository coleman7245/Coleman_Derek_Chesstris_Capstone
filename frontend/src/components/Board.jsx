function Board({width, height}) {
    let squares = [];

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const key = String(x * height + y);
            console.log(key);
            squares.push(<div className='square' key={key}></div>);
        }
    }

    return (
        <div className='board'>
            {squares}
        </div>
    )
}

export default Board