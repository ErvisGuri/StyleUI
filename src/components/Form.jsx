import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";

const FormInput = ({ breakdown, inputText, setInputText, setBreakdown }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const addNewBreakdown = (e) => {
    console.log("hey");
    e.preventDefault();
    setBreakdown([
      ...breakdown,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <>
      <div className="input">
        <Input
          onChange={inputTextHandler}
          className="input-ant"
          type="text"
          placeholder=" test shed 1"
        />
        <Input className="input-ant" type="number" placeholder=" 25" />
        <div className="background-icon">
          <FontAwesomeIcon className="trash" icon={faTrash} />
        </div>
      </div>
    </>
  );
};

export default FormInput;
