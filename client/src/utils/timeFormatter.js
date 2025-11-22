export const timeFormatter = (seconds) => {
    const hours = Math.floor(seconds / 3600); // Calculate hours
    const minutes = Math.floor((seconds % 3600) / 60); // Calculate minutes
    const remainingSeconds = Math.round(seconds % 60); // Round remaining seconds

    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')} `;

}