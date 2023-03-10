import Image from "next/image";

export default function Contact(props) {
  let default_size,
    wantedly_size = 0;
  function set_default_size() {
    {
      props.width >= 500 ? (default_size = 80) : (default_size = 50);
    }
    return default_size;
  }

  function set_wantedly_size() {
    {
      props.width >= 500 ? (wantedly_size = 130) : (wantedly_size = 90);
    }
    return wantedly_size;
  }
  return (
    <div className="wx-6/12 mx-auto text-center my-20 mb-0" id="contact">
      <h1 className="font-bold text-5xl border-black border-l-4 border-r-4 px-3 mx-auto wx-6/12 inline-block">
        CONTACT
      </h1>
      <div className="justify-center flex my-10">
        <a href="https://twitter.com/gorurobo_tech" className="mx-5 my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={set_default_size()}
            height={set_default_size()}
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
        <a href="https://github.com/GoRuGoo" className="mx-5 my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={set_default_size()}
            height={set_default_size()}
            fill="currentColor"
            className="bi bi-github "
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a href="mailto:goru.technology@gmail.com" className="mx-5 my-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={set_default_size()}
            height={set_default_size()}
            fill="currentColor"
            className="bi bi-envelope "
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </a>
        <a href="https://www.wantedly.com/id/itoyuta" className="mt-1.5">
          <Image
            src={"/wantedly_black.svg"}
            width={set_wantedly_size()}
            height={set_wantedly_size()}
            alt="wantedly"
          />
        </a>
      </div>
    </div>
  );
}
