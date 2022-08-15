
import './App.css';
import {CounterApp } from './components/CounterApp';
import { CounterWithCustomHook } from './components/CounterWithCustomHook';
import { SimpleForm } from './components/SimpleForm';
import { FormWithCustomHook } from './components/FormWithCustomHook';
import { MultipleCustomHooks } from './components/MultipleCustomHooks';
import { FocusScreen } from './components/FocusScreen';
import { Layout } from './components/Layout';
import { Memorize } from './components/Memorize';
import { MemorizeHook  } from './components/MemorizeHook';
import { CallbackHook } from './components/useCallback/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/useReducer/TodoApp';
function App() {
  return <>
   {/* <CounterApp />
   <CounterWithCustomHook />
   <SimpleForm />
   <FormWithCustomHook /> */}
   {/* <MultipleCustomHooks />
   <FocusScreen /> */}
   <TodoApp />
  </>
}

export default App;
