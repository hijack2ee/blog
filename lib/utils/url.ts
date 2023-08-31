export const concat = (...args: string[]) =>
  decodeURIComponent(
    [...args].reduce(
      (prv, cur) =>
        cur
          ? `${prv.replaceAll(/\/{0,}$/g, "")}/${cur.replaceAll(
              /\/{0,}$/g,
              ""
            )}`
          : prv,
      ""
    )
  );
