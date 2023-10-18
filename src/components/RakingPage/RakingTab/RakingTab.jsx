import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import WalletNotConnected from 'public/assets/icons/wallet-not-connected';
import { useState } from 'react';
import RakingTable from '../RakingTable/RakingTable';

const RakingTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs value={data[activeTab].value} onChange={setActiveTab}>
      <TabsHeader>
        {data.map(({ label, value }, index) => (
          <Tab
            key={value}
            value={value}
            className="py-12"
            // style={{ borderBottom: activeTab === index ? '3px solid #b780ff8c' : 'none' }}
            >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        style={{
          border: '3px solid #b780ff8c',
          borderTop: 'none',
          backgroundColor: '#b780ff14',
          borderEndEndRadius: '40px',
          borderBottomLeftRadius: '40px',
        }}
      >
          <TabPanel
            key={"All collections"}
            value={"All collections"}
            className=""
            style={{ height: 'fit-content' }}
          >
            <RakingTable />
          </TabPanel>
          <TabPanel
            key={"My watchlist"}
            value={"My watchlist"}
            className="flex items-center justify-center"
            style={{ height: 'fit-content' }}
          >
            <WalletNotConnected width="72" height="72" />
            <div className="nato-fontfamily font-black text-2xl" style={{ marginLeft: '32px', lineHeight: '28.8px' }}>
              My watchlist
            </div>
          </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default RakingTab;
