import useCounter from "./hooks/use-counter";
const App = () => {
  const [timeLeft] = useCounter({
    year: 2022, //fullYear
    month: 5, //1-12
    hours: 0,  //0-24
    day: 28, //1-30||31
    minutes: 0, 
    seconds: 0,
  });
  return <div>{JSON.stringify(timeLeft)}</div>;
};

export default App;
