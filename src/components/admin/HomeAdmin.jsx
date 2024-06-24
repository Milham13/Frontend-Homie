import React, { useEffect } from 'react';
import SidebarAdmin from './SidebarAdmin'
import Dashboard from './Dashboard'
import NavbarA from './NavbarA';

function HomeAdmin() {

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
      }, []);

  return (
    <div className='flex'>
      <SidebarAdmin/>
      
      <Dashboard/>
      
    </div>
  )
}

export default HomeAdmin
