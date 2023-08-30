      const randomInRange = (min, max) => {
        return Math.random() * (max - min) + min;
      };

      let randomTime = Math.floor(randomInRange(1, 6));

      let promiseArray = [
        new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve();
          }, randomTime);
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve();
          }, randomTime);
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve();
          }, randomTime);
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve();
          }, randomTime);
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve();
          }, randomTime);
        }),
      ];

      Promise.any(promiseArray).then((data) => {
        document.getElementById("output").innerText = data;
      })

window.promises = [promiseArray];

// Do not change the code above this
// add your promises to the array `promises`
