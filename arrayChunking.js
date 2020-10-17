/*

	An example of array chunking.
	Could be needed to split very large arrays into smaller chunks for easier manipulation.

 */

const chunkArray = (array, size) => {
	const chunks = [];

	for (let item of array) {
		/*

			'lastChunk' = is an array in an array, therefore:
			1st iteration: 'lastChunk' is undefined, because there are no chunks here yet

			2nd iteration: 'lastChunk' already contains [[7691]]

		 */
		const lastChunk = chunks[chunks.length - 1];

		/*

			1st iteration: 'lastChunk' is undefined,
			so the '!lastChunk' condition would work, and we push an array into array with item in it. [[7691]]

			2nd iteration: 'lastChunk' already contains data, so the '!lastChunk' would't work.
			e.g. our 'size' = 9, so 'lastChunk.length' gonna be converted to false too.
			Therefore, we go to our 'else' condition, and pushing element to our 'lastChunk'. [[7691, 9831]]

			The logic repeats until the second argument of the first condition is triggered.

		 */
		if (!lastChunk || lastChunk.length === size) chunks.push([item]);
		else lastChunk.push(item);
	}

	return console.log(chunks);
};

const arr = [7691, 9831, 8489, 6769, 7953, 1153, 1641, 53, 4388, 5321, 8303, 495, 9396, 6532, 8944, 2966, 3321, 4357, 583, 9846, 2864, 5949, 1572, 8832, 4117, 7829, 8045, 7884, 1447, 3478, 818, 4402, 8917, 1234, 4352, 416, 3152, 5532, 5169, 7486, 3085, 7468, 9975, 9388, 323, 4284, 4894, 8559, 6481, 2170, 478, 2875, 7946, 4524, 5653, 167, 2240, 1170, 4648, 425, 2205, 5512, 6553, 5395, 3848, 966, 2409, 1497, 8837, 409, 7294, 5145, 931, 5649, 6349, 3838, 1151, 1594, 6941, 7367, 2684, 8261, 2222, 4502, 1605, 608, 9168, 577, 3045, 3240, 6955, 3273, 5828, 2421, 3262, 8284, 8956, 5393, 5545, 974, 1180, 1946, 4162, 1832, 3426, 7045, 951, 7035, 249, 6932, 3944, 9409, 5650, 4006, 6643, 1487, 6364, 814, 2931, 8207, 6259, 5950, 5304, 4200, 6744, 3868, 7828, 1006, 611, 6755, 7861, 7106, 6582, 2314, 1794, 4766, 6873, 3527, 3867, 8998, 4486, 7762, 8932, 6850, 5875, 3565, 9741, 1013, 1387, 2327, 4791, 1231, 3935, 9621, 8924, 4668, 7578, 9460, 6164, 1402, 9559];

chunkArray(arr, 9);
