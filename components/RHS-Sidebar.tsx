// Helper for the Table of Contents
export const DashboardTableOfContents = ({ 
  items 
}: { 
  items: { title: string; id: string }[] 
}) => (
  <div className="hidden text-sm lg:block">
    <div className="sticky top-20 -mt-10 pt-4">
      <div className="space-y-2">
        <p className="font-black uppercase tracking-widest text-xs text-neo-black/40">On This Page</p>
        <ul className="m-0 list-none">
          {items.map((item) => (
            <li key={item.id} className="mt-0 pt-2">
              <a
                href={`#${item.id}`}
                className="inline-block no-underline text-neo-black/60 hover:text-neo-black font-bold transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Tab Trigger for Preview/Code
export const TabButton = ({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all border-b-4 ${
      active 
        ? "border-neo-black bg-neo-yellow-400 text-neo-black" 
        : "border-transparent text-neo-black/40 hover:text-neo-black"
    }`}
  >
    {children}
  </button>
);