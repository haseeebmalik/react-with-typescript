// import {Greet} from "./components/Great";
// import {Person} from './components/Person';
// import {PersonList} from "./components/PersonList";
// import {TestComp} from './components/TestComp'
// import {Status} from "./components/status"
// import {Heading} from "./components/Heading"
// import {Oscar} from './components/Oscar'
// import {Button} from './components/Button'
// import {Input} from './components/Input'
// import {Container} from './components/Container'
// import {ThemeContextProvider} from './components/useContext/ThemeContext'
// import {Box} from './components/useContext/Box'
// import {User} from './components/useContext/useContextFutureValue/User'
// import {UserContextProvider} from './components/useContext/useContextFutureValue/userContext'
// import {MutableRef} from './components/refHook/MutableRef'
import {Private} from './components/passingComponentAsProps/Private'
import {Profile} from './components/passingComponentAsProps/Profile'
import './App.css';

function App() {
  // const personName={
  //   first:'Bruce',
  //   last:'Wayne'
  // }
  // const nameList=[
  //   {
  //     first:'Bruce',
  //     last:'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last:'Kent'
  //   },
  //   {
  //     first:'Princess',
  //     last:'Diana'
  //   }
  // ]
  // const stringNames=[
  //   "abc",
  //   "mmmmm"
  // ]
  return (
    <div className="App">
     {/* <Greet name="haseeb" messageCount={20} isLoggedIn={false}/>
     <Person name={personName}/>
     <PersonList names={nameList}/>
     <TestComp stringNames={stringNames}/>
     <Status status='loading'/> */}
     {/* <Heading>Placeholder text</Heading> */}
     {/* <Oscar><Heading>Oscar goes to Leonardo Dicpario !</Heading></Oscar> */}
    {/* <Button handleClick={(event,id)=>{
      console.log("Button Clicked",event,id)
    }}/> */}
    {/* <Input value='' handleChange={(event)=>console.log("event",event)}/> */}
    {/* <Container styles={{border:'1px solid black',padding:'1rem'}}/> */}
    {/* <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider> */}
    {/* <UserContextProvider>
      <User/>
    </UserContextProvider> */}
    {/* <MutableRef/> */}
    <Private isLoggedIn={true} component={Profile}/>
    </div>
  );
}

export default App;
