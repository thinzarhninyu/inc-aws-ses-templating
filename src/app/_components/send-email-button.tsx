import { api } from "@/trpc/server";

const SendEmailButton = ({
    senderId,
    subject,
    content,
    recipientsId,
    quickResponseSettings
}: {
    senderId: string;
    subject: string;
    content: string;
    recipientsId: string[];
    quickResponseSettings: boolean;
}) => {
    const handleSendEmail = async () => {
        "use server";
        console.log("Sending email...");
        try {
            await api.email.sendEmail.mutate({ senderId: senderId, subject: subject, content: content, recipientsId: recipientsId, quickResponseSettings });
            console.log("Email sent successfully");
        } catch (err) {
            console.error("Error sending email");
        }
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={handleSendEmail}
        >
            Send
        </button>
    )
}

export default SendEmailButton;