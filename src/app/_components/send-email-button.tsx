import { api } from "@/trpc/react";
import { Button } from "@/app/_components/ui/button"

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

    const sendEmailMutation = api.email.sendEmail.useMutation();

    const handleQuickResponseYes = () => {
    }

    const handleQuickResponseNo = () => {
    }

    const handleShowQuickResponse = () => {
        return (
            `<div>
                <button
                    onClick={handleQuickResponseYes}
                >
                    Yes
                </button>
                <button
                    onClick={handleQuickResponseNo}
                >
                    No
                </button>
            </div>`
        )
    }

    const handleSendEmail = async () => {
        try {
            if (quickResponseSettings) {
                content = content.concat(...(handleShowQuickResponse()));
            }
            console.log("content: ", content);
            sendEmailMutation.mutateAsync({
                senderId: senderId,
                subject: subject,
                content: content,
                recipientsId: recipientsId,
                quickResponseSettings: quickResponseSettings
            });
            console.log("Email sent successfully");
        } catch (err) {
            console.error("Error sending email");
        }
    }

    return (
        <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={handleSendEmail}
        >
            Send
        </Button>
    )
}

export default SendEmailButton;