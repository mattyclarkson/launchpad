var launch = require('../lib');

var browsers = ['opera', 'firefox', 'safari'];

launch.local(function (err, local) {
	// console.log(local.browsers);
	browsers.forEach(function (browser) {
		if (local[browser]) {
			local[browser]('http://ebay.ca', function (err, instance) {
				instance.on('stop', function (msg) {
					console.log('Local ' + browser + ' instance stopped', msg);
				});

				setTimeout(function () {
					instance.stop();
				}, 5000);
			});
		}
	});
});
