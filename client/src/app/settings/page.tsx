"use client";
import React from "react";
import { useState } from "react";
import Header from "../(components)/header/Header";

type UserSettings = {
    label: string,
    value: string | boolean,
    type: "text" | "toggle"
}

const mokSettings:UserSettings[] =[
{label: "User Name", value: "John_Doe", type: "text"},
{label: "Email", value: "john.doe@example.com", type: "text"},
{label: "Notification", value: true, type: "toggle"},
{label: "Dark Mode", value: false, type: "toggle"},
{label: "Language", value: "English", type: "text"},
];

const SettingsPage = () => {
const[userSettings, setUserSettings]=useState<UserSettings[]>(mokSettings);

const handleToggleChange = (index:number)=> {
const copySettings = [...userSettings];
copySettings[index].value=!copySettings[index].value as boolean;
setUserSettings(copySettings);
}

    return (
        <div className="min-w-full">
            <Header name="User Settings"></Header>
            <div className="overflow-x-auto mt-5 shadow-md">
                <table className="bg-white min-w-full rounded-ld">
                    <thead className="bg-gray-700 text-white">
                        <tr>
                            <th className="text-left py-3 uppercase text-semibold text-sm">
                                settings
                            </th>
                            <th className="text-left py-3 uppercase text-semibold text-sm">
                                value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSettings.map((setting, index)=> {
                            return (<tr key={setting.label} className="hover:bg-blue-50">
                                <td className="py-2 px-4">{setting.label}</td>
                                <td className="py-2 px-4">{setting.type === "toggle" ? (
                                    <label className="relative cursor-pointer inline-flex items-center">
                                        <input type="checkbox" className="sr-only peer" 
                                        checked={setting.value as boolean} onChange={handleToggleChange}></input>
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-400 peer-focus:ring-4 
                                            transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                                            after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                                            peer-checked:bg-blue-600"
                      ></div>
                                    </label>
                                ):(
                                <input type="text" className="py-2 px-4 border rounded-lg text-gray-500 
                                focus:outline-none focus:border-blue-500" value={setting.value as string}
                                 onChange={(e)=>{
                                    const copySettings=[...userSettings];
                                    copySettings[index].value=e.target.value;
                                    setUserSettings(copySettings);
                                }}></input>
                                )}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default SettingsPage;