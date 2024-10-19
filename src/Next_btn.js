import arrow from './Assets/arrow.png';

function Next_btn() {
    return (
      <div className="flex flex-col justify-center items-center mb-2">
        <div className="max-w-sm w-3/4 appearance-none border rounded bg-black p-2 text-white">
          <div className="flex flex-col md:flex-row">
            <div className="h-full w-full md:w-3/4 flex items-center justify-center text-xs">
              Next
            </div>
            <div className="w-full h-auto md:w-1/4 flex items-center justify-center">
              <img src={arrow} alt="Arrow" className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Next_btn;