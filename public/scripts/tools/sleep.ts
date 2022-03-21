async function sleep(time: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, time));

}

export { sleep }