// fn prend en premier argument un callback
// fn(function callback(error, result){ ... }, arg1, arg2);
export function promisify(fn) {
  // TODO: retourner une fonction appelant fn mais
  // retournant une Promise au lieu de passer un callback
  return (...args) =>
    new Promise((resolve, reject) => {
      let callback = (err, result) => (err ? reject(err) : resolve(result));
      return fn(callback, ...args);
    });
}

// exemple d'utilisation
const wait = promisify(setTimeout);
wait(1000)
  .then(() => console.log("1") && wait(1000))
  .then(() => console.log("2") && wait(1000))
  .then(() => console.log("3"));
