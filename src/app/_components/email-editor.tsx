"use client"

import { useState, useEffect } from "react";
import { modules, formats } from "@/data/react-quill";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EmailEditor = () => {

    const [content, setContent] = useState("");
    const [rawText, setRawText] = useState("");

    const handleContentChange = (content: any) => {
        setContent(content);
        const plainText = content.replace(/<[^>]*>/g, "");
        setRawText(plainText);
    };

    return (
        <>
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
        </>
    )
}

export default EmailEditor;