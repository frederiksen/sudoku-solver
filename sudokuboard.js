class sudokuBoard {
    items = [
        [, , , , , , , , ],
        [, , , , , , , , ],
        [, , , , , , , , ],
        [, , , , , , , , ],
        [, , , , , , , , ],
        [, , , , , , , , ],
        [, , , , , , , , ],
        [, , , , , , , , ],
        [, , , , , , , , ],
    ];
    empties() {
        let e = [];
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                if (this.items[x][y] === undefined) {
                    e.push({x, y});
                }
            }
        }
        return e;
    }
    print() {
      for (let y = 0; y < 9; y++) {
          console.log(this.items[y]);
      }  
    }
    findResults(x, y) {
        let array1 = this.horizontalValues(y);
        let array2 = this.verticalValues(x);
        let array3 = this.boxValues(x, y);
        return array1.filter(value => array2.includes(value)).filter(value => array3.includes(value));
    }
    horizontalValues(y) {
        let r = [];
        for (let i = 1; i < 10; i++) {
            let found = false;
            for (let x = 0; x < 9; x++) {
                if (this.items[x][y] === i) {
                    found = true;
                }
            }
            if (found === false) {
                r.push(i);
            }
        }
        return r;
    }
    verticalValues(x) {
        let r = [];
        for (let i = 1; i < 10; i++) {
            let found = false;
            for (let y = 0; y < 9; y++) {
                if (this.items[x][y] === i) {
                    found = true;
                }
            }
            if (found === false) {
                r.push(i);
            }
        }
        return r;
    }
    boxValues(x, y) {
        let r = [];
        for (let i = 1; i < 10; i++) {
            let found = false;
            for (let xcount = 0; xcount < 3; xcount++) {
                for (let ycount = 0; ycount < 3; ycount++) {
                    if (this.items[3*Math.floor(x/3) + xcount][3*Math.floor(y/3) + ycount] === i) {
                        found = true;
                    }                
                }
            }
            if (found === false) {
               r.push(i);
            }            
        }
        return r;
    }
}

export { sudokuBoard }