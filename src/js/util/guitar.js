const { getInterval } = require('./scale.js');

const getRoot = (num, steps = 12) => Math.pow(2, (num / steps));

const createGuitar = ({
	scaleLength = 25.5,
	numFrets = 24,
	tuning = ['e4', 'b4', 'g3', 'd3', 'a3', 'e2']
} = {}) => {
	const getEmptyArray = length => Array(length).fill(null);
	const getDistance = fret => scaleLength - scaleLength / getRoot(fret);
	const getFrets = () => getEmptyArray(numFrets).map((_, index) => getDistance(index + 1, scaleLength));
	const getWidth = fret => getDistance(fret) - getDistance(fret - 1);
	const getWidthPercent = (fret, numFrets) => getWidth(fret) / getDistance(numFrets);
	const getWidthsPercent = numFrets => getEmptyArray(numFrets).map((_, index) => getWidthPercent(index + 1, numFrets));

	/**
	 * @param string - 1-indexed
	 * @param fret - 0 is open string
	 */
	const getNote = (string, fret) => {
		const openNote = tuning[string - 1]; // Convert to zero-indexed.
		const note = getInterval(openNote, fret);
		return note;
	}

	return { getDistance, getFrets, getWidth, getWidthPercent, getWidthsPercent, getNote };
};

module.exports = createGuitar;
