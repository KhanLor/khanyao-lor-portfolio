export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Resume</h1>
          <div className="flex gap-2">
            <a
              href="/Khanyao_Lor_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Open PDF
            </a>
            <a
              href="/Khanyao_Lor_Resume.pdf"
              download
              className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Download
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <iframe
            title="Khanyao Lor Resume"
            src="/Khanyao_Lor_Resume.pdf#view=FitH"
            className="h-[82vh] w-full"
          />
        </div>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          If your mobile browser still downloads the file, tap Open PDF and choose a browser app with PDF preview.
        </p>
      </div>
    </main>
  )
}
