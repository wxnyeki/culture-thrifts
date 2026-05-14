

export default function Pagination ({totalPages, currentPage, onPageChange}){
    
    
    if (totalPages <= 1) return null; // dont load the component when there is only one page

  return (
    <div className="flex justify-center items-center gap-3 mt-10 mb-10">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white border border-zinc-200 rounded-xl font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors"
      >
        PREV
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-10 h-10 rounded-xl font-bold transition-all ${
                currentPage === pageNum
                  ? "bg-black text-white scale-110 shadow-md"
                  : "bg-white text-zinc-500 border border-zinc-200 hover:border-black hover:text-black"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white border border-zinc-200 rounded-xl font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors"
      >
        NEXT
      </button>
    </div>
  );
}


 