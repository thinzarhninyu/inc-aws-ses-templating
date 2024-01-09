"use client"

import { useState, useEffect } from "react";
import { modules, formats } from "@/data/react-quill";

import type { RouterOutputs } from "@/trpc/shared";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EmailEditor = () => {

    const [content, setContent] = useState("");
    const [rawText, setRawText] = useState("");
    const [subject, setSubject] = useState("");

    const handleContentChange = (content: string) => {
        setContent(content);
        const plainText = content.replace(/<[^>]*>/g, "");
        setRawText(plainText);
    };

    const handleSubjectChange = (subject: string) => {
        setSubject(subject);
    }

    const handleSendEmail = () => {
        console.log("Sending email...");
    }

    return (
        <>
            <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Subject
                </label>
                <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(event) => handleSubjectChange(event.target.value)}
                    className="w-full shadow-md h-10 px-2 mt-5"
                />
            </div>
            {/* <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    To
                </label>
                <select
                    value={email.to}
                    onChange={(event) => handleToChange(event.target.value)}
                    className="w-full shadow-md h-10 px-2 mt-5"
                >
                    <option value="" disabled>Select recipient</option>
                    <option value="consultants">Consultants</option>
                    <option value="hms">HMS</option>
                </select>
            </div> */}
            <div className="w-1/2 shadow-md overflow-y-auto h-64 mt-5">
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
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                onClick={handleSendEmail}
            >
                Send
            </button>
        </>
    )
}

export default EmailEditor;