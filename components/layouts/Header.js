export default function Header() {
  return (
    <nav class="bg-white py-8 flex itemx-center m-auto">
      <div class="container ">
        <a href="/" class="font-bold  text-5xl px-5">
          Yuta.
        </a>
      </div>
      <div>
        <ul class="flex font-bold">
          <li>
            <a href="#" class="block py-2  pr-10">
              Bio
            </a>
          </li>
          <li>
            <a href="#" class="block py-2  pr-10">
              Skills
            </a>
          </li>
          <li>
            <a href="#" class="block py-2  pr-10">
              Works
            </a>
          </li>
          <li>
            <a href="#" class="block py-2  pr-10">
              Awards
            </a>
          </li>
          <li>
            <a href="#" class="block py-2  pr-10">
              Favorite
            </a>
          </li>
          <li>
            <a href="#" class="block py-2  pr-10">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
