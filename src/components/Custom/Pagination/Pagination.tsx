
import {Pagination,PaginationCursor} from "@nextui-org/react";

export const CPagination = () => {
    return (
        <div className="flex items-center justify-between border border-stroke bg-white px-4 py-3 sm:px-6 mt-4 dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing
                        <span className="font-medium"> 1 </span>
                        to
                        <span className="font-medium"> 10 </span>
                        of
                        <span className="font-medium"> 97 </span>
                        results
                    </p>
                </div>
                <div>
                    <Pagination disableAnimation={false} showControls total={10} initialPage={1}/>
                </div>
            </div>
        </div>

    )
}
