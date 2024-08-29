import { GET_SOME_EXAMPLES } from "@/graphQL/queries/getSome";
import { Example } from "@/types/Example";
import { GetServerSideProps } from "next";
import { initializeApollo } from "@/lib/apolloClient"; 

interface Props {
    examples: Example[];
}

export default function Index({ examples }: Props) {
    const env = process.env.NEXT_PUBLIC_YOUR_SECRET;

    return (
        <>
            <div>Index: {env}</div>
            {examples.map((element: Example) => (
                <p key={element.id}>{element.title} {element.category ? `from ${element.category?.title}` : null}</p>
            ))}
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const apolloclient = initializeApollo();

    const { data } = await apolloclient.query({
        query: GET_SOME_EXAMPLES,
    });

    return {
        props: {
            example: data.getSomeExamples,
        }
    }
}

// MARCHE PAS