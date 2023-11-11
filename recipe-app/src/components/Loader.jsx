import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <article id="loader-modal" className="loader-modal">
      <Oval
        height={100}
        width={100}
        color="#40e0d0"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </article>
  );
}

export default Loader;
