"use client";

import { genrateShortUrlAction } from "@/actions/geneate-shorturl-action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function GenerateShortURLForm() {
  const [state, formAction] = useActionState(genrateShortUrlAction, {
    message: "",
  });

  return (
    <>
      <form action={formAction} className="flex flex-col gap-3">
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Enter your long URL here..."
          className="w-full rounded-md border border-slate-400 px-2 py-1 focus:ring-1 focus:ring-slate-500 focus:outline-none"
          required
          autoComplete="off"
        />

        <SubmitButton />

        {state.message && <p style={{ color: "green" }}>{state.message}</p>}
      </form>
    </>
  );
}

function SubmitButton() {
  const { pending, action, data, method } = useFormStatus();

  console.log({ pending, action, data, method });

  return (
    <button
      type="submit"
      className={`${pending ? "bg-slate-300" : "bg-slate-900"} mr-1 self-end rounded-md px-4 py-2 text-white hover:cursor-pointer`}
      disabled={pending}
    >
      {pending ? "Generating..." : "Generate"}
    </button>
  );
}
