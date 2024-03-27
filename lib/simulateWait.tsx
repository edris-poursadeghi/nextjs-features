export const simulateWait = async (x: number) => {
  // Simulate a delay of X
  await new Promise((resolve) => setTimeout(resolve, x));
};
