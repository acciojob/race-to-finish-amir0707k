
        function getRandomTime(min, max) {
            return Math.random() * (max - min) + min;
        }

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function createRandomPromise() {
            return new Promise(resolve => {
                const randomTime = getRandomTime(1000, 5000); // Random time between 1 and 5 seconds
                setTimeout(() => {
                    resolve(`Promise resolved after ${randomTime} milliseconds`);
                }, randomTime);
            });
        }

        const promises = Array.from({ length: 5 }, createRandomPromise);

        Promise.any(promises)
            .then(result => {
                const outputDiv = document.getElementById('output');
                outputDiv.textContent = result;
            })
	window.promises = [promises];

// Do not change the code above this
// add your promises to the array `promises`
