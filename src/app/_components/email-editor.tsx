"use client"

import { useState, useEffect } from "react";
import { modules, formats } from "@/data/react-quill";

import type { RouterOutputs } from "@/trpc/shared";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Checkbox } from "@/app/_components/ui/checkbox"
import { Label } from "@/app/_components/ui/label"
import { Input } from "@/app/_components/ui/input"


const EmailEditor = () => {

    const [content, setContent] = useState("");
    const [rawText, setRawText] = useState("");
    const [subject, setSubject] = useState("");
    const [quickResponseSettings, setQuickResponseSettings] = useState(false);

    const handleContentChange = (content: string) => {
        setContent(content);
        const plainText = content.replace(/<[^>]*>/g, "");
        setRawText(plainText);
    };

    const handleSubjectChange = (subject: string) => {
        setSubject(subject);
    }

    const handleQuickResponseSettingsChange = (checked: boolean) => {
        setQuickResponseSettings(checked);
        console.log(checked);
    }

    const handleSendEmail = () => {
        console.log("Sending email...");
    }

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
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                    onClick={handleSendEmail}
                >
                    Send
                </button>
            </div>
        </div >
    )
}

export default EmailEditor;