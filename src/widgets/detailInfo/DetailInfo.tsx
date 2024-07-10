import { TabList } from "features"
import { AboutCard, RatesConditions } from "widgets";
import { Tab } from "shared/ui"

import "./DetailInfo.scss";


export const DetailInfo = () => {
    return (
        <section className="detail-info">
            <TabList activeTabIndex={0}>
                <Tab label="Аbout card">
                    <AboutCard />
                </Tab>
                <Tab label="Rates and conditions">
                    <RatesConditions />
                </Tab>
                <Tab label="Cashback">
                    <p>cashback</p>
                </Tab>
                <Tab label="FAQ">
                    <p>faq</p>
                </Tab>
            </TabList>
        </section>
    )
}