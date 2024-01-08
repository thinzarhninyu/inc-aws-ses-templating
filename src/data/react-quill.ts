const colors = ["yellow", "red", "blue", "green", "white"];

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: ["justify", "center", "right"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: colors }],
        [{ background: colors }],
    ],
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "color",
    "background",
    "align",
];

export { modules, formats };