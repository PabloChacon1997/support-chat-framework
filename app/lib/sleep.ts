

export const sleep = (ns: number)  => {
  return new Promise((resolve) => setTimeout(resolve, ns))
}