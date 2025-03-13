"use client";

import {
  genrateShortUrlAction,
  IShortURLResponseType,
} from "@/actions/geneate-shorturl-action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";
import copyToClipboard from "@/lib/utils/copy-to-clipboard";

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
      <form
        action={formAction}
        className="flex rounded-md border border-slate-800 p-1 shadow-[-6px_-6px_20px_rgba(0,0,0,0.05),6px_6px_20px_rgba(45,78,255,0.1)]"
      >
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Enter your long URL here..."
          className="w-full rounded-md px-4 py-2 focus:outline-none"
          required
          autoComplete="off"
          title="Please enter a valid URL"
          autoFocus
        />

        <SubmitButton />
      </form>

      <div className="mt-3 text-lg">
        <FormResponse state={state} />
      </div>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${pending ? "bg-slate-300" : "bg-slate-900"} mr-1 flex gap-1 rounded-md px-3 py-2 text-white hover:cursor-pointer`}
      disabled={pending}
    >
      {pending ? <LoaderCircle className="animate-spin" /> : null}
      Generate
    </button>
  );
}

function FormResponse({ state }: { state: IShortURLResponseType }) {
  if (!state.success)
    return <p className="mx-2 text-red-500">{state?.error}</p>;

  return (
    <p className="mx-2">
      Click to Copy:{" "}
      <span
        onClick={(e) =>
          copyToClipboard(`${window.location.origin}/${state?.data}`)
        }
        className="cursor-pointer text-green-500 underline"
      >
        {`${window.location.origin}/${state?.data}`}
      </span>
    </p>
  );
}
