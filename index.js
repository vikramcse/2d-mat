(function() {
  'use strict';

  /**
   * Creates a 2D dimensional matrix.
   *
   * Examples:
   *
   *   var mat = new Matrix();
   *   var mat = new Matrix([1, 2], [3, 4]);
   *
   * @api public
   */
  function Matrix() {
    this.list = Array.prototype.slice.call(arguments) || [];
  }

  /**
   * Gets the current matrix
   * @return {Array}
   */
  Matrix.prototype.get = function() {
    return this.list;
  };

  /**
   * Returns a current element in matrix
   * @param  {integer} row row number
   * @param  {integer} col column number
   * @return {number}
   */
  Matrix.prototype.indexAt = function(row, col) {
    return this.list[row][col];
  };

  /**
   * Returns a size of the matrix in the form of list
   * where list[0] is row and list[1] is column
   *
   * @return {Array}
   */
  Matrix.prototype.size = function() {
    return [this.list.length, this.list[0].length];
  };

  /**
   * Sets a value to given row and column
   * @param  {integer} row    row number
   * @param  {integer} column column number
   * @param  {number} value  current value
   * @return {Array}
   */
  Matrix.prototype.set = function(row, column, value) {
    this.list[row][column] = value;
    return this.list;
  };

  /**
   * Prints the cuttent matrix
   * @return {string}
   */
  Matrix.prototype.print = function() {
    console.log("[[" + this.list.join("],\n[") + "]]");
  };

  /**
   * Creates a 2d matrix having size of row x col
   * and value is assigned to undefined
   *
   * @param  {integer} row row number
   * @param  {integer} col column number
   * @return {array}
   */
  Matrix.prototype.createEmpty = function(row, col) {
    var mat = new Array(row);

    for (var i = 0; i < row; i++) {
      mat[i] = new Array(col);
    }

    return mat;
  };

  /**
   * Returns transpose of a matrix
   * @return {array}
   */
  Matrix.prototype.transpose = function() {
    var row = this.list.length;
    var col = this.list[0].length;

    var trans = this.createEmpty(col, row);

    for (var r = 0; r < row; r++) {
      for (var c = 0; c < col; c++) {
        trans[c][r] = this.list[r][c];
      }
    }

    return trans;
  };

  module.exports = Matrix;
})();
