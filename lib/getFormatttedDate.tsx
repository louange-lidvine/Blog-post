export default function getFormattedDate(dateString: string): string {
    try {
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            dateStyle: "long",
        }).format(new Date(dateString));
        return formattedDate;
    } catch (error) {
        console.error("Error:", error);
        return "Invalid Date";
    }
}
