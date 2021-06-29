import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import '../styles/menu.scss'

function Menu() {
  const history = useHistory();
  const { authData } = useContext(AuthenticationContext);
  const [clientsList, setClientsList] = useState<any[]>([]);

  async function getClients() {
    const { data } = await api.get("/get_clients", {
      headers: {
        Authorization: authData?.token,
      },
    });
    console.log(data.clients);
    setClientsList(data.clients);
  }

  useEffect(() => {
    if (authData) {
      getClients();
    } //eslint-disable-next-line
  }, [authData]);

  function redirectToClient(id: number,name:string) {
    history.push(`clientInfo/${name}/${id}`);
  }

  return (
    <div className="menu-page d-flex">
      <Sidebar></Sidebar>
      <main className="shadow-md">
        <div className="clients-div d-flex flex-column justify-content-start">
          <header>
            <h1>Visão Geral</h1>
          </header>
          <div className="clients-list">
            <ul className="list-group">
              {clientsList ? (
                clientsList.map((element) => (
                  <li key={element.id}>
                    <button 
                    type="button" className="list-group-item list-group-item-action"
                      onClick={() => {
                        redirectToClient(element.id,element.name);
                      }}
                    >
                      {element.name}
                    </button>
                  </li>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Menu;
