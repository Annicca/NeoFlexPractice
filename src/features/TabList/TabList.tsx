import React, { useMemo, useState } from "react";
import { ReactElement } from "react";
import { TTab } from "shared/types";
import { Button, List, ListItem, Tab } from "shared/ui";
import { lib } from "shared/lib";

export interface TTabListProps {
    activeTabIndex: number;
    children: ReactElement<TTab> | ReactElement<TTab>[];
}

export const TabList: React.FC<TTabListProps> = ({ children, activeTabIndex = 0 }) => {
    const [activeTab, setActiveTab] = useState(activeTabIndex);

    const handleTabClick = (index: number) => {
      setActiveTab(index);
    };

    const tabs = useMemo(() => React.Children.toArray(children).filter(
        (child): child is ReactElement<TTab> =>
          React.isValidElement(child) && child.type === Tab
    ), [children]);

    return (
        <div className="tabs">
          <nav className="tab-list-wrapper">
            <List 
                className="tab-list"
                items={tabs}
                renderItem={(tab, index) => (
                    <ListItem key={`tab-${index}`}>
                        <Button
                            key={`tab-btn-${index}`}
                            mode="clear"
                            id={`tab-${lib.removeWhiteSpace(tab.props.label)}`}
                            aria-controls={`panel-${lib.removeWhiteSpace(tab.props.label)}`}
                            aria-selected={activeTab === index}
                            onClick={() => handleTabClick(index)}
                            className={`tab-btn ${
                                activeTab === index && "tab-btn__active"
                            }`}
                        >
                            {tab.props.label}
                        </Button>
                    </ListItem>
                )}
            />
          </nav>
          {tabs[activeTab]}
        </div>
      );
};