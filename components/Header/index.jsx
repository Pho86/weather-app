export default function Header() {

   return (
      <nav className="p-6 flex bg-slate-700 w-full">
         <ul className="flex justify-between w-full">
            <li className="font-bold text-xl text-white">
               Today's Weather Overview
            </li>
            <a href="https://github.com/Pho86" target="_blank">
               <li className="font-semibold text-xl text-white">
                  Made by Philip Ho 🐒
               </li>
            </a>
         </ul>
      </nav>
   )
}