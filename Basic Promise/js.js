const firstWord = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("hello");
    }, 1000);
  });
  console.log("world");
};
firstWord();
