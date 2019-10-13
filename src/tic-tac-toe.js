class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.symbol;
            this.symbol = this.symbol == 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.isDraw() == true || this.getWinner() != null;
    }

    getWinner() {
        let check = function (value, matrix) {
            let checkColumns = function () {
                let successfully = false;

                for (let i = 0; i < 3; i++) {
                    let result = '';
                    for (let j = 0; j < 3; j++) {
                        result += matrix[i][j];
                    }

                    if (result == value) {
                        successfully = true;
                    }
                }
                return successfully;
            }

            let checkRows = function () {
                let successfully = false;

                for (let i = 0; i < 3; i++) {
                    let result = '';
                    for (let j = 0; j < 3; j++) {
                        result += matrix[j][i];
                    }

                    if (result == value) {
                        successfully = true;
                    }
                }
                return successfully;
            }

            let checkDiagonals = function () {
                let diagonal1 = '';
                let diagonal2 = '';

                for (let i = 0; i < 3; i++) {
                    diagonal1 += matrix[i][i];
                    diagonal2 += matrix[i][2 - i];
                }
    
               return diagonal1 == value || diagonal2 == value;
            }

            return checkColumns() || checkRows() || checkDiagonals();
        }

        if (check('xxx', this.matrix)) {
            return 'x';
        } else if (check('ooo', this.matrix)) {
            return 'o';
        } else
            return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] == null) {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        return this.getWinner() == null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
