const getRoot = (num, steps = 12) => Math.pow(2, (num / steps));

const createGuitar = (scaleLength = 25.5, numFrets = 24) => {
	const getEmptyArray = length => Array(length).fill(null);
	const getDistance = fret => scaleLength - scaleLength / getRoot(fret);
	const getFrets = () => getEmptyArray(numFrets).map((_, index) => getDistance(index + 1, scaleLength));
	const getWidth = fret => getDistance(fret) - getDistance(fret - 1);
	const getWidthPercent = (fret, numFrets) => getWidth(fret) / getDistance(numFrets);
	const getWidthsPercent = numFrets => getEmptyArray(numFrets).map((_, index) => getWidthPercent(index + 1, numFrets));

	return { getDistance, getFrets, getWidth, getWidthPercent, getWidthsPercent };
};

export default createGuitar;
