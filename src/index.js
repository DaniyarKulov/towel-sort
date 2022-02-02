// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (matrix === undefined) {
		return [];
	}
	matrix.forEach((x, i) => {
		i % 2 === 0 ? x.sort((a, b) => a - b) : x.sort((a, b) => b - a);
	});
	return [].concat(...matrix);
};
