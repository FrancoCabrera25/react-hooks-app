
import './App.css';
import {CounterApp } from './components/CounterApp';
import { CounterWithCustomHook } from './components/CounterWithCustomHook';
import { SimpleForm } from './components/SimpleForm';
import { FormWithCustomHook } from './components/FormWithCustomHook';
import { MultipleCustomHooks } from './components/MultipleCustomHooks';
function App() {
  return <>
   {/* <CounterApp />
   <CounterWithCustomHook />
   <SimpleForm />
   <FormWithCustomHook /> */}
   <MultipleCustomHooks />
  </>
}

export default App;
