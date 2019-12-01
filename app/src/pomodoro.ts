type Checkmarks = 0 | 1 | 2 | 3 | 4;

export function incrementCheckmarks(
  checkmarks: Checkmarks
): Checkmarks {
  if (checkmarks === 4) {
    throw new Error(
      "Can't increment checkmarks when you have 4"
    );
  }
  return (checkmarks + 1) as Checkmarks;
}
