import { vi } from "vitest";
export const auth ={
  api: {
    getSession: vi.fn().mockResolvedValue({
      user: {
        id: "kEc9akKbpkUnYUV2tmCaBVYvurEOFSh5",
        email: "teste@gmail.com"
      }
    })
  }
};
