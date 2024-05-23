// Copyright 2024 the JSR authors. All rights reserved. MIT license.
import type { Handlers } from "@fresh/core";
import { State } from "../../util.ts";

export const handler: Handlers<void, State> = {
  GET(ctx) {
    return new Response(null, {
      headers: { location: "/admin/scopes" },
      status: 307,
    });
  },
};
