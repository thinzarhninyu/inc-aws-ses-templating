"use client";
import { useState, useEffect } from "react";

import { modules, formats } from "@/data/react-quill";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Checkbox } from "@/app/_components/ui/checkbox"
import { Label } from "@/app/_components/ui/label"
import { Input } from "@/app/_components/ui/input"
import SendEmailButton from "@/app/_components/send-email-button";

  const handleSelectOrganisation =(organisationID:string)=>{
    setOrganisationID(organisationID);
  }

  const handleContentChange = (content: string) => {
    setContent(content);
    const plainText = content.replace(/<[^>]*>/g, "");
    setRawText(plainText);
  };

    const senderId = "clr5u3jt5000013gqb09tipy8";
    const recipientsId = ["clr5u7e9x000113gqs5819787", "clr5uabbu000313gquiod17xd"];

    const handleContentChange = (content: string) => {
        setContent(content);
        const plainText = content.replace(/<[^>]*>/g, "");
        setRawText(plainText);
    };

  const handleSubjectChange = (subject: string) => {
    setSubject(subject);
  };

  const handleQuickResponseSettingsChange = (checked: boolean) => {
    setQuickResponseSettings(checked);
  };

    return (
        <div className="w-1/2">
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Subject
                </label>
                <Input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(event) => handleSubjectChange(event.target.value)}
                    className="w-full shadow-md h-10 px-2 mt-5"
                />
            </div>
            <div className="shadow-md overflow-y-auto h-64 mt-5">
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={content}
                    placeholder="Add email content here..."
                    onChange={handleContentChange}
                    style={{ height: "100%" }}
                />
            </div>
            <div className="mt-5">
                <Checkbox
                    checked={quickResponseSettings}
                    onCheckedChange={(event) => handleQuickResponseSettingsChange(event as boolean)}
                />
                <Label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Allow Quick Response
                </Label>
            </div>
            <div>
                <SendEmailButton senderId={senderId} subject={subject} content={content} recipientsId={recipientsId} quickResponseSettings={quickResponseSettings} />
            </div>
        </div >
    )
}

export default EmailEditor;
