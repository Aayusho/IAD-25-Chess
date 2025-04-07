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
isPieceMovementValid(fromSquare, toSquare, piece, isCapture) {
    const { type } = piece;
    switch (type.toLowerCase()) {
        case 'pawn':
          return this.isPawnCaptureValid(fromSquare, toSquare, piece);
        case 'knight':
          return this.isKnightMoveValid(fromSquare, toSquare);
        case 'bishop':
          return this.isBishopMoveValid(fromSquare, toSquare);
        case 'rook':
          return this.isRookMoveValid(fromSquare, toSquare);
        case 'queen':
          return this.isQueenMoveValid(fromSquare, toSquare);
        case 'king':
          return this.isKingMoveValid(fromSquare, toSquare);
        default:
          return false;
      }
    }

   * Validates pawn capture movement
   */

   isPawnCaptureValid(fromSquare, toSquare, piece) {
    const { row: fromRow, col: fromCol } = fromSquare;
    const { row: toRow, col: toCol } = toSquare;
    
    // Direction depends on color (white moves up, black moves down)
    const direction = piece.color === 'white' ? -1 : 1;
    
    // Regular pawn capture: diagonally forward one square
    if (toRow === fromRow + direction && Math.abs(toCol - fromCol) === 1) {
      return true;
    }
    
    // En passant capture
    if (this.isEnPassantCapture(fromSquare, toSquare, piece)) {
      return true;
    }
    
    return false;
  }
