const series: Array<number> = [
  123.34, 34134.67, 34564.132, 1232.8067, 3423143.76856, 785678.34,
];

const promise = async (): Promise<Array<number>> => {
  return series;
};

(async () => {
  const response = await promise();
  console.log(response);
})();
