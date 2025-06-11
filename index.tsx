export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold mb-4">CronoFlow</h1>
      <p className="text-lg mb-6">Gere e compartilhe cronogramas de estudo automaticamente</p>
      <a href="/login" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Começar agora</a>
    </div>
  )
}