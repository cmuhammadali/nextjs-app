"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button
        onClick={reset}
        className="w-32 bg-slate-500 m-2 text-white rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
