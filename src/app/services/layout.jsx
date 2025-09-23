import SideNavbar from "../../SideNavbar"

export default function ServicesLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
       <div className="mx-auto grid min-h-screen grid-cols-1 md:grid-cols-4">
        <aside className="hidden bg-gray-100 font-playfair p-4 shadow-lg md:col-span-1 md:grid md:w-full">
          <SideNavbar />
        </aside>
        <main className="col-span-3 w-full bg-gray-50">
          {children}
        </main>
      </div>
      </section>
    )
  }