#!/usr/bin/env node

/**
 * translate
 * Command line translator application which fetchs the data from Libre translation API
 *
 * @author Keshava <https://github.com/k3shav17>
 */

import chalk from 'chalk';
import axios from 'axios';
import util from 'util';

const args = process.argv;

(async () => {
	const word = args[2];
	let res = null;

	try {
		res = await axios.get(`https://libretranslate.com/languages`);

		for (let i = 0; i < res.data.length - 1; i++) {
			console.log(chalk.green.bgBlack.bold(`${res.data[i].name}`));
		}
	} catch (err) {
		console.log(err);
	}
})();
