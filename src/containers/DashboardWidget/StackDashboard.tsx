import Icon from "../../assets/customfield.svg";
import React, { useEffect, useState } from 'react';
import localeTexts from "../../common/locales/en-us/index";
import parse from "html-react-parser";
import ContentstackAppSDK from "@contentstack/app-sdk";
import { useCustomField } from "../../common/hooks/useCustomField";
import { Paragraph } from "@contentstack/venus-components";
import '@contentstack/venus-components/build/main.css';
import { isEmpty } from "lodash";


const getContentTypeData = async (stack: any, uid: string) => {
    const b = await stack.getContentType(uid)
    return await b;
}

const StackDashboardExtension = () => {
    const [stack, setStack] = useState<any>({});
    const [entries, setEntries] = useState<any[]>();

    ContentstackAppSDK.init().then(async (appSDK: any) => {
        // Get SidebarWidget object
        // this is only initialized on the Entry edit page.
        // on other locations this will return undefined.
        var dashboardWidget = await appSDK.location.DashboardWidget;
        setStack(appSDK.stack);

        // // fetch app configuration
        // var appConfig = await appSDK.getConfig();

        // // fetch stack information
        // var stackData = await stack.getData();
        // var envs = await stack.getEnvironments();
        var conTypes = await stack.getContentTypes();
        var conTypeEntries: any[] = [];
        // console.log(conTypes);
        conTypes.content_types.forEach((conType: any) => {
            const b = getContentTypeData(stack, conType.uid);
            console.log(b)
        })
    });


    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <Paragraph text={`Hi`} />
                {entries?.map((entry) => (
                    <p>hello</p>
                ))}
            </div>
        </div>
    );
};

export default StackDashboardExtension;