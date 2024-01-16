export default function Loader() {
  return (
    <div
      className='flex min-h-[500px] flex-col items-center justify-center'
      data-testid='loader'
    >
      <div className=' relative inline-block h-[80px] w-[80px]'>
        <div
          className=' absolute m-[8px] box-border block h-[64px] w-[64px] animate-spin rounded-full border-[8px] border-b-black'
          data-testid='animation-container'
        ></div>
      </div>
      <span>Loading...</span>
    </div>
  );
}
