/**
 * Main class
 */
export class Main {
	constructor() {}
	/**
	 * The International Standard Book Number (ISBN) is a unique identifying number given to each published book. ISBNs assigned after January 2007 are 13 digits long (ISBN-13), however books with 10-digit ISBNs are still in wide use.
	 * @param isbn Isbn number which can be 10 or 13 digits long
	 * @returns Invalid, valid or an Isbn 13 character number
	 */
	Isbn = (isbn: string) => {
		/**
		 * Contains an array of numbers that multiply Isbn10 numbers
		 */
		var isbn10 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		/**
		 * Contains an array of numbers that multiply Isbn13 numbers
		 */
		var isbn13 = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1];
		//Check correct length of 10 for Isbn10
		if (isbn.length == 10) {
			/**
			 * Stores the sum of product
			 */
			var sum = 0;
			// Iterating through each character
			for (var i = 0; i < isbn.length; i++) {
				// Checking if a character is character x
				if (isbn[i].toLowerCase() == "x") {
					sum += 10;
				} else {
					sum += isbn10[i] * Number(isbn[i]);
				}
			}
			// Check if the string is a valid Isbn 10 number
			if (sum % 11 == 0) {
				/**
				 * Stores new isbn that is returned
				 */
				isbn = "978" + isbn.substring(0, isbn.length - 1);
				/**
				 * Reset sum
				 */
				sum = 0;
				for (var i = 0; i < isbn.length; i++) {
					if (isbn[i].toLowerCase() == "x") {
						sum += 10;
					} else {
						sum += isbn13[i] * Number(isbn[i]);
					}
				}
				/**
				 * Check remainder
				 */
				var remainder = sum % 10;
				if (remainder == 0) {
					isbn += remainder;
				} else {
					var lastChar = 10 - remainder;
					isbn += lastChar;
				}
				return isbn;
			}
			return "Invalid";
		} else if (isbn.length == 13) {
			// Check valid Isbn13 number
			var sum = 0;
			// Iterating through each character of Isbn 13
			for (var i = 0; i < isbn.length; i++) {
				// Checking if a character is character x
				if (isbn[i].toLowerCase() == "x") {
					sum += 10;
				} else {
					sum += isbn13[i] * Number(isbn[i]);
				}
			}
			if (sum % 10 == 0) {
				return "Valid";
			}
			return "Invalid";
		}
		// Return invalid if the Isbn number is not 10 or 13 characters long
		return "Invalid";
	};
}
