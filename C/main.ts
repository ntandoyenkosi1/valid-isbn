/**
 * Main class
 */
export class Main {
	constructor() {}
	Isbn = (isbn: string) => {
		var isbn10 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		var isbn13 = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1];
		if (isbn.length == 10) {
			var sum = 0;
			for (var i = 0; i < isbn.length; i++) {
				if (isbn[i].toLowerCase() == "x") {
					sum += 10;
				} else {
					sum += isbn10[i] * Number(isbn[i]);
				}
			}
			if (sum % 11 == 0) {
				var newIsbn = "978" + isbn.substring(0, isbn.length - 1);
				var newSum = 0; //can reuse sum and original isbn
				for (var i = 0; i < newIsbn.length; i++) {
					if (newIsbn[i].toLowerCase() == "x") {
						newSum += 10;
					} else {
						newSum += isbn13[i] * Number(newIsbn[i]);
					}
				}
				var remainder = newSum % 10;
				if (remainder == 0) {
					newIsbn += remainder;
				} else {
					var lastChar = 10 - remainder;
					newIsbn += lastChar;
				}
				return newIsbn;
			}
			return "Invalid";
		} else if (isbn.length == 13) {
			var sum = 0;
			for (var i = 0; i < isbn.length; i++) {
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
	};
}
