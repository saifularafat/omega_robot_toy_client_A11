import { RotatingSquare } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex items-center justify-center pt-10">
            <div>
                <RotatingSquare
                    height="100"
                    width="100"
                    color="orange"
                    ariaLabel="rotating-square-loading"
                    strokeWidth="4"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <p className="text-center text-slate-900 animate-pulse tracking-wider font-medium pl-2 -mt-3">Loading<span className="text-2xl text-red-600">.</span><span className="text-2xl text-sky-500">.</span><span className="text-2xl text-yellow-300">.</span><span className="text-2xl text-slate-600">.</span><span className="text-2xl text-sky-500">.</span></p>
            </div>
        </div>
    );
};

export default Loading;