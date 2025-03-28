const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved value!!');
    }, 3000);
  });
  
  // Let's create one promise and then resolve two different promises.
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved value by p2!!');
    }, 2000);
  });
  
  async function handlePromise() {
    console.log('Hi');
    const val = await p2;
    console.log('Hello There!');
    console.log(val);
  
    const val2 = await p1;
    console.log('Hello There! 2');
    console.log(val2);
  }
  
  handlePromise();
  