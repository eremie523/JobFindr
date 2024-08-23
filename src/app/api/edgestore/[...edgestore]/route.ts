import { initEdgeStore } from "@edgestore/server";
import { CreateContextOptions, createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app"
import { z } from "zod";

type contextInitValsType = {
    userId: string,
    userRole: "admin" | "owner" | "user",
}

const es = initEdgeStore.context<contextInitValsType>().create();

function createContext({req}: CreateContextOptions): contextInitValsType {
    //get the user info from your auth provider;

    return {
        userId: "123",
        userRole: "admin"
    };
}

const esRouter = es.router({
    myPublicImages: es.imageBucket({
        maxSize: 1024 * 1024 * 5, //5MB
    }).input(
        z.object({
            type: z.enum(["profile", "post"])
        })
    ).path(({input}) => [{ type: input.type}]),

    myProtectedFiles: es.fileBucket({
        maxSize: 1024 * 1024 * 5, //5MB,
    })
    .input(
        z.object({
            type: z.enum(["protected"])
        })
    )
    .path(({ctx}) => [{owner: ctx.userId}])
    .accessControl({
        OR: [
            {
                userId: { path: 'owner' },
            },
            {
                userRole: "admin"
            }
        ]
    }),
});

const handler = createEdgeStoreNextHandler({
    router: esRouter,
    createContext,
})

export { handler as GET, handler as POST };

export type EdgeStoreRouter = typeof esRouter;