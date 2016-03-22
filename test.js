var expect = require('chai').expect;
var Matrix = require('./index.js');

describe('tests for getting values at certain positions in different matrices', function() {
  var mat1 = new Matrix([1, 2], [3, 4]);
  it('should return matrix element at position 1 x 1 in 2 x 2 matrix', function() {
    expect(mat1.indexAt(1, 1)).to.be.eql(4);
  });

  var mat2 = new Matrix([1, 2, 5], [3, 4, 9], [10, 11, 12]);
  it('should return matrix element at position 1 x 1 in 3 x 3 matrix', function() {
    expect(mat2.indexAt(1, 2)).to.be.eql(9);
  });

  var mat3 = new Matrix([1], [3], [10]);
  it('should return matrix element at position 2 x 0 in 3 x 1 matrix', function() {
    expect(mat3.indexAt(2, 0)).to.be.eql(10);
  });
});

describe('tests for changing values at certain positions in different matrices', function() {
  var mat1 = new Matrix([1, 2], [3, 4]);
  it('should return matrix element after changing position at 1 x 1 in 2 x 2 matrix', function() {
    var diff = mat1.set(1, 1, 400);
    expect(diff[1][1]).to.be.eql(400);
  });

  var mat2 = new Matrix([1, 2, 5], [3, 4, 9], [10, 11, 12]);
  it('should return matrix element after changing position at 1 x 1 in 3 x 3 matrix', function() {
    var diff = mat2.set(1, 1, 800);
    expect(diff[1][1]).to.be.eql(800);
  });

  var mat3 = new Matrix([1], [3], [10]);
  it('should return matrix element after changing position at 2 x 0 in 3 x 1 matrix', function() {
    var diff = mat3.set(2, 0, 22);
    expect(diff[2][0]).to.be.eql(22);
  });
});

describe('tests for checking transpose of matrix', function() {
  var mat1 = new Matrix([1, 2], [3, 4]);
  it('should return transpose of 2 x 2 matrix', function() {
    var diff = [[1, 3], [2, 4]]
    expect(mat1.transpose()).to.eql(diff);
  });

  var mat2 = new Matrix([1, 2], [3, 4], [8, 9]);
  it('should return transpose of 3 x 2 matrix', function() {
    var diff = [[1, 3, 8], [2, 4, 9]]
    expect(mat2.transpose()).to.eql(diff);
  });
});
