"use client";

import {
  genrateShortUrlAction,
  IShortURLResponseType,
} from "@/actions/geneate-shorturl-action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState: IShortURLResponseType = {
  success: false,
};

export default function GenerateShortURLForm() {
  const [state, formAction] = useActionState(
    genrateShortUrlAction,
    initialState,
  );

  return (
    <>
      <form action={formAction} className="flex flex-col gap-3">
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Enter your long URL here..."
          className="w-full rounded-full border border-slate-400 px-4 py-2 focus:ring-1 focus:ring-slate-500 focus:outline-none"
          required
          autoComplete="off"
          title="Please enter a valid URL"
          autoFocus
        />

        {!state.success && <p className="mx-2 text-red-500">{state?.error}</p>}

        {state.success && (
          <p className="mx-2">
            Your short url is{" "}
            <span className="text-green-500 underline">
              {`${window.location.origin}/${state?.data}`}
            </span>
          </p>
        )}

        <SubmitButton />
      </form>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${pending ? "bg-slate-300" : "bg-slate-900"} mr-1 self-end rounded-full px-4 py-2 text-white hover:cursor-pointer`}
      disabled={pending}
    >
      {pending ? "Generating..." : "Generate"}
    </button>
  );
}
