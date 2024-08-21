import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ExampleResolver } from "./resolvers/ExampleResolvers";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./dataSource/dataSource";
import { cleanDB } from "./dataSource/cleanDB";
import { initTestData } from "./dataSource/initTestData";
import { CategoryResolver } from "./resolvers/CategoryResolvers";

const port = 4000;

export async function startServerApollo() {

    const schema = await buildSchema({
        resolvers: [ExampleResolver, CategoryResolver],
    });

    const server = new ApolloServer({schema});

    await dataSource.initialize();

    // FIXME: Comment this after first launch to avoid doubles
    //await cleanDB();
    //await initTestData();

    const { url } = await startStandaloneServer(server, {
        listen: { port },
    });

    console.log(`🚀🚀 Server running at ${url}`);
}

startServerApollo();