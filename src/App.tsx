import React from "react";
import Form from "./todo/Form"; 
import TaskList from "./todo/TaskList";

const App: React.FC = () => {  
  
  return (
    <>
      <Form />
      <TaskList></TaskList>
    </>
  );
};

export default App;
