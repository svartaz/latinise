export const replaceAll = (s: string, map: Array<any>) =>
  map.reduce((acc, [x, y]) => acc.replace(x, y), s)

export const zip = <A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]> =>
  as.map((a, i) => [a, bs[i]]);