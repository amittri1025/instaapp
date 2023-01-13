function HeroSection({pageName}) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {pageName}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h2 className= "my-4">Hello everyone I am amit</h2>
          <a className="text-white bg-gray-700 hover:bg-gray-500 px-8 py-2 font-medium rounded-md  " href="#">Sign In</a>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

export default HeroSection;
