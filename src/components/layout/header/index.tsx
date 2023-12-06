// third-party

// project import

// Interface
interface IHeaderProps {}

// ==============================|| Header ||============================== //

const Header = (props: IHeaderProps) => {
    return (
        <header className="fixed top-0 left-[240px] flex flex-row justify-between items-center w-[calc(100%-240px)] px-8">
            <div className="">left</div>
            <div className="">right</div>
        </header>
    );
};

export default Header;
