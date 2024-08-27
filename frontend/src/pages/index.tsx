import { GET_SOME_EXAMPLES } from "@/graphQL/queries/getSomeExamples";
import { Example } from "@/types/Example";
import { useQuery } from "@apollo/client";

export default function Index() {
    const env = process.env.NEXT_PUBLIC_YOUR_SECRET;

    const { loading, error, data } = useQuery(GET_SOME_EXAMPLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occured.</p>;
    if (data) {
        const { getSomeExamples } = data;

        return (
            <>
                <div>Index: {env}</div>
                {getSomeExamples.map((element: Example) => (
                    <p key={element.id}>{element.title} {element.category ? `from ${element.category?.title}` : null}</p>
                ))}
            </>
        );
    }
}
