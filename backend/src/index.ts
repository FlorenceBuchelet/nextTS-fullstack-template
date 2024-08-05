import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { EntityResolver } from "./resolvers/EntityResolver";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./dataSource/dataSource";
import { cleanDB } from "./dataSource/cleanDB";
import { initTestData } from "./dataSource/initTestData";

const port = 4000;

export async function startServerApollo() {

    const schema = await buildSchema({
        resolvers: [EntityResolver],
    });

    const server = new ApolloServer({schema});

    await dataSource.initialize();

    // FIXME: Uncomment this if needed
    // await cleanDB();
    // await initTestData();

    const { url } = await startStandaloneServer(server, {
        listen: { port },
    });

    console.log(`🚀🚀 Server running at ${url}`);
}

startServerApollo();