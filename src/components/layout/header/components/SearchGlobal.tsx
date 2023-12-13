// third-party
import { IoSearchOutline } from 'react-icons/io5';
// project imports

// Interface
interface ISearchGlobalProps {}

// ==============================|| SearchGlobal ||============================== //

const SearchGlobal = (props: ISearchGlobalProps) => {
    const handleSearch = () => {};
    return (
        <>
            <div className="">
                <div className="flex flex-row items-center rounded-full bg-grey-primary-light">
                    <div
                        className="w-8 h-8 cursor-pointer flex items-center justify-center hover:opacity-80 transition-all"
                        onClick={handleSearch}
                    >
                        <IoSearchOutline />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none leading-4 w-[calc(100%-32px)]"
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    />
                </div>
            </div>
        </>
    );
};

export default SearchGlobal;
