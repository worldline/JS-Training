// fn prend en premier argument un callback
// fn(function callback(error, result){ ... }, arg1, arg2);
export function promisify(fn) {
  // TODO: retourner une fonction appelant fn mais
  // retournant une Promise au lieu de passer un callback
  // return new Promise((error, result) => fn(result));
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(function callback(error, result) {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }, ...args);
    });
  };
}

// exemple d'utilisation
const wait = promisify(setTimeout);
wait(10)
  .then(() => {
    console.log("1");
    return wait(10);
  })
  .then(() => {
    console.log("2");
    return wait(10);
  })
  .then(() => {
    console.log("3");
  });
