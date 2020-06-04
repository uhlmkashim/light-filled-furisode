/**
 * PexオプションのpartialDrawを端末ごとに取得する
 */
function getPexPartialDraw(ua) {
	if (typeof ua === 'undefined') {
		ua = navigator.userAgent;
	}

	// Chrome57以上、またはChromeAppではPexのpartialDrawを利用しない
	var chromeMatch = ua.match(/Chrome\/(\d+)\./)
	if (chromeMatch && parseInt(chromeMatch[1]) >= 57) {
		return false;
	}
	if (ua.match(/; ChromeApp/)) {
		return false;
	}

	var targets = [
		'F-04G',
		'HTV31',
		'SO-03G',
		];

	return !(new RegExp(targets.join('|'), 'i')).test(ua);
}
