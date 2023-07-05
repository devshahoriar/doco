import { TbTruckDelivery } from 'react-icons/tb'
import InnerPageLayout from '../components/layout/InnerPageLayout'
import InnerpageRight from '../components/layout/InnerpageRight'
import PageLayout from '../components/layout/PageLayout'
import PagesHeader from '../components/shared/PagesHeader'
import InnerPageLeftScroller from '../components/shared/innerPageElement/InnerPageLeftScroller'
import InnerPagetop from '../components/shared/innerPageElement/InnerPagetop'
import Divider from '../components/shared/Divider'
import { useState } from 'react'
import InnerPageControllerBar from '../components/shared/innerPageElement/InnerPageControllerBar'
import InnerPageSearchBar from '../components/shared/innerPageElement/InnerPageSearchBar'
import InnerPageButtonGroup from '../components/shared/innerPageElement/InnerPageButtonGroup'
import SelectButton from '../components/shared/buttons/SelectButton'
import InnerSquereSearchBtn from '../components/shared/innerPageElement/InnerSquereSearchBtn'
import InnerPageItemScroller from '../components/shared/innerPageElement/InnerPageItemScroller'
import FleetItemUser from '../components/shared/forPage/forFleetPage/FleetItemUser'
import { useEffect } from 'react'
import updateTitle from '../utils/updateTitle'
import { UserDetails } from '../components/shared/forPage/forFlitPage/FletPageElement'
import InnerPageTabs from '../components/shared/innerPageElement/InnerPageTabs'
import SelectTabButton from '../components/shared/innerPageElement/SelectTabButton'

const FleetUsers = () => {
  const [sharchShow, setSharchShow] = useState(false)
  const [tab, setTab] = useState('sales performance')

  useEffect(() => {
    updateTitle('My Doco | Fleet Users')
  }, [])

  return (
    <PageLayout>
      <PagesHeader title="Home" subtitle="FLEET USERS" />
      <InnerPageLayout>
        <InnerpageRight>
          <InnerPagetop
            icon={<TbTruckDelivery />}
            title="Fleet Users: 18"
            btnOnClick={() => alert('add')}
            btnTitle="Add User"
          />
          <Divider className="mt-3" />

          <InnerPageControllerBar>
            {sharchShow ? (
              <InnerPageSearchBar
                set={setSharchShow}
                placeHolder="Search Retailars"
              />
            ) : (
              <>
                <InnerPageButtonGroup>
                  <SelectButton title="All" selected />
                  <SelectButton title="Active" />
                  <SelectButton title="Blocked" />
                </InnerPageButtonGroup>
                <InnerSquereSearchBtn
                  btnOnClick={() => setSharchShow((p) => !p)}
                />
              </>
            )}
          </InnerPageControllerBar>

          <InnerPageItemScroller>
            <FleetItemUser />
            <FleetItemUser />
            <FleetItemUser />
            <FleetItemUser />
          </InnerPageItemScroller>
        </InnerpageRight>
        <InnerPageLeftScroller>
          <div className="m-3">
            <UserDetails />
            
          </div>
          <div className='mx-3 mt-5'>
          <InnerPageTabs
          // action={}
          >
              <SelectTabButton
                state={tab}
                title="Sales Performance"
                set={setTab}
              />
              <SelectTabButton state={tab} title="Order History" set={setTab} />
            </InnerPageTabs>
          </div>
        </InnerPageLeftScroller>
      </InnerPageLayout>
    </PageLayout>
  )
}

export default FleetUsers
