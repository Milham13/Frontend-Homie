import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import dashboard from "../assets/dashboard-4.png";
import SidebarAdmin from '../components/admin/SidebarAdmin';
import NavbarA from '../components/admin/NavbarA';
import OrdersChart from '../components/admin/OrderChart';
import RevenueChart from '../components/admin/RevenueChart';
import DailyOrdersChart from '../components/admin/DailyOrdersChart';

const Hadmin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "f0b05211-c2c4-4d36-9abc-6aa9bc538957",
      region: "us-south",
      serviceInstanceID: "0e5ab3b6-a874-4f1b-a1f6-cfc2ab6c051a",
      onLoad: async (instance) => { await instance.render(); }
    };
    setTimeout(function(){
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);

    axios.get('http://localhost:4000/getPesanan')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <SidebarAdmin />
      <NavbarA />
      <div className="ml-64 p-6">
        <img className='w-[950px] pt-11' src={dashboard} alt="Dashboard" />
        <div className="mt-10">
          <OrdersChart data={data} />
        </div>
        {/* <div className="mt-10">
          <RevenueChart />
        </div> */}
        <div className="mt-10">
          <DailyOrdersChart />
        </div>
      </div>
    </div>
  );
};

export default Hadmin;