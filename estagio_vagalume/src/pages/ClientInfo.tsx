import React, { useContext ,useEffect,useState } from "react";
import {useParams } from "react-router";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import api from "../services/api";
import LineChart from '../components/LineChart'
import Sidebar from "../components/Sidebar";
import '../styles/menu.scss'

type ClientIdParams={
  id:string;
  name:string
}

function ClientInfo() {
  const params = useParams<ClientIdParams>()
  const clientNAME= params.name;
  const clientID = Number.parseInt(params.id)
  const { authData } = useContext(AuthenticationContext);
  const [clientData, setClientData] = useState<any[]>([]);

  async function getClientData() {
    const { data } = await api.get(`/get_client_data/${clientID}`, {
      headers: {
        Authorization: authData?.token,
      },
    });
    setClientData(data.data);
    console.log(clientData);
  }

  useEffect(() => {
    if (authData) {
      getClientData();   
    } //eslint-disable-next-line
  }, [authData]);

  return (
    <div className="menu-page d-flex">
      <Sidebar></Sidebar>
      <main className="shadow-md">
        <div className="clients-div d-flex flex-column justify-content-start">
          <header>
            <h1>{clientNAME}</h1>
          </header>
          <div className="chart-div">
             {clientData.length>0?<LineChart clientData={clientData}/>:
             <div className="spinner-border" style={{'width': '3rem', 'height': '3rem'}} role="status">
             <span className="visually-hidden">Loading...</span>
             </div>
             } 
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientInfo;
