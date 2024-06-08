export default function extractDate() {
    const d = new Date()

    const currentDate = d.getDate()
    const currentMonth = d.getMonth() + 1
    const currentYear = d.getFullYear()

    return `${currentDate}-${currentMonth}-${currentYear}`
};
