export default function Index() {
    const env = process.env.NEXT_PUBLIC_YOUR_SECRET;
    
    return (
        <div>Index: {env}</div>
    );
}
