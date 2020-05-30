import { sudokuBoard } from "./sudokuboard.js";

let board = new sudokuBoard();
board.items = [
    [ , , ,7, ,3,1, , ],
    [ ,5, ,4,9, ,8,3, ],
    [ ,9, , ,1,8,7,4,5],
    [1,3, , ,4,9, , , ],
    [9, , ,8, , ,6, ,3],
    [2, ,6, , ,1,9,8, ],
    [5, ,4,9,6,2,3, , ],
    [ , , , ,8, , ,2, ],
    [ ,2, , , ,4,5, , ],
  ];

while (true)
{
    let e = board.empties();
    if (e.length === 0) {
        break;
    }
    e.forEach(p => {
        let r = board.findResults(p.x, p.y);
        if (r.length === 1) {
            console.log('found solution for (' + p.x + ',' + p.y + ') ' + r[0]);
            board.items[p.x][p.y] = r[0];
        }
    });
}

console.log('done');
board.print();