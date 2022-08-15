
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (!description) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form>
        <input
          type="text"
          placehoder="Que Hay que hacer"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-primary mt-2"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
