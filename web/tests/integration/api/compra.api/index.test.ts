import { describe, it, expect } from "vitest";
import { testApiHandler } from "next-test-api-route-handler";
import * as handler from "@/app/(backend)/api/produtos/route";
import ProdutoService from "@/app/(backend)/services/Produtos";

describe("Rotas de Compra", () => {

  
  it("GET /api/compra pega compras do usuario", async () => {
      await testApiHandler({
      appHandler: handler,
      requestPatcher: (req) => {
        return new Request(
          `http://localhost/api/compras?id=${"kEc9akKbpkUnYUV2tmCaBVYvurEOFSh5"}`, //procuro pra esse id de user
          req
        );
      },
      test: async ({ fetch }) => {
        const res = await fetch({
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
  
        const compras = await res.json();
        expect(res.status).toBe(200);
        expect(Array.isArray(compras)).toBe(true);
      },
    });
  });
  
})