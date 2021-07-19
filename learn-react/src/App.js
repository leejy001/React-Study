import Class from "./class_component_ex/Class";
import Func from "./func_component_ex/Func";
import EventClass from "./class_event_practice_ex/Event";
import EventFunc from "./func_event_practice_ex/Event";
import Ref from "./class_ref_ex/Ref";
import Example from "./Example/Example";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Class />
      <Func />
      <EventClass />
      <EventFunc />
      <Ref />
      <Example />
    </div>
  );
}

export default App;
