export default async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Link copied to clipboard");
  } catch (error) {
    // TODO: add toast here
    
    if (error instanceof Error) alert(error.message);

    alert("Unable to copy text to clipboard");
  }
}
