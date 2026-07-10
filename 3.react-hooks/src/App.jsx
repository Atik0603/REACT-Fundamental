import TwoButton from './exercise/twobutton.jsx'
import FocusInput from './exercise/focusinput.jsx'

import ThemeProvider from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

import useTimer from "./exercise/useTimer";



function App() {

   const time = useTimer();
  return (
    <div>
      <TwoButton />
      <FocusInput />
      <p>Current Time: {time}</p>
      <ThemeProvider>
       <ThemeDisplay />
      </ThemeProvider>
    </div>
  );
}

export default App;