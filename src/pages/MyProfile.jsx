import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import PagesHeader from '../components/shared/PagesHeader'
import InnerPageTabs from '../components/shared/innerPageElement/InnerPageTabs'
import SelectTabButton from '../components/shared/innerPageElement/SelectTabButton'
import TabPersonalInformation from '../components/shared/forPage/forMyProfile/TabPersonalInformation'
import TabBusinessInformation from '../components/shared/forPage/forMyProfile/TabBusinessInformation'
import TabBankingInformation from '../components/shared/forPage/forMyProfile/TabBankingInformation'
import TabUpiInformation from '../components/shared/forPage/forMyProfile/TabUpiInformation'
import { useEffect } from 'react'
import updateTitle from '../utils/updateTitle'


const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('personal information')

  useEffect(()=>{
    updateTitle("My Doco | My Profile")
  },[])

  return (
    <PageLayout>
      <PagesHeader subtitle="My Profile" title="Home" />
      <InnerPageTabs
        borderColor='border-primary'
        className="mt-12"
      >
        <SelectTabButton
          state={activeTab}
          title="Personal Information"
          set={setActiveTab}
          colorType='primary'
        />
        <SelectTabButton
          state={activeTab}
          title="Business Information"
          set={setActiveTab}
          colorType='primary'
        />
        {/* <SelectTabButton
          state={activeTab}
          title="Banking Information"
          set={setActiveTab}
          colorType='primary'
        />
        <SelectTabButton
          state={activeTab}
          title="UPI Information"
          set={setActiveTab}
          colorType='primary'
        /> */}
      </InnerPageTabs>
      <div className='mt-10' >
        {activeTab === 'personal information' && <TabPersonalInformation />}
        {activeTab === 'business information' && <TabBusinessInformation />}
        {/* {activeTab === 'banking information' && <TabBankingInformation />}
        {activeTab === 'upi information' && <TabUpiInformation />} */}
      </div>
    </PageLayout>
  )
}

export default MyProfile
