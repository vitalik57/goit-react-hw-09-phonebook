import React, { Component, useEffect, useState } from "react";
import ClientList from "../clientList/ClientList";
import ClientsForm from "../clientsForm/ClientsForm";
import Filter from "../filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { ClientStyled } from "./ClientStyled";
import { getFilter, getFilterClients } from "../../redux/clients/filterReducer/filterSelector";
import { getAllItems, getError, getLoader } from "../../redux/clients/clientsReducer/clientsSelector";
import {
  addALLClientsOperations,
  addClientOperation,
  deleteClientOperation
} from "../../redux/clients/clientsReducer/clientsOperations";
import doFilterOperations from "../../redux/clients/filterReducer/filterOperations";

const Clients = () => {
  const dispatch = useDispatch();

  // const items = useSelector(getFilterClients);

  const contacts = useSelector(getAllItems);
  const loader = useSelector(getLoader);
  const error = useSelector(getError);
  const addClient = async client => {
    dispatch(addClientOperation(client));
  };
  const deleteClient = async e => {
    let { id } = e.target;
    dispatch(deleteClientOperation(id));
  };
  useEffect(
    () => {
      dispatch(addALLClientsOperations());
    },
    [dispatch]
  );
  const doFilter = e => {
    const { value } = e.target;
    dispatch(doFilterOperations(value));
  };

  const onCheckRepeated = name => {
    return contacts.some(contact => contact.name === name);
    // return contacts.items.some(contact => contact.name === name);
  };

  return (
    <>
      {error && <h2>{error}</h2>}
      {loader && <h2>Loading....</h2>}
      <ClientStyled>Phonebook</ClientStyled>
      {/* <ClientsForm addClient={addClient} onCheckRepeated={onCheckRepeated} /> */}

      <Filter doFilter={doFilter} filter={contacts.filter} />
      <h2>Contacts:</h2>
      <ClientList clients={contacts} deleteClient={deleteClient} />
    </>
  );
};

export default Clients;
// class Clients extends Component {
//   // state = {
//   //   contacts: [],
//   //   filter: "",
//   // };

//   async componentDidMount() {
//     this.props.addALLClientsOperations();
//     // try {
//     //   const response = await axios.get(
//     //     `https://shop-a2177-default-rtdb.firebaseio.com/clients.json`
//     //   );
//     //   if (response.data) {
//     //     const contactsObj = Object.keys(response.data).map((key) => ({
//     //       ...response.data[key],
//     //       id: key,
//     //     }));
//     //     console.log(contactsObj);
//     //     this.props.addALLClients(contactsObj);
//     //     // this.setState({ contacts: contactsObj });
//     //   } else return;
//     // } catch (error) {}
//   }

//   addClient = async (client) => {
//     this.props.addClientOperation(client);
//     // try {
//     //   const response = await axios.post(
//     //     `https://shop-a2177-default-rtdb.firebaseio.com/clients.json`,
//     //     client
//     //   );
//     //   this.props.addClient({ ...client, id: response.data.name });
//     //   // this.setState((prevState) => ({
//     //   //   contacts: [
//     //   //     ...prevState.contacts,
//     //   //     { ...client, id: response.data.name },
//     //   //   ],
//     //   // }));
//     // } catch (error) {}
//   };

//   deleteClient = async (e) => {
//     let { id } = e.target;
//     this.props.deleteClientOperation(id);
//     // try {
//     //   let { id } = e.target;
//     //   await axios.delete(
//     //     `https://shop-a2177-default-rtdb.firebaseio.com/clients/${id}.json`
//     //   );
//     //   this.props.deleteClient(id);
//     //   // this.setState({
//     //   //   contacts: this.state.contacts.filter((el) => el.id !== id),
//     //   // });
//     // } catch (error) {}
//   };

//   // getFilter = () => {
//   //   return this.props.contacts.items?.filter((contact) =>
//   //     contact.name
//   //       .toLowerCase()
//   //       .includes(this.props.contacts.filter?.toLowerCase())
//   //   );
//   // };

//   doFilter = (e) => {
//     const { value } = e.target;
//     this.props.doFilterOperations(value);
//     // this.setState({ filter: value });
//   };

//   onCheckRepeated = (name) => {
//     return this.props.contacts.items.some((contact) => contact.name === name);
//   };

//   render() {
//     console.log(this.props.contacts);
//     return (
//       <>
//         {this.props.error && <h2>{this.props.error}</h2>}
//         {this.props.loader && <h2>Loading....</h2>}
//         <ClientStyled>Phonebook</ClientStyled>
//         <ClientsForm
//           addClient={this.addClient}
//           onCheckRepeated={this.onCheckRepeated}
//         />

//         <Filter doFilter={this.doFilter} filter={this.props.contacts.filter} />
//         <h2>Contacts:</h2>
//         <ClientList
//           clients={this.props.contacts.items}
//           deleteClient={this.deleteClient}
//         />
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: {
//     items: getFilterClients(state),
//     filter: getFilter(state),
//     loader: getLoader(state),
//   },
// });

// const mapDispatchToProps = {
//   addALLClientsOperations,
//   addClientOperation,
//   deleteClientOperation,
//   doFilterOperations,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Clients);
