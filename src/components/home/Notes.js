const Work = () => (
  <Tabs defaultActiveKey="1" tabPosition="left">
    <TabPane tab="Blue Raven Solar" key="1">
      <Experience 
        title="Project Management Team Lead" 
        start="April 2021"
        end="October 2022"
        para="Promoted after 1 year to lead the installation project management team of 14 individuals. Lowered team turnover to 0% over a 4-month period by increasing training and morale. Increased team production by 20% in first four months as its lead."
      />        
    </TabPane>
    <TabPane tab="Façade Games" key="2">
      <Experience 
        title="Data Analyst" 
        start="December 2020"
        end="April 2021"
        para="25% increase in 4 products’ completion by gathering and testing data. Created scripts to analyze company procurement and production costs. Generated 3 production quotes from international sources."
      />        
    </TabPane>
    <TabPane tab="TaxHawk" key="3">
      <Experience 
        title="Customer Support Specialist" 
        start="December 2020"
        end="April 2021"
        para="Addressed over 13,000 client support tickets. Regularly maintained 4 active chats resolving escalated client concerns. Achieved highest performance statistics 15 weeks in a row."
      />
    </TabPane>
    <TabPane tab="Mint Solar" key="4">
      <Experience 
        title="Sr. Account Manager" 
        start="May 2018"
        end="March 2020"
        para="Analyzed Salesforce company data and compiled weekly KPI reports. Trained and coordinated a team of 4 account managers. Managed over 500 customer accounts across several unique markets."
      />
    </TabPane>
  </Tabs>
)

export default Work;