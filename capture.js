/**
 * chess capture mechanics
 * it handles all the logic related to the piece captures in chess game
 * and checks if a capture is legal and executes it
 */

class CaptureHandler {
    constructor(board) {
        this.board = board;
    }
}

/**
 *checking if the capture move is legal
 */

isCaptureLegal (fromSquare, toSquare, movingPiece, targetPiece){
    //making sure to not capture own pieces
    if (movingPiece.color === targetPiece.color){
        return false;
    }

//checking if the piece movement results in capture
    if ( !this.isMovementValid(fromSquare, toSquare, movingPiece, true)) {
        return false;
    }

//if that move leaves the king in check
    if (this.kingInCheck (fromSquare, toSquare, movingPiece)) {
        return false;
    }

return true;
}

/**
 * validating the piece movement pattern for captures
 */
