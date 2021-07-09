import React from "react";
import { useState } from "react";

import { ClientsFormStyled } from "./ClientsFormStyled";
import {
  // addALLClientsOperations,
  addClientOperation
  // deleteClientOperation
} from "../../redux/clients/clientsReducer/clientsOperations";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../redux/clients/clientsReducer/clientsSelector";
const initialState = { name: "", number: "" };

const ClientsForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const contacts = useSelector(getAllItems);

  // const [number, setNumber] = useState("");

  const changeInput = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };
  const addClient = async client => {
    dispatch(addClientOperation(client));
  };
  const onCheckRepeated = name => {
    return contacts.some(contact => contact.name === name);
    // return contacts.items.some(contact => contact.name === name);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (onCheckRepeated(state.name)) {
      alert(`${state.name} is already in contacts.`);
      return;
    }
    addClient(state);
  };
  return (
    <>
      <ClientsFormStyled onSubmit={onSubmit}>
        Name:
        <input
          onChange={changeInput}
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        Number:
        <input
          onChange={changeInput}
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit">Add</button>
      </ClientsFormStyled>
    </>
  );
};
export default ClientsForm;

// export default ClientsForm;
// class ClientsForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

// changeInput = (e) => {
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.props.onCheckRepeated(this.state.name)) {
//       alert(`${this.state.name} is already in contacts.`);
//       return;
//     }
//     this.props.addClient(this.state);
//   };

//   render() {
//     return (
//       <>
//         <ClientsFormStyled onSubmit={this.onSubmit}>
//           Name:
//           <input
//             onChange={this.changeInput}
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//           Number:
//           <input
//             onChange={this.changeInput}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//           <button type="submit">Add</button>
//         </ClientsFormStyled>
//       </>
//     );
//   }
// }

// export default ClientsForm;
